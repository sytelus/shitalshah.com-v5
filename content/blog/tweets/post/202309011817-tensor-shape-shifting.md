---
title: 'Tensor Shape-Shifting: See Shapes Before Values'
draft: false
date: 2023-09-01T18:17:05+00:00
slug: '202309011817-tensor-shape-shifting'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1697569260590231666'
  type: 'post'
  is_thread: False
---



Awesome hack:

Want to see the shapes of tensor first while debugging in VSCode? 

Just run this:

torch.Tensor.__repr__ = lambda self: f"{tuple(self.shape)}:{normal_repr(self)}"

It replaces Tensor's __repr__ so that it shows shape first!

[Discussion](https://x.com/sytelus/status/1697569260590231666)
