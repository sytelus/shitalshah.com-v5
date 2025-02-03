---
title: Find Path of a Command Line Tool
author: Shital Shah
type: post
draft: true
private: true
date: 2009-10-29T23:06:45+00:00
url: /p/find-path-of-a-command-line-tool/
dsq_thread_id:
  - 3582757780
tags:
  - Developers

---
Many times you work on different machines, execute a command line tool but often wonder where that tool is actually installed. One way to figure this out is to look at all environment PATH variables and search them manually in same order as Windows does. But you don’t have to because luckily there is a little known built-in command called WHERE that does that for you:

![][1]

This is similar to Unix commands like WHICH and WHEREIS.

 [1]: /images/posts/2009/10/image_8.png