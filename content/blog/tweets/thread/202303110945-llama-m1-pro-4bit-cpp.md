---
title: 'LLaMA Sprints on M1 Pro: 16 Tokens/s via 4-bit C++ Magic'
draft: false
date: 2023-03-11T09:45:56+00:00
slug: '202303110945-llama-m1-pro-4bit-cpp'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1634370038349303808'
  type: 'thread'
  is_thread: True
---



"ChatGPT" on laptop: LLaMA 7B now runs on Apple M1 Pro  at 16 tokens/s on Apple Silicon! 

Secret? Pure C++ code and 4-bit quantization.

Credits: [@ggerganov](https://x.com/ggerganov) 
1/n
<https://github.com/ggerganov/llama.cpp>

Hacker community is buzzing with LLaMA. The effect on community is very similar to what happened when StableDiffusion models were released. Folks have already figured out much better generation strategies. The 33B model now can be run on a single RTX 4090 @ 4 tokens/sec!

There is no reason why full 75B model cannot run on 64GB M2 notebooks. Apple's design of unified 200GB/s large memory shared between CPU/GPU/ANU will likely become standard in PC industry as well.

[Discussion](https://x.com/sytelus/status/1634370038349303808)
