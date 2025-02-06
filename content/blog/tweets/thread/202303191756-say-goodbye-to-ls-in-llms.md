---
title: 'Say Goodbye to the ''L''s in LLMs'
draft: false
date: 2023-03-19T17:56:24+00:00
slug: '202303191756-say-goodbye-to-ls-in-llms'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1637407670201384961'
  type: 'thread'
  is_thread: True
---



While folks in academia are freaking out about not having as much compute as OpenAI and depressed about their research agenda, it might be easy to miss some critical trends. My bet is that both “L” in LLM will be gone in about 2 years. 🧵

Before GPT-4 came out, many people were still quite smug about scaling. One of the biggest thing in GPT-4 paper is the verification that one can precisely predict performance on actual benchmarks like HumanEval with scale. This is huge. Scaling is real and here to stay but…

It’s all about slop of that line on log-linear plot. That slop is actually the compute+sample efficiency. Throughout 2022, many papers demonstrated this slop is much more than what it should be. During 2023 and 2024, we will see phenomena I call “tilting the line”.

So far, lines of successful attacks:

1. Fine tuning (T0, FLAN)
2. Better objectives (UL2, FIM, MIM)
3. Multimodal training (Zhang et al).
4. Sparse modules (Hyena, MoEs)
5. Quantization (GPTQ)

These has already yielded sub 13B models competitive with 2020’s 175B models.

Especially multimodal training is big deal for sample efficiency. A token for image represents far more information than a token for word. From Chinchilla paper, this means couple of order of magnitude reduction in number of parameters. 

And, also, there goes our 2nd “L”.

One curious thing about Moor’s law is that transistor density didn’t doubled through just one thing. Moor observed that  dozens of new improvements kept coming throughout process. There seemed to be endless supply of improvements. There is something very similar happening in AI.

For q in other threads: 

Humans are existence proof (ignoring Chomsky et al) that language understanding shouldn’t require &gt; 1B tokens. Chinchilla curves maps this to model with mere 50M params.
 
Towards this, dataset pruning and distillation work would be super important.

[Discussion](https://x.com/sytelus/status/1637407670201384961)
