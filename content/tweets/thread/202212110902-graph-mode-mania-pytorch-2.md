---
title: 'Graph-mode Mania: PyTorch 2.0''s Eager Switcheroo'
draft: false
date: 2022-12-11T09:02:39+00:00
slug: '202212110902-graph-mode-mania-pytorch-2'
is_tweet: true
tweet_info:
  id: '1601744234666942464'
  type: 'thread'
  is_thread: True
---



In deep learning frameworks, the graph-mode has suddenly became very important compared to eager-mode. PyTorch 2.0 essentially allows you to switch between eager-mode and graph-mode with a single line! But why is graph-mode suddenly so much important? 🧵 <https://x.com/cHHillee/status/1601371638913638402>

Typically, network has series of convolutions, matrix multiplications, layer norms, BN, ReLUs etc. Python code feeds these ops to GPU sequentially. Before 2017, all we had were CUDA cores. Each CUDA code can do one FP32 multiplication and accumulate in one clock cycle.

NVidia then released Tensor core. Each can do 4x4 matrix multiplication in a single clock cycle! So, what theoretically may need 64 CUDA cores, now takes just one Tensor core. But still, remember, eager mode feeds one network operation at time.

As number of tensor cores grows, this means most of them are sitting ideally. Everything can be made made faster by fusing/combining as many ops as possible. This means step-by-step eager mode execution by Python runtime is inefficient. The biggest bottleneck on GPU is bandwidth.

This is where TorchDynamo comes in. This wonderful project can analyze Python bytecode at run time, figure out the graph and optimize it to maximize utilization of hardware by rewriting that bytecode. This can be turned on just one line of code.

The amount of work that has gone into this is tremendous if you look into TorchDynamo, Torch FX etc. All these is to make one simple thing possible: PyTorch 2.0 release has the most minimal changes on the surface. This is quite unconventional for 2.0 releases. Kudos to the team!

[Discussion](https://x.com/sytelus/status/1601744234666942464)
