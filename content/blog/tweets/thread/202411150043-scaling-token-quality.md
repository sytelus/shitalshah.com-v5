---
title: 'Scaling Laws Hit Token Quality Ceiling—Enter Synthetic Data'
draft: false
date: 2024-11-15T00:43:32+00:00
slug: '202411150043-scaling-token-quality'
is_tweet: true
tweet_info:
  id: '1857102074070352290'
  type: 'thread'
  is_thread: True
---



Scaling laws have an assumption that quality of tokens remains mostly the same as you scale. However, in real world large scale datasets, this is not true. 

When there is upper bound on quality training tokens, there is upper bound on scaling.

But what about synthetic data? 🧵

With current synthetic data techniques, one issue is they don’t add ton of new entropy to original pre-training data. 

Remember, pre-training data is synthesized from spending centuries of human-FLOPs. Prompt based synth gen can generate data in neighborhood of existing data.

This is entropy bottleneck: There is simply not enough entropy/tok to gain as you move to down the tail of organic data or from prompt-based synthetic data.

Possible solution is to spend more test time compute to generate synthetic data that is of higher entropy content.

The entropy/tok in a given dataset seems to be related to FLOPs spent on generating that data. Human data is generated from a lot of compute spent by humans over many millennia. Our pre-training data is equivalent of fossil fuel.

That data is running out.

Human-FLOPs are in limited supply but GPU-FLOPs through ttc can allow generating synthetic data with high entropy and that’s one way to overcome this bottleneck.

The bad news is that we will need more compute than predicted by scaling laws.

But can’t we just only use ttc?

I think merely scaling inference compute won’t be sufficient. A weak model can spend inordinate amount of inference compute and still may not solve a hard problem.

There seems to be intricate intertwined dance of training and inference compute, one improving another.

So, imagine cycle of training a model, generating high entropy synthetic data by scaling inference compute and then using it to continue training. 

This is the self-improving recipe.

We humans operate in similar way: consume previously generated data and get new data for next gen. One critical element is embodiment which enables transferring entropy from our environment.

Spend thousands of years of human-FLOPs like this and you get current pre-training data!

[Discussion](https://x.com/sytelus/status/1857102074070352290)
