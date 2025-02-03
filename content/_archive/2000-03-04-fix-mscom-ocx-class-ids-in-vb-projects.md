---
title: Fix MSCOM OCX Class IDs In VB Projects
author: Shital Shah
type: post
date: 2000-03-04T16:13:33+00:00
url: /p/fix-mscom-ocx-class-ids-in-vb-projects/
dsq_thread_id:
  - 3431361959
tags:
  - Software

---
[<img src="/images/posts/2003/03/tools_icon.gif" alt="tools_icon" width="40" height="40" class="alignleft size-full wp-image-1124" />][1]

Call it yet another Microsoft's blunder but you still can't forget when you try to load a VB project and it says something "Can't load MSCOMCTL.OCX" and replaces all your fancy controls with mere picture boxes! Here's small utility that might do the trick. It goes through all your vbp, frm, ctl and replaces GUIDs of crazy OCXes with ones that you have. This application is right now not in state of easy clicks. You will have to find out GUIDs of OCXes installed in your machine and replace it by hand in the source code.

<p class="obsolete">
  Warning: This program was written circa 1st Quater 1999. It is currently considered obsolete. There are no plans to update it and no support is provided.
</p>

[FixMSComOCX is now archived at Github][2]

<div class="github-widget" data-repo="sytelus/FixMSComOCX">
</div>

 [1]: /images/posts/2003/03/tools_icon.gif
 [2]: https://github.com/sytelus/FixMSComOCX