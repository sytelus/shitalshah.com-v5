---
title: 'Softmax Not So Hot? Try Temperature Scaling!'
draft: false
date: 2018-08-31T18:35:42+00:00
slug: '201808311835-softmax-temperature-scaling'
is_tweet: true
tweet_info:
  id: '1035491316249939969'
  type: 'post'
  is_thread: False
---



So we all know that output of softmax is not real probabilities - we just pretend that they are. There is a method called temperature scaling that *can* calibrate this to actual probabilities (using validation set), works good in practice and easy to use: <https://github.com/gpleiss/temperature_scaling>

[Discussion](https://x.com/sytelus/status/1035491316249939969)
