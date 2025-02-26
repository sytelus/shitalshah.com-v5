---
title: 'Phased and Confused: Devin''s Video Sparks Technical Thoughts'
draft: true
date: 2024-03-14T18:18:40+00:00
slug: '202403141818-phased-and-confused-devin-video'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1768235290974683267'
  type: 'thread'
  is_thread: True
---



This Devin video is from independent user so bit more noteworthy :). It makes me think what really has changed *technically* during last year that has suddenly caused this phase transition.

Some thoughts... 🧵 <https://x.com/mckaywrigley/status/1767985840448516343>

After GPT4 was released, there were immediate attempts to build agents (ex. AutoGPT) but they failed quite miserably. Devin is shocking because 13.86% success on SWE-Bench is massive leap compared to previous SOTA of 1.96%, reminiscent of shocking perf improvement by AlexNet.

However, from the demos, it is apparent that Devin isn't likely a leap in what researchers might consider "novel" idea. But there is obvious tremendous stride in engineering and tying various pieces together. I feel this is actually a bigger advance than a novel research idea!

So, what really has changed since initial GPT-4 release that suddenly enabled something like Devin?

1. Making tool use very very effective.
2. Great progress in RAG.
3. Large context window!

Devin is likely using 32k context version of GPT-4 and that might make big difference!

If you think about it, large context window is really like scratch pad/working memory like a log book. You put there your plan, what you tried, what result you got - all keep accumulating in same context window so model can propose next steps, do course correction, modify plan.

Now add RAG on the top and it's more like memory with slower hard drive but with huge storage capacity compared to context window as memory.

The outer LLM can use long context to do planning while inner LLM does short span task. In essence, we have system 2 and system 1!

This is fascinating for me. TBH, I had thought system 2 is special, may be yet to be discovered architecture. Now its apparent that system 2 is merely just another instance of same LLM directing  another LLM.
This makes sense because nature hates inventing new things and reuses…

One consequence of all of these is how we should change our thinking towards solving really hard problems.

For example, at start of 2023, many of us dreamed about model that can solve open math problems.

We kept marveling at how new models can solve harder and harder problems… [continue reading](https://x.com/sytelus/status/1768235290974683267)
