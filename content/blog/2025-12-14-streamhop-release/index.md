---
title: 'Releasing StreamHope - Merge Duplicate Playlists in YouTube Music, transfer from Spotify'
author: Shital Shah
draft: false
private: false
date: '2025-12-12T21:30:07-08:00'
slug: 'streamhop-release'
tags:
  - Machine Learning

---

Since past week, I have been finishing off several of side projects that were on my mind. The thing is that I haven't written any code for these projects, they are all 100% done by AI (in this case Claude Code/Opus 4.5). While doing other things, I just ran Claude Code on the side, casually tossing it prompts whenever I had a spare moment.

Today, I am releasing one of those side project: **StreamHop**!

![StreamHop Banner Image](banner.jpg)


This is a CLI-based tool to migrate Spotify playlists to YTMusic. It has many other features I wanted for myself, most importantly, merging duplicate playlists which are often created by other music transfer services. It also does metadata transfer, allows to save playlists as YAML and, the best of all, its all open source and completely free (MIT licensed)!

Folks have been talking about AI writing 90% code. Well, I think we've moved past that. For my these side projects, I'm hitting 100%. It's still not trivial and simple as I am probably making out here and it does require bunch of techniques so you can do over 20 iterations in a single session in terminal without creating a mess. I will write a post on that some other time.

The reason I wanted this was very poor shuffling algo in Spotify. Even if you have thousands of hand picked tracks, Spotify keeps playing same 100 over and over. I was hoping someone at Spotify would fix this but I finally ran out patience. All the companies which are ignoring customer feedback and experience are in grave danger of getting quickly replaced because of how fast AI can change things.

According to `git-fame` this repo would have cost 12.9 months of human effort. Instead it was casually done with about ~40 sequential prompts over matter of days on the side while Claude waited for me when I had some time. All this is quite surreal to me.

Here's repo:

[SteamHop: Merge Duplicate Playlists, Backup, Transfer from Spotify to YouTube Music](https://github.com/sytelus/streamhop)

It might be enlightening to see how these 100% AI generated code (including ALL of the docs) looks like.

Have fun! 🐸🎧
