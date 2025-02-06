---
title: 'BERT''s Secret Sauce for Multiple Choice'
draft: false
date: 2019-08-14T22:12:52+00:00
slug: '201908142212-bert-mcq-secret-sauce'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1161656941715714049'
  type: 'post'
  is_thread: False
---



How do you answer multi-choice question using BERT/GPT? This paper has cool trick: concatenate quation, answers with delimiters, convert hidden state for each answer to logits by linear xform. You get 56% accuracy on CommonsenseQA with this (humans 89%)! <https://arxiv.org/abs/1811.00937>

[Discussion](https://x.com/sytelus/status/1161656941715714049)
