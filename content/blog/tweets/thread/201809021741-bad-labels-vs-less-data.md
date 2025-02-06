---
title: 'Bad Labels vs. Less Data: The ML Training Quiz'
draft: false
date: 2018-09-02T17:41:30+00:00
slug: '201809021741-bad-labels-vs-less-data'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1036202449617354753'
  type: 'thread'
  is_thread: True
---



Quiz: Which one is better for training ML model?

1. Dataset with 100 records with 0 bad labels
2. Dataset with 300 records with 100 bad labels

Answer is 1 in most cases :). The negative impact of bad label doesn’t usually offset availability of additional good labels in same proportion. Many times even 2X or 3X good labels per bad labels doesn’t yield advantage. More here: <https://www.sciencedirect.com/science/article/pii/S1077314217300814>

[Discussion](https://x.com/sytelus/status/1036202449617354753)
