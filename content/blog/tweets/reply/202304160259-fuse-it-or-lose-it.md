---
title: 'Fuse It or Lose It: Efficient Benchmarking of 100B+ Models'
draft: true
date: 2023-04-16T02:59:45+00:00
slug: '202304160259-fuse-it-or-lose-it'
is_tweet: true
tweet_info:
  id: '1647328879751700481'
  type: 'reply'
  is_thread: False
---



{{< tweet user="apsdehal" id="1646923085696876544" >}}

The main thing to look out in benchmarking is optimized kernels and framework. For example, if you are benchmarking 100B+ models on NVidia A100/H100 but not using fused kernels + carefully setup DeepSpeed stage-3 then you are not using the cluster efficiently and your… [continue reading](https://x.com/sytelus/status/1647328879751700481)
