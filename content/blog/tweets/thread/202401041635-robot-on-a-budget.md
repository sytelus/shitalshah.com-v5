---
title: 'Robot on a Budget: Co-training with Cheap Hardware'
draft: false
date: 2024-01-04T16:35:45+00:00
slug: '202401041635-robot-on-a-budget'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1742827143183343882'
  type: 'thread'
  is_thread: True
---



So, this robot was made under $32k. It’s driven by a cheap laptop with a mobile 3070ti. It has 2 low res cameras on wrist and one front facing (+ proprioception from arms). Models are tiny ResNet18 backbones. The key insight is that co-training improves performance!   1/3 <https://x.com/zipengfu/status/1742602881390477771>

According to paper, imitation learning seems to be robust against randomization, for ex, different locations/attire of person. However, I am sure there are obvious and more often failure cases (for example, what if person refuses to do hi-fi or pan is turned upside down).

Fun fact: I was talking with someone about similar demo being 3-5 years out just last year :). I still don’t think we are quite there but it feels a lot more closer with recent progress in multimodal models with much deeper understanding of the world and sim2real  (ex, swift).

Authors just added the bloopers reel. This is my primary litmus test of a great work, BTW. <https://x.com/tonyzzhao/status/1743378437174366715>

[Discussion](https://x.com/sytelus/status/1742827143183343882)
