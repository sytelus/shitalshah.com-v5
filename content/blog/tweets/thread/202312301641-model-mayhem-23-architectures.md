---
title: 'Hyperparams for 23 Architectures'
draft: false
date: 2023-12-30T16:41:32+00:00
slug: '202312301641-model-mayhem-23-architectures'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1741016657013973412'
  type: 'thread'
  is_thread: True
---



Nice collection of architecture and training parameters for 23 models in one place!

Some observations and rant :) 🧵

{{< tweet user="BlancheMinerva" id="1740365334467756267" >}}

As someone who has spent ton of time in NAS, what bugs me the most is how little effort is spent on principled approach to find these parameters. Current sentiment that only number of params matters and arch is irrelevant has blocked the progress and done a significant damage.

For instance, Llama model config for 6.7B is straight copy of  GPT3 with few architecture changes. No one is asking why d_model=4096 is the good choice with n_layer=32. And why the hack number of layers is so often kept same as number of heads?

GPT3 folks put out above numbers more than 3.5 years ago with zero justification and explanation of any kind. Yet so many newer models still use them with almost a religious faith in OpenAI!

Same goes for cosine schedule. In recent paper there is pretty strong evidence that cosine schedules are sub optimal than linear but so many training procedure including llama series still use them with justification that is nothing more than faith. <https://arxiv.org/abs/2310.07831>

One reason for this is, of course, scarcity of compute and the fact that traditional methods don’t scale. My own experiments with methods like LRRT yielded rather weird results for large models. I think muP is promising but unused by all but likely just 1 out of 23 models!

Another funny thing is so many models using exact same LR as Llama or even old GPT papers! LR can be significantly different based on data complexity for exact same architecture. If your datasets are not same as OpenAI/Meta, you are already starting off with a performance hit.

[Discussion](https://x.com/sytelus/status/1741016657013973412)
