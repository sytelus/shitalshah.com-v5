---
title: 'Full Path Ahead: Streamline Your Python Paths'
draft: false
date: 2020-04-06T05:42:00+00:00
slug: '202004060542-full_path_python'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1246931118823112705'
  type: 'post'
  is_thread: False
---



If you are reading path from outside in Python, please do yourself and others a favor by (almost) always calling full_path on it before you use it:

def full_path(path:str)-&gt;str:
    return os.path.abspath(
    os.path.expanduser(
os.path.expandvars(path)))

You are welcome.

[Discussion](https://x.com/sytelus/status/1246931118823112705)
