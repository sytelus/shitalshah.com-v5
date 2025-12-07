---
title: 'How to Get and Interpret GPU Memory Profiling'
author: Shital Shah
draft: true
private: true
date: '2025-12-06T15:17:55-08:00'
slug: 'gpy-memory-profiling'
tags:
  - Machine Learning

---

The `torch.OutOfMemoryError` is one of the dreaded error where many folks descend into making guesses until something works. A much better, faster and disciplined way is to profile memory utilization. Like radiologists, developing intuition on  profile images can immensely help you find anomalies and stupid mistakes in the training or inferencing code. Especially in the age of RL where we need to have very tight memory management, memory profiling skills are extremely valuable.

## Getting Memory Profile Data

To keep things simple, I (well, mostly Claude) have created a [standalone Python module](https://github.com/sytelus/nanugpt/blob/main/nanugpt/acc_mem_profiler.py) that you can drop into any project and start profiling with just a line of code, like this:

```python
  with AccMemProfiler() as prof:
      for _ in range(3):
          training_step(model, optimizer, input_ids, labels)

  prof.save_html('path/to/profile.html')
```

Open the saved `profile.html` to see the profile results. To follow along this tutorial, you can use the [code example](https://github.com/sytelus/nanugpt/blob/b33d17c96f045eb60318209dcb4b520d5cbe5be3/scripts/profiling/model_memory.py) that profiles Qwen 2.5 1.5B model type architecture for 3 training steps. I also threw in activation checkpointing just for fun. To run this code on GPUs with < 48GB RAM, reduce batch size as needed.

## Interpreting Memory Profile Data

There are strange shapes in `profile.html` but we can already see 3 repeating patterns corresponding to 3 training steps:

![Overall memory profile](overall_profile.png)

Each color in the profile is selected using hash of call stack. So the alternating layers of colors indicates memory operations happening layer by layer. The increasing slop with stripes means layers are allocating something one after another while decreasing slop means they are freeing something in sequence.

You can move cursor over each color to see corresponding call stack. Important thing to remember is that memory operation happened during that call (not where your cursor is). You may typically see forward, backward, zero_grad calls on the call stack. You may even see forward call in the backward call stack because of activation checkpointing. One tip is that frontier LLMs are good at interpreting the call stacks about 50% of the time :smiley:.

Notice that there is fixed band at the bottom that stays along entire step. These are the allocations for model parameters and optimizer states. In our case, model parameters are 6GB and Adam optimizer has 2 states for each parameter, so that's additional 12GB. So, fixed memory is about 18GB which checkouts.

## Passes in Training Step

Let's take the first training step and break it down.

![Memory profile for one training step](one_step.png)

First notice a lot stripes in various places. Each strip corresponds to memory operations in a layer. Multiple stacked stripes is something happening layer by layer.

### Forward Pass

When we execute forward pass, each layer starts saving its inputs because we are doing activation checkpointing. Later these inputs will be used to recompute activations during backward pass. This is what the first half of the triangle in above image means.

The important part of forward pass from the memory perspective is the what happens in last layer where we compute the logits. Due to large vocab size (151k), logits are huge and we can see their relative size in memory compared to everything else.

### Zeroing Grads

After loss computation, we call `optimizer.zero_grad()`. Notice at this point logits tensor has gone out of scope but miraculously its still alive! This is because they have reference in autograd graph as we still yet have to do backprop. During `zero_grad()`, memory consumption does goes down as the previous `.grad` values get freed up layer by layer causing the downward slop and forming the red parallelogram.

### Backward Pass

When the `.backward()` call starts and we see a spike at the end of red parallelogram (which is start of the `.backward()` call).

![Backward Pass Start](after_zero_grad.png)

This big spike is then immediately followed by straight cliff. The spike up is because significant memory needed for computing derivative of softmax. Once this is done, we no longer need logits and so they get freed up forming a straight cliff down.

Then we go around each layer performing backward pass. Notice there is tiny spike at each layer forming little waves. This is because we have enabled activation checkpointing so at the start of backward pass for each layer there is temporary allocations due to activation recomputation.

Also, notice that LM head generates large gradients which forms solid green stripe that will stay in memory until we call `zero_grad()` again.

During activation recomputation, we will use saved input to each layer to recompute activations and after that we don't need them so they get removed one by one.

### Optimizer Step

FInally, my favorite part of the profile: `optimizer.step()`!

![Optimizer step profile](adam_profile.png)

It has a peculiar triangle shape and, if you look closely, it has a little flag pole on the top forming sort of temple or pyramid. It sits on two bases of solid stripes which adds to its phenomenal beauty!

Notice that orange base starts bit early and that is actually embedding layer grads formed by the end of backward pass. They also stay along until we call next `zero_grad()`. The rest of the shape of `.step()` profile is tribute to how Adam optimizer works.

Let's recall Adam optimizer has two moments $\beta1$ which operates to smooth out grads and $\beta2$ which operates on $grad^2$. Later we will do `sqrt` to normalize $grad^2$ trajectory so we need additional space for these values which is what green band is. The stripes in triangle again indicates layer by layer operations where adam algorithm will gradually compute the update for each parameter.

The spike at the top is where parameter update actually happens. The cause of the spike seems to be due to temporaty allocation for the space needed for division in the Adam update formula for all parameters at once in fused version. Once update is all done, the temp value for each parameter gets freed up layer by layer forming the downward slop of the triangle.

## What Can You Learn

You can stare this plots all day and keep finding new cool things. We can immediately learn many little things, for example, if you do `optimizer.zero_grad(set_to_none=False)`, you will not see downward slop on the red block and you will spend less time in deallocations for the small model.

We often focus too much on parameter count for small models and not enough on logit size. As above plot reveals, logits dominates memory utilization for small models if you have large vocab. Large vocab for small models also causes [softmax bottleneck](https://arxiv.org/abs/2404.07647). Unfortunately, many small modern models still tend to use old tokenizers created for large models and suffer from the consequences.

Large logits are also the reason why we want to fuse loss with logit computation! You can simply do this by including loss computation within `forward()` call so that `model.compile()` can fuse them. This saves big on compute time for not having to transfer logits back and forth in memory for small models (sometimes upwards of 20-30% for small models).