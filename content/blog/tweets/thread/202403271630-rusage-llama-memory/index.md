---
title: 'ge Unveils Llama.cpp''s Memory Secrets'
draft: false
date: 2024-03-27T16:30:55+00:00
slug: '202403271630-rusage-llama-memory'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1772919220180779401'
  type: 'thread'
  is_thread: True
---



rusage is one handy tool for debugging LLMs! 

You prefix any command with it and you get memory usage, page faults, I/O info. 

For example, below shows what happens when you load model using llama.cpp. Notice page faults with 100% memcpy which means they didn't hit disk! 

![https://pbs.twimg.com/media/GJqsKAIaUAA1LIn.png](tDTkMz5Dig.png)

Get it here: <https://justine.lol/rusage/>

[Discussion](https://x.com/sytelus/status/1772919220180779401)
