---
title: 'No Excuses: Triple Your LLM Training Speed with SwiGLU, ALiBi & μP'
draft: false
date: 2023-09-22T14:27:43+00:00
slug: '202309221427-triple-llm-training-speed'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1705121681390674356'
  type: 'thread'
  is_thread: True
---



If you are doing LLM (&gt;1B) training runs, you ought to do these 3 things:

1. Use SwiGLU
2. Use ALiBi 
3. Use µP

Why? Your training will be almost 3X faster! 

You can do 3 runs for the price of 1.

You can go for much bigger model or train longer.

There is no excuse. 

1/3

It just sad to see many latest multi-million runs still use old archs and training. It might be because there hadn’t been much clarity on how much difference these arch+training upgrades make. Fortunately, this beautifully executed paper has good study:
<https://arxiv.org/abs/2309.11568>

While I loved the ablation studies and paper is very nicely done, perf for 3B model size seems to have been more or less stuck in the ballpark. There is a serious issue in all OSS datasets for number of code tokens and when they are used in training. 

Still lot to learn!

[Discussion](https://x.com/sytelus/status/1705121681390674356)
