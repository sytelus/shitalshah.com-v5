---
title: 'GPT-4 Fails Better: A Step Towards Robust Reasoning'
draft: false
date: 2023-03-15T02:53:01+00:00
slug: '202303150253-gpt4-fails-better'
is_tweet: true
tweet_info:
  id: '1635730771624460288'
  type: 'thread'
  is_thread: True
---



Tried the below logic puzzle on GPT-4 without additional prompt eng. GPT-3.5 used to spectacularly fail on this puzzle with endless hallucinations while GPT-4 fails only less spectacularly. 

Still long way to go for achieving robust reasoning abilities but it’s a progress.

Puzzle:

“In a group of kangaroos, the two lightest weigh 25% of the total weight of the group, and the three heaviest weigh 60% of the total weight. How many kangaroos are in the group?”

Credit: [@MTHajiaghayi](https://x.com/MTHajiaghayi)

OpenAI Eval has more logic puzzles where GPT-4 fails: <https://github.com/openai/evals/blob/main/evals/registry/data/logic/samples.jsonl>

Another adversarial puzzle where GPT-4 seems to use memorized answer:

Suppose I have a cabbage, a goat and a lion, and I need to get them across a river. I have a boat that can only carry myself and a single other item. I am not allowed to leave the cabbage and lion alone…

Dataset to test memorization adversarially is MemoTrap which hopefully will become part of OpenAI Evals at some point:

<https://x.com/alisawuffles/status/1618347159807750144?s=20>

[@alisawuffles](https://x.com/alisawuffles) [@sherwinwu](https://x.com/sherwinwu)

[Discussion](https://x.com/sytelus/status/1635730771624460288)
