---
title: 'Supersize Me: Bridging the Train-Test Augmentation Gap'
draft: false
date: 2020-04-16T21:55:08+00:00
slug: '202004162155-supersize-train-test-gap'
is_tweet: true
tweet_info:
  id: '1250799896069730305'
  type: 'thread'
  is_thread: True
---



A nice paper on simple observation that augs for train and test are different causing distributional shift. They propose simple trick: just increasing test time image size. If you are also willing to do fine tuning on that size, gains become significant! 

<https://arxiv.org/abs/1906.06423>

A follow up of this paper now holds the new ImageNet state of the art at 88.5% top1 and 98.7% top5 by applying this method on previous state of the art.

<https://arxiv.org/abs/2003.08237>

[Discussion](https://x.com/sytelus/status/1250799896069730305)
