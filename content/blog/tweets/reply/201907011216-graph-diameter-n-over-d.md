---
title: 'Graph Diameter in n⁄d Steps'
draft: true
date: 2019-07-01T12:16:45+00:00
slug: '201907011216-graph-diameter-n-over-d'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1145561859879161856'
  type: 'reply'
  is_thread: False
---



{{< tweet user="Reza_Zadeh" id="1145185345991925760" >}}

Assume nodes x and y are furthest in graph. Start from y to reach x. The y has d reachable vertices so at each step diameter is reduced by 1 and n is reduced by d. After k step we reach x, i.e., n - kd = 0. At most k=n/d steps needed which is max possible diameter of the graph.

[Discussion](https://x.com/sytelus/status/1145561859879161856)
