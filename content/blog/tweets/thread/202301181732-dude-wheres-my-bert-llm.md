---
title: 'Dude, Where''s My BERT LLM? Answering Your LLM FAQs'
draft: false
date: 2023-01-18T17:32:47+00:00
slug: '202301181732-dude-wheres-my-bert-llm'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1615643354829840385'
  type: 'thread'
  is_thread: True
---



You have probably asked these questions too many times: 

- Why isn’t there any BERT style LLMs? 

- Shouldn’t MLM instead of CLM objective improve zero shot perf?

- How does encoder-decoder LLM compare with decoder-only LLM?

- Can one arch/objective be adapted to another?

Insights into these questions can be found in this great paper: <https://arxiv.org/abs/2204.05832>

TLDR: OpenAI made a right choice of decoder-only arch + CLM objective. It has not only best zero-shot perf among all combinations but also can be adapted to best multitask fine tuned model!

What truly bothers me is purely empirical nature of these findings. No one really knows if this will hold up at higher scale,  will change by some tweak or why this is so. Intuitively Prefix LM makes much better sense to me than either MLM or CLM but then why CLM wins hands down?

[Discussion](https://x.com/sytelus/status/1615643354829840385)
