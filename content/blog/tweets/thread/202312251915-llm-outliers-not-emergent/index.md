---
title: 'Large Activation Outliers'
draft: false
date: 2023-12-25T19:15:37+00:00
slug: '202312251915-llm-outliers-not-emergent'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1739243496916349209'
  type: 'thread'
  is_thread: True
---



One surprising phenomenon for LLMs has been the large activation outliers in certain dimensions which made quantization hard but were believed to be correlated with emergent properties.

Well, this paper points out that they might in fact artifacts of training choices!

![https://pbs.twimg.com/media/GCMIvisasAA2IFi.jpg](lhdbvHPxr4.jpg)

Meanwhile, if you are practitioner, the takeaway message seems to be: use bf16, weight_decay = 0.1, dropout=0, grad_clip=1 if you want your model to be more quantization friendly.

  <https://arxiv.org/abs/2305.19268>

[Discussion](https://x.com/sytelus/status/1739243496916349209)
