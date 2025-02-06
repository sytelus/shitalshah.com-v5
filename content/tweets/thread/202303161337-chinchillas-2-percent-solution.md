---
title: 'Chinchilla''s 2% Solution: Compressing Text with Tiny Models'
draft: false
date: 2023-03-16T13:37:43+00:00
slug: '202303161337-chinchillas-2-percent-solution'
is_tweet: true
tweet_info:
  id: '1636255404283035648'
  type: 'thread'
  is_thread: True
---



It occurs to me that Chinchilla scaling law can also be interpreted as optimal compute neural compression law. 

That is, it can be re-stated as:

To compress K bytes of text (by certain optimal lossy criteria), model capacity of K/50 bytes is required.

I find above form more…

Better numbers are at <https://bellard.org/nncp/>

For enwiki9, gzip only achieves 68% compression while transformers achieves 88%, both lossless.

[Discussion](https://x.com/sytelus/status/1636255404283035648)
