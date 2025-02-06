---
title: 'When JPEGs Go Undercover as PNGs: ImageNet''s Covert Ops'
draft: false
date: 2019-01-04T07:48:23+00:00
slug: '201901040748-imagenet-jpeg-png'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1080974183578820609'
  type: 'post'
  is_thread: False
---



ImageNet dataset has many issues and most framework have just worked around to hide it. For example, several images have EXIF data that is unloadable with PIL. One image n02105855_2933.JPEG is actually PNG! PyTorch reads the header to determine JPEG or PNG instead of file ext.

[Discussion](https://x.com/sytelus/status/1080974183578820609)
