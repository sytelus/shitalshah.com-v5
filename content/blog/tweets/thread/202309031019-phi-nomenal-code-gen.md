---
title: 'Phi-nomenal Code Gen: Phi-1-Base Beats August Models'
draft: false
date: 2023-09-03T10:19:32+00:00
slug: '202309031019-phi-nomenal-code-gen'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1698173854315897141'
  type: 'thread'
  is_thread: True
---



It is great to see so many new code gen models getting released in August alone but also surprising to see that none seem to come close to phi-1-base that our team at Microsoft Research worked on achieving HumanEval of 29 with 1.3B params and mere 7B tokens! 🧵 <https://x.com/osanseviero/status/1697523619725820226>

One interesting but bit less visible release is DeciCoder with same 1.3B size but trained on 440B tokens! It was used arch search + GQA + FIM. Still it seems to have topped out at HumanEval 19. Other models also are still quite legging even with an order of magnitude more params!

All these very strongly seems to point at the fact that data quality matters! A LOT MORE THAN we ever thought it did!! A way way lot more than architecture and all the training tricks combined! And yet, more and more work is still in the later arena and not the former 🤔.

For more details on phi-1 models, please see our paper:

Textbooks Are All You Need
<https://arxiv.org/abs/2306.11644>

[Discussion](https://x.com/sytelus/status/1698173854315897141)
