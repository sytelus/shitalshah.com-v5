---
title: 'Don''t Lose to the Loss Plateau: Schedule Learning Rate Drops'
draft: true
date: 2023-08-07T09:49:09+00:00
slug: '202308070949-dont-lose-loss-plateau'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1688381735950860288'
  type: 'reply'
  is_thread: False
---



{{< tweet user="mark_woodworth" id="1688380177536184321" >}}

[@tomgoldsteincs](https://x.com/tomgoldsteincs) You can keep running and loss will plateau eventually. The thing is that if you *then* decrease LR then loss again starts decreasing! So, every time loss plateaus, you can keep decreasing LR but that’s overall less efficient than reducing LR on a schedule.

[Discussion](https://x.com/sytelus/status/1688381735950860288)
