---
title: 'Neural Network Alchemy: Merging Models for Dual Datasets'
draft: false
date: 2022-09-15T08:40:19+00:00
slug: '202209150840-neural-network-alchemy-merging-models'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1570225971365818371'
  type: 'thread'
  is_thread: True
---



This is fascinating paper! The punchline is that you can devise algorithms to “merge” weights of two networks trained on different datasets so that the merged weights would have same performance on both the datasets!! But how is that possible? \ <https://x.com/SamuelAinsworth/status/1569719494645526529>

The beauty of this paper is that this consequence arise from the theory. The solution produced by SGD are part of a set with particular properties. The subset of these solutions are linear mode connected which means that you can interpolate weights of two networks with same \

architecture but trained with different seeds and those weights are also part of the solution! This way you can have two networks and find “in between” place where you don’t get penalized for loss on *both*. The merge algorithm takes just few seconds to merge two networks.

The paper is demonstration on how to write good papers :). There is a strong theory, an interlude to point out problem in theory, multiple algorithms and appendix for things that didn’t work. Kudos to authors!

[Discussion](https://x.com/sytelus/status/1570225971365818371)
