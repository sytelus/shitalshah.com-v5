---
title: 'One Instruction to Rule Them All: Looped Transformers'
draft: false
date: 2023-12-12T18:02:12+00:00
slug: '202312121802-one-instruction-looped-transformers'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1734513978976661768'
  type: 'thread'
  is_thread: True
---



Looped transformers is amazing work that has kept me up tonight! Basic idea: You can construct Turing-complete computer using just a one instruction. Authors directly compute weights for a small transformer so it is able to execute this instruction and then add a huge kicker. 🧵 <https://x.com/DimitrisPapail/status/1620834409275609088>

Executing just one instruction isn’t much fun, is it? How do we execute long general programs instead? Well, you can just run this transformer in loop! The idea is that each instruction also spits out state needed for the next instructions so loop is akin to recursion.

The end result is that now this tiny 13-layer transformer can run long programs just like a regular computer will! You just feed program and it spits out the output. Authors implement programs like, for example, calculating square root and transformer will compute the value.

As a punchline, authors implement the program for SGD itself. So, now you have *literally* real SGD training running at inference time in-context!! 🤯

A single tiny transformer is now able to run arbitrarily long programs, only limited by how much state can fits in the context.

There is obviously lot to think about. For me, here are the main takeaways:

First, transformers can perform universal computation in-context.

Second, it’s not just pattern matching/statistical parroting. It’s universal computation on provided and stored information.

Finally, the most important one:

The missing “planning module” can be very simple: just add loop! Transformers can maintain state in output, so just keep feeding it back to emulate arbitrarily planner that is only limited by the size of state that fits in the context window.

[Discussion](https://x.com/sytelus/status/1734513978976661768)
