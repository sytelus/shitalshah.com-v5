---
title: 'GIL, Lambdas, and 24-byte Bools: Python Pet Peeves'
draft: true
date: 2019-03-12T12:05:12+00:00
slug: '201903121205-python-pet-peeves'
is_tweet: true
tweet_info:
  id: '1105333899347910658'
  type: 'reply'
  is_thread: False
---



{{< tweet user="kennethreitz42" id="1104740193519747078" >}}

Some of my favorite personal Python peeves...
* Huge perf hits ~everywhere for ~everything (24 bytes to store bool!) 
* No true multi-threading, GIL lock
* No true statics
* Poor Import semantics
* Very poor lambda semantics
* Need to create new environments all the times

[Discussion](https://x.com/sytelus/status/1105333899347910658)
