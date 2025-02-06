---
title: 'Bias Cut: Tailoring Transformers for Faster Training'
draft: false
date: 2023-02-15T12:40:41+00:00
slug: '202302151240-bias-cut-transformer-training'
is_tweet: true
tweet_info:
  id: '1625716705115906049'
  type: 'post'
  is_thread: False
---



Two new tricks I need to try out:

1. Omit biases for QKV and LayerNorms. They slow down things and don’t add much to quality.

2. Add layer norm on QK to allow for higher LR (faster training!). <https://x.com/PiotrPadlewski/status/1625188301123751936>

[Discussion](https://x.com/sytelus/status/1625716705115906049)
