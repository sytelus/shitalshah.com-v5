---
title: 'Zeroing In on Cloud Storage Performance with dd'
draft: false
date: 2020-03-20T11:45:35+00:00
slug: '202003201145-zeroing-in-on-cloud-storage-performance-with-dd'
is_tweet: true
tweet_info:
  id: '1240862023031771136'
  type: 'post'
  is_thread: False
---



Tip: Did you mounted storage from cloud and wondering how fast is it? You can measure the performance of storage you are on using this little command:

dd if=/dev/zero of=a count=1024 bs=1024

ps: this creates a file named 'a' of size 1MB, so delete it afterward.

[Discussion](https://x.com/sytelus/status/1240862023031771136)
