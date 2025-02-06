---
title: 'Phixtral Fusion: Phi-2 and Pre-trained Experts Smash the Leaderboard'
draft: false
date: 2024-01-15T17:22:19+00:00
slug: '202401151722-phixtral-fusion'
is_tweet: true
tweet_info:
  id: '1746825125767585838'
  type: 'thread'
  is_thread: True
---



It’s simply amazing how OSS community is using Phi-2. Goddard figured out that you can just slap in pre-trained models as “experts’ in Mixtral. For routing, directly compute gate matrix using hidden state for expert’s prompt.

Phixtral smashes the leaderboard. No extra training!! <https://x.com/maximelabonne/status/1744867841436700850>

Shout out to fun article by Charles Goddard on how this strange “MoE” works. 

Most folks will immediately realize this as ensembles with one weird trick :).

<https://goddard.blog/posts/clown-moe/#moe-gates-without-training>

[Discussion](https://x.com/sytelus/status/1746825125767585838)
