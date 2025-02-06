---
title: 'Phi-1: The Tiny Model Outsmarting Giants'
draft: false
date: 2023-09-12T15:12:58+00:00
slug: '202309121512-phi-1-tiny-model-outsmarting-giants'
is_tweet: true
tweet_info:
  id: '1701509192279117932'
  type: 'thread'
  is_thread: True
---



Two huge releases from our group today that hopefully will inspire new work and rethink old :).

First, the Phi-1 model:

This 1.3B code model gets 50% on HumanEval. There are tons of 7B to 30B models out there, including recent CodeLlama2. This David beats all Goliaths! 🧵

Phi-1 proved that quality of data matters more than anything else! It is trained with just 7B tokens 🤯. This is exact opposite approach of just keep throwing in more data!

Textbooks Are All You Need
<https://arxiv.org/pdf/2306.11644.pdf>

You can get this model here:
<https://huggingface.co/microsoft/phi-1>

Next, Phi-1.5 model:

This is again just 1.3B model achieving reasoning benchmarks that you often see only at or above 7B models such as recent Llama2! When the world is racing towards adding yet another trillion tokens in the training, Phi-1.5 uses mere 150B tokens!!

Furthermore, Phi-1.5 is trained from all synthetic tokens (except for code)!

Download Model: <https://huggingface.co/microsoft/phi-1_5>
Paper: <https://arxiv.org/abs/2309.05463>

So, what does all these means?

The scaling laws papers are the landmark papers guiding the field. We get a line on log-log plot but it turns out that the slop of the line depends on many variables we haven’t fully uncovered yet, perhaps the most important being data quality!

There are a huge consequences for giving this line even a little tilt. It can translate to massively lower costs. It allows to go further in model capabilities for same scale.

Phi-1 and 1.5 shows line can be tilted to an order of magnitude and we have only scratched the surface!

[Discussion](https://x.com/sytelus/status/1701509192279117932)
