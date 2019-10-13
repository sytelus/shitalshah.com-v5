---
title: Groove Hacks
author: Shital Shah
type: post
date: 2005-11-15T05:48:53+00:00
url: /p/groove-hacks/
dsq_thread_id:
  - 2698619692
categories:
  - Software

---
About a year and half ago, the new version of [Groove][1] had came out and it still didn't had an ability export IMs. It drove me nuts so I started to write my own Groove tool that would do it in excuse to explore its infamous internals. Ah! What a ride that was! Groove APIs have extremely huge surface area (which means there are thousands and thousands of them sprinkled all over in hard to find places). Tons of them have confusing names, misleading functionalities and put in the wrong place. The fun part? There is almost no documentation! And yeah, did I forgot to mention that they are heavy C++ oriented, frequently late bound and mostly proprietary stuff (they even have their own proprietary definition for rich text and APIs!)? 

If your brain needs some challenge that's the place to dig in to. After sacrificing my 3 weekends I finally had a working tool that exports Groove IMs and put them to Outlook without loosing formatting or attachments! I consider this an equivalent feat of removing nag dialog of WinZip by changing a x86 jump instruction in its disassembled binary using only Visual Studio debugger and absolutely nothing else ;). 

This tool had been sitting on my hard drive crying to get out for months and months. In between, I did some polishing up, adding wizards, support for Word and Excel, creating a help file and even created a website for it. So now I think it’s pretty much ready and have decided to give it away for free personal use (similar tools cost $50 something I guess). [Check it out][1] if you use Groove and want to save your invaluable messages! Call it laziness or ignorance or whatever but I really do feel guilty not to putting this out early when 3.0 came out and lot of people SO need it!

 [1]: /astrila/messageexport/