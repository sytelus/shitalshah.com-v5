---
title: 'GPU''ve Got Issues: Generalization Gaps on DGX-1'
draft: true
date: 2018-05-16T14:23:07+00:00
slug: '201805161423-gpus-generalization-gap-dgx1'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '996652246753361923'
  type: 'reply'
  is_thread: False
---



{{< tweet user="DmitryUlyanovML" id="996065468510359552" >}}

DGX-1 has multiple GPUs. Most likely cause is that your code is trying to distribute computing on DGX-1 which will not work as expected unless proper care is take (search for “generalization gap”). Try configuring your code to use only single GPU to verify this.

[Discussion](https://x.com/sytelus/status/996652246753361923)
