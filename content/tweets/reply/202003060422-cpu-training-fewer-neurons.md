---
title: 'CPU’s Secret: Training Fewer Neurons Beats GPUs in FCNs'
draft: true
date: 2020-03-06T04:22:13+00:00
slug: '202003060422-cpu-training-fewer-neurons'
is_tweet: true
tweet_info:
  id: '1235661919819685888'
  type: 'reply'
  is_thread: False
---



{{< tweet user="lemire" id="1235598915220750340" >}}

It appears that this would benefit FCNs (no experiments for CNNs). The idea seems to be find small subset neurons and only train them to reduce computation. Comparison isn’t fair, IMO, because GPU implementation doesn’t take advantage of this idea but cpu implementation does.

[Discussion](https://x.com/sytelus/status/1235661919819685888)
