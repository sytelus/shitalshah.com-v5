---
title: 'When ''52'' Becomes ''5 10e1 2'': Teaching Transformers to Count'
draft: false
date: 2021-02-26T19:34:10+00:00
slug: '202102261934-teaching-transformers-to-count'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1365263884634886154'
  type: 'thread'
  is_thread: True
---



If you ask to do add/subtract to transformers like “What is 52 plus 48?”, it might give right answer upto 2 digits. In below paper authors find that it’s due to sub-word tokenization issue. If you represent “52” as “5 10e1 2” then you can get accurate answers upto 60 digits! 1/2

A more interesting finding is that no matter how much you increase the number of parameters or training data, transformers still cannot learn to do add/subtract with arbitrary number of digits! There is some deep insight lurking here..

<https://arxiv.org/abs/2102.13019>

[Discussion](https://x.com/sytelus/status/1365263884634886154)
