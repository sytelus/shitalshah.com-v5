---
title: 'Euclid Would Be Proud: GCD in a JavaScript One-Liner'
draft: false
date: 2018-10-18T13:32:22+00:00
slug: '201810181332-euclid-gcd-javascript'
tags:
  - tweets
is_tweet: true
tweet_info:
  id: '1052809593670139904'
  type: 'post'
  is_thread: False
---



By 1950, the word algorithm was mostly associated with “Euclid’s Algorithm".
-Knuth

This algorithm for finding Greatest Common Divisor, one of the oldest, fits in a JavaScript one liner.

function gcd(a,b) { 
    return b ? gcd(b, a % b) : a; 
}

[Discussion](https://x.com/sytelus/status/1052809593670139904)
