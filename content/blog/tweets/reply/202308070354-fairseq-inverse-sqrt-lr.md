---
title: 'Inverse Square Root LR: Fairseq''s Shortcut Without Cool Down'
draft: true
date: 2023-08-07T03:54:22+00:00
slug: '202308070354-fairseq-inverse-sqrt-lr'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1688292451935784960'
  type: 'reply'
  is_thread: False
---



{{< tweet user="gallabytes" id="1688198239269650432" >}}

This sounds right. If you look at plot from the paper, LR decays rapidly for first 50k steps after warmup. Also, look at this code in fairseq which implements inverse sqrt LR but without cool down: <https://fairseq.readthedocs.io/en/latest/_modules/fairseq/optim/lr_scheduler/inverse_square_root_schedule.html>

[Discussion](https://x.com/sytelus/status/1688292451935784960)
