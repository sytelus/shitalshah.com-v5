---
title: 'Sunspot Hack: The Hottest Cyberattack'
draft: false
date: 2021-02-26T12:26:27+00:00
slug: '202102261226-sunspot-hack-hottest-cyberattack'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1365156248631476228'
  type: 'thread'
  is_thread: True
---



Some digression from deep learning world... Sunspot hacking attacks are considered the most sophisticated ever so far. These attacks allowed virtually unlimited access to thousands of companies and government computers in one fell swoop. I was curious about technical details 🧵👇

First to make this happen, hackers identified IT management software used by these companies and government. It is called Orion. They somehow got access to the internal network of the small company that owns and makes Orion software.

Next, they figured out internal build machine where Orion was built from its source code to binary. Orion is at least in part a .Net app and uses msbuild.exe for build. Hackers installed scheduled task on build machine which runs every minute to see if msbuild.exe has started.

When msbuild is detected, the program inserts malware code in one of its source file so the final build would include the malware! The source code modification has altered function that spawns the malware on a separate thread. Lot of care is taken to hide possible build failures.

They go extra length to avoid detection like two weeks of silence, adding malicious network activities with normal activities. 

The result is highly trusted, signed and privileged software now has malware compiled into it unknown to its developers and deployed to whole world!

The consequences here are pretty grave. A typical computer has tons of highly privileged trusted software running from rather small companies from Logitech to RealTek. Thousands of open source software and browser plugins are built by a lone developers on their unsecured laptops.

But all of these is not even close to sophistication of what is possible. One of the most devious and untraceable hack was described by Ken Thompson. What if you can insert malicious code in compiler itself when compiler is being compiled!

<https://wiki.c2.com/?TheKenThompsonHack>

Imagine the build machine of GNU C++ compiler getting hacked. It is being maintained by 13 maintainers with little or no pay. Vast amount of software that runs every corner of modern world from banks to nukes is compiled by it! We are truly awaiting a reckoning.

More technical information on Sunsot hack: <https://www.crowdstrike.com/blog/sunspot-malware-technical-analysis/>

[Discussion](https://x.com/sytelus/status/1365156248631476228)
