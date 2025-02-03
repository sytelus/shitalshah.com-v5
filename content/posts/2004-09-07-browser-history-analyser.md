---
title: Browser History Analyser
author: Shital Shah
type: post
draft: true
private: true
date: 2004-09-07T03:16:19+00:00
url: /p/browser-history-analyser/
dsq_thread_id:
  - 4549026999
categories:
  - Software

---
[<img src="http://shitalshah.com/wp-content/uploads/2004/12/BrowserHistoryAnalyser-300x174.jpg" alt="BrowserHistoryAnalyser" width="300" height="174" class="alignleft size-medium wp-image-892" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/BrowserHistoryAnalyser-300x174.jpg 300w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/BrowserHistoryAnalyser-1024x595.jpg 1024w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/BrowserHistoryAnalyser.jpg 1280w" sizes="(max-width: 300px) 100vw, 300px" />][1]

I like to preserve logs of my browser history. Apart from recalling useful webpages I'd discovered, it helps to build kind of "journal" reflecting problems I was facing, things I was in to, things I was shopping and so on. An ability to look back and see what you were up to in any point of time is really important, not just useful. Unfortunately there is no easy way to export history from IE or Firefox, let alone query that data in an useful way. So this is the program I'd been putting some time on and off. The first version I'd made meant only for my personal and was a quick and dirty program in VB6 more then 5 years ago. Its latest incarnation is now rewritten from scratch in .Net 2.0 Beta1 and provides loads of functionalities in nice user interface. You can do all of followings:

  * Export the browser history in to MS Access database
  * Search your browser history with speed like Google
  * Merge several history databases i to one (useful if you used multiple machines)
  * Look at all the queries you performed on Google, MSN and Yahoo
  * Statistics of how many websites you visit a day, how many unique URLs and domains you have visited so far
  * Ability to filter "noice" and random popup URLs
  * Statistics of how much time you spend per page, how much time you spend per day in browsing websites
  * Chart the statistics

The architecture of this new version is fairly extensible and you can plug-in more modules as you go. I'll be implementing more public plug-in architecture and using plain XML files instead of MS Access databases and FireFox support (this is becoming important for me because I've 100% switched over to FireFox). So this is not yet the "release" version. Also note that you need .Net Framework Beta 2.0 Beta1 + VB.Net resource Kit if you want to compile the code. But results are beautiful!

<p class="obsolete">
  Warning: This program was written circa Nov 2004 and last updated around Mar 2005. It is currently considered obsolete. There are no plans to update it and no support is provided.
</p>

[BrowserHistoryAnalyzer is now archived at Github][2]

<div class="github-widget" data-repo="sytelus/BrowserHistoryAnalyzer">
</div>

 [1]: http://shitalshah.com/wp-content/uploads/2004/12/BrowserHistoryAnalyser.jpg
 [2]: https://github.com/sytelus/BrowserHistoryAnalyzer