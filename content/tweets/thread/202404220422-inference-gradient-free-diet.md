---
title: 'Inference: When Neural Nets Go on a Gradient-Free Diet'
draft: false
date: 2024-04-22T04:22:02+00:00
slug: '202404220422-inference-gradient-free-diet'
is_tweet: true
tweet_info:
  id: '1782157873365328134'
  type: 'thread'
  is_thread: True
---



Inference is different than training because you don’t need to worry about grads, optimizer states, activations etc. For example, you can run just one layer and while it gets computed you load another in parallel so you never need more than 2 layers worth of accelerator RAM. <https://x.com/teortaxesTex/status/1781894128424386953>

A lot of people still get shocked when they find out that frameworks like llama.cpp can run 70B models even on machines with mere 4GB RAM because they don’t understand above (and a little magical thing called memory mapped files) 😇.

[Discussion](https://x.com/sytelus/status/1782157873365328134)
