---
title: 'Don''t Repeat Yourself in Bashrc'
draft: false
date: 2019-08-28T07:30:45+00:00
slug: '201908280730-dont-repeat-yourself-bashrc'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1166508380950679552'
  type: 'post'
  is_thread: False
---



A handy way to add a line in bashrc only if it doesn't exist already:

LINE="export DISPLAY=localhost:0.0"
FILE=~/.bashrc
grep -q "$LINE" "$FILE" || echo "$LINE" &gt;&gt; "$FILE" || source ~/.bashrc

[Discussion](https://x.com/sytelus/status/1166508380950679552)
