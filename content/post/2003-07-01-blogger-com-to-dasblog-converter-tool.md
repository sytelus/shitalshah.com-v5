---
title: Blogger.com To dasBlog Converter Tool
author: Shital Shah
type: post
date: 2003-07-01T10:40:48+00:00
url: /p/blogger-com-to-dasblog-converter-tool/
dsq_thread_id:
  - 3232991810
categories:
  - Software

---
[<img src="http://shitalshah.com/wp-content/uploads/2004/12/Blogger2dasBlog-300x214.jpg" alt="Blogger2dasBlog" width="300" height="214" class="alignleft size-medium wp-image-891" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/Blogger2dasBlog-300x214.jpg 300w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/Blogger2dasBlog.jpg 768w" sizes="(max-width: 300px) 100vw, 300px" />][1]

My [blog][2] was previously hosted on Blogger.com and boy, that thing sucked. So my mission was to host my blog on my own site with an ASP.Net engine that I can customize and extend as I like. So DasBlog came along but there weren't any tools around to fetch my blog entries from Blogger.com and put in to dasBlog. Sure I didn't want to loose my previous entries, so I made my own conversion tool that does this export from blogger.com and import in to dasBlog. It's also a good demonstration of how to use Blogger API, XML-RPC and use dasBlog engine. Infect you can use it with any host that supports Blogger API by changing server URI in Blogger.cs class. I used open source XML-RPC wrapper for .Net but had to tweak it and fix it a bit so this is more improved version :). You may note that, it imports entries in to dasBlog hosted on your localhost and not on remote server, so you will need to manually copy XMLs generated in Content folder on your local machines inetpub\wwwroot$$!dasBlog path]\Content to your remote server. 

<p class="obsolete">
  Warning: This program was written circa 2003 and last updated around Mar 2005. It is currently considered obsolete. There are no plans to update it and no support is provided.
</p>

[Blogger2dasBlog is now archived at Github][3]

<div class="github-widget" data-repo="sytelus/Blogger2dasBlog">
</div>

 [1]: http://shitalshah.com/wp-content/uploads/2004/12/Blogger2dasBlog.jpg
 [2]: /
 [3]: https://github.com/sytelus/Blogger2dasBlog