---
title: 'Cache Me Not: GPU Performance and Pinned Memory'
draft: true
date: 2019-12-04T14:15:56+00:00
slug: '201912041415-cache-me-not-gpu-pinned-memory'
is_tweet: true
tweet_info:
  id: '1202109258562588672'
  type: 'reply'
  is_thread: False
---



{{< tweet user="srchvrs" id="1202097462544125952" >}}

Each CPU core has its own L1. The L2 is shared among cores (on high-end CPUs maybe not). GPU performance heavily depends on data transfer between main RAM and GPU RAM, not L1 or L2. Make sure to use pinned memory and .cuda(non_blocking=True). Also see <https://devblogs.nvidia.com/how-optimize-data-transfers-cuda-cc/>.

[Discussion](https://x.com/sytelus/status/1202109258562588672)
