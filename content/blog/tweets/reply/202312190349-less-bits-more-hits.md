---
title: 'Less Bits, More Hits: The Quantization Escape Plan'
draft: true
date: 2023-12-19T03:49:20+00:00
slug: '202312190349-less-bits-more-hits'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1736836059307377056'
  type: 'reply'
  is_thread: False
---



{{< tweet user="finbarrtimbers" id="1736801042925596802" >}}

Intuitively, quantization should work.  Ultimately, you are picking from 1 token out of N in the output. It’s a ranking problem so you don’t need each logit value correct to 5th decimal point. You can get away with just log N bits. Tracing it back to matmul, you don’t need most… [continue reading](https://x.com/sytelus/status/1736836059307377056)
