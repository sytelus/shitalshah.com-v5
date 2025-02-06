---
title: 'detect_anomaly(True): The Hidden PyTorch Performance Killer'
draft: false
date: 2019-12-14T12:52:27+00:00
slug: '201912141252-set-detect-anomaly-pytorch-performance'
is_tweet: true
tweet_info:
  id: '1205712131577892864'
  type: 'post'
  is_thread: False
---



After spending 2 days of intense debugging why my PyTorch code was running 6X slower finally found cause: an innocuous little statement I'd left in: torch.autograd.set_detect_anomaly(True). In other news py-spy and timebudget are just fantastic and essential perf debugging tools!

[Discussion](https://x.com/sytelus/status/1205712131577892864)
