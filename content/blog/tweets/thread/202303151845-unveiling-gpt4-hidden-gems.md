---
title: 'Unveiling GPT-4''s Hidden Gems'
draft: false
date: 2023-03-15T18:45:06+00:00
slug: '202303151845-unveiling-gpt4-hidden-gems'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1635970371466989575'
  type: 'thread'
  is_thread: True
---



Even though technical details are sparse, there is a lot of GOOD in GPT-4 paper:

- Dataset cut off: Sep 2021, training finished: Aug 2022.
- Likely ~11 months of training, 6 months of RLHF iterations.
- Expect Internet to explode with novel multimodal tasks in coming days.

1/n

Big leaps on benchmarks:
- MMLU perf has really shot up to ~expert human level.
- HellaSwag (common sense reasoning) perf @ 95% (vs 94% humans).
- HumanEval @ 67% (from 48% GPT 3.5, 29% Codex).
- Most VQA benchmarks are steamrolled!
- 70% times better answer than GPT 3.5.

But many benchmarks remains tough:
- Leecode, DROP, WiC, RACE and ARC.
- GPT3 sucked at ANLI, CB and QuAC which doesn't seem to reported.
- Hallucinations reduced but not quite.
- ISC task Hindsight Neglect perf is reversed but no info on others.
- Why did they leftout IQ tests?

- GPT-4 is multilingual marvel. It does better than GPT 3.5/PaLM etc even on translated MMLU in to 24 languages including low resource!
- Multiple images can be intertwined in text. This enables taking exams as-is.
- GPT-4 can work on exercise from the screenshot of textbook!

- The "system" field allows trivially create tutor bot that teaches student by asking questions (Socratic tutor).
-32K context allows ~50 pages in prompt and model can generate 25k words.
- RLHF improves prompting, better perf on adversarial questions but no impact on test perf.

- THE biggest thing is ability to extrapolate perf on test suits like HumanEval at much higher scale accurately. The infra works predictably at scale. It's like building smoothly functioning automated Giga Factory is much bigger deal than individual car models.

- Another big deal is extensible Evals suit. I would expect it to replicate a lot of BigBench in no time (already 70+ PRs!). This suit will hopefully clear up many recent confusing "better than GPT-3" claims.

Price: 
GPT-3.5: 500k tokens/$
GPT-4 (text,8k-ctx): 16k tokens/$
GPT-4 (32k-ctx):  8k tokens/$

These price differentials tempts to speculate on model size.

So, overall we got expert human level AI in at least 57 subjects, fluently speaking 24 languages, scoring in top 10% bracket in law, medicine, Psychology, Sciences, economics etc. But most importantly, it understands our memes better than most of us.

[Discussion](https://x.com/sytelus/status/1635970371466989575)
