---
title: 'When GPUs Say No: Taming Big Batches with Gradient Accumulation'
draft: false
date: 2019-03-20T12:17:48+00:00
slug: '201903201217-taming-big-batches'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1108236174622023682'
  type: 'post'
  is_thread: False
---



Nice trick: Deep learning jobs in cloud on cheap GPUs like K80 often error outs for imagenet batch sizes &gt; 64 due to small RAM. Solution (Pytorch): Simple inner loop dividing batch in to smaller groups, call .backward() each iteration accumulating gradients and then call step().

[Discussion](https://x.com/sytelus/status/1108236174622023682)
