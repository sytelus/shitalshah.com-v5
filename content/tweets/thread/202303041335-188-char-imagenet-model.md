---
title: 'Model in a Tweet: 188 Characters to 80% ImageNet'
draft: false
date: 2023-03-04T13:35:22+00:00
slug: '202303041335-188-char-imagenet-model'
is_tweet: true
tweet_info:
  id: '1631891061705695232'
  type: 'thread'
  is_thread: True
---



Below is the model in 188 chars that gets 80% on ImageNet:

from torch.nn import*
c=lambda h,d,k,p,n,S=Sequential:S(*[S(Conv2d(*x),GELU(),BatchNorm2d(h))for x in[(3,h,p,p)]+[(h,h,k,1,k//2,1,h),(h,h,1)]*d],AdaptiveAvgPool2d(1),Flatten(),Linear(h,n))

Credit: [@ashertrockman](https://x.com/ashertrockman)

Best way to prettyfi and understand above code is ChatGPT :). 

Reference: <https://x.com/ashertrockman/status/1486059382211330051>

[Discussion](https://x.com/sytelus/status/1631891061705695232)
