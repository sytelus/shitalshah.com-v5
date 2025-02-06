---
title: 'Go with the Flow: Optical Flow Beats Frame Stacking in RL'
draft: false
date: 2019-10-16T05:35:59+00:00
slug: '201910160535-go-with-the-flow-rl'
is_tweet: true
tweet_info:
  id: '1184236503867613184'
  type: 'post'
  is_thread: False
---



Interesting find: Optical flow significantly improves over just stacking frames as input to CNN for RL tasks in a dynamic environment. One can generate it using FlowNet instead of expensive computation. Even diff between two frames works as well or better: <https://arxiv.org/abs/1901.03162>

[Discussion](https://x.com/sytelus/status/1184236503867613184)
