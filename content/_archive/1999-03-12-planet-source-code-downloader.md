---
title: Planet Source Code Downloader
author: Shital Shah
type: post
date: 1999-03-12T17:28:36+00:00
url: /p/planet-source-code-downloader/
dsq_thread_id:
  - 3293757514
tags:
  - Software

---
[<img src="/images/posts/2004/12/PSCDownloader.jpg" alt="PSCDownloader" width="231" height="213" class="alignleft size-full wp-image-898" />][1]

[Planet Source Code][2] is one of the huge resources of VB code. Say you want to download all of it's listing and make a CD that might serve as 1000s of VB code snippets. This program exactly does that. It's actually general purpose program that downloads all the pages having address like

http://www.somesite.com/some-junk/wanted_pageXXXX.htm - where XXXX is number ranging from 0000 to 9999.

I used same program to download all the postings in particular email list at [www.listbot.com][3]. This application is right now not in state of easy clicks. You might have to modify the source code in clsListFetcher.GetAMessage to use it for different URLs.

<p class="obsolete">
  Warning: This program was written circa Mar 1999. It is currently considered obsolete. There are no plans to update it and no support is provided.
</p>

[MultiLinkDownloader is now archived at Github][4]

<div class="github-widget" data-repo="sytelus/MultiLinkDownloader">
</div>

 [1]: /images/posts/2004/12/PSCDownloader.jpg
 [2]: http://www.planet-source-code.com
 [3]: http://www.listbot.com
 [4]: https://github.com/sytelus/MultiLinkDownloader