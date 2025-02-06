---
title: 'Shuffle Showdown: DALI vs PyTorch on ImageNet and CIFAR-10'
draft: true
date: 2020-02-05T10:26:37+00:00
slug: '202002051026-shuffle-showdown-dali-vs-pytorch'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1224881988777037831'
  type: 'reply'
  is_thread: False
---



{{< tweet user="theshawwn" id="1223395036689096704" >}}

Do they shuffle for each epochs? What randomized augmentations do they use? My experiments with NVidia Dali shows this can make big difference for ImageNet but not cifar10 (for cifar10, in fact, Pytorch data loaders perform almost similarly to Dali when workers are set properly).

[Discussion](https://x.com/sytelus/status/1224881988777037831)
