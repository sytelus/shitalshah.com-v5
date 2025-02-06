---
title: 'Cracking the Cursor Code'
draft: false
date: 2024-09-27T18:39:34+00:00
slug: '202409271839-cracking-the-cursor-code'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1839630961572749451'
  type: 'thread'
  is_thread: True
---



I've been using Cursor for a while and am fairly impressed.  [@amanrsanger](https://x.com/amanrsanger) and team has done good thinking towards building AI-first code editor that goes well beyond auto-complete. However, admittedly everything is not quite obvious. Here's short thread to quickly get started! 🧵

When you open Cursor for the first time it doesn't feel too different until you press Cmd+L for chat window! Now you can tell AI to make changes in your file and you will get the diff which you can apply. You can select code and ask AI to work on only selected code as well.

You can now just write one line comment and press tab to generate the code!

Or press Cmd+K to write instruction and generate code. 

If you want generated code only upto some point, press Cmd+right arrow to accept word-by-word.

In chat, type @ followed by file, folder or URL to add them in your prompt. You can add whole codebase using [@codebase](https://x.com/codebase) and ask question. You can also select text and press Cmd+L to add it in context.

One of the best feature is iterating on code via diffs! You ask AI to make some change and it generates diff for you. You apply it, run it, copy/past any errors back in chat, ask AI to fix it and keep repeating this process until you get to desired code.

Another cool thing you can do is to drag and drop image in the chat and generate UX for you! 

Or use @ to reference URL and ask AI to use that web page for example, documentation or whatever.

One other cool thing is that lot of above features works in Terminal! For example, you can press Cmd+K in terminal and ask it to write complex bash command.

Composer is perhaps the most interesting feature. It's a way to do multi-file changes. So, instead of operating on a single file or code selection, here you can make changes to multiple files or create new ones with just one prompt.

Use Cmd+Shift+I to open Composer window. Add…

I often maintain <http://TODO.md> in my projects. Now, I can add this in composer, ask AI to implement all TODOs. The best part is that you can even ask AI to update the <http://TODO.md> itself with summary of what it did! You get the diff for each file and you can… [continue reading](https://x.com/sytelus/status/1839630961572749451)
