---
title: Welcome to shitalshah.com V4
author: Shital Shah
type: post
draft: true
date: 2014-05-18T08:24:01+00:00
url: /p/welcome-to-shitalshah-com-v4/
dsq_thread_id:
  - 2694079028
categories:
  - Site News

---
It's that time of the year again: Upgrading the technology stack behind my site! Actually, much more than that.� I'd been neglecting to post here for very long time.� Pretty much everything that could happen to prevent me from posting often seem to have indeed happened in past few years. There have been indeed lots of glowing moments of insights, clarity and awesomeness� which all now slipped away from my keystrokes to remain buried in the fragile volatile memory of mine. Only thing I can say is, you, poor reader! 

People have argued that social media will� spell the end of posting on personal websites� and blogs. In reality, social media has so much optimized itself� on to sharing statuses, links, photos etc that it is rather dull tool for meaningful longer writings especially technical writing.� I guess no one in social media currently cares about ability to syntax highlight the code, add LaTeX equations or embed latest commits from Github repos. 

The decision to revive this website came with many choices. From the way back in 1990s, I'd insisted to build my own computers for my home and write my own software for my homepage. I enjoyed doing both because I loved obsessing over all the tiny details of hardware specs� and software behavior. But then two things happened:� Writing� blog engines with all bells and whistles� started becoming� a full time job and 2nd, it's hard to beat MacMini on size, specs, price and ability to run MacOS as well as Windows. Of course, I could dumb down my blog engine to minimum, but then where's the fun? 

Result is that last year I finally bought MacMini instead of building my own desktop. This year I decided to shelve my old� [SyFastPage framework][1]� as well as new� [ccBlog project][2]� at least until I'm done with other more important things. The decision got� much easier by the fact that WordPress has finally evolved in to something that is� robust, easy to use, hackable, extensible and has enormous community support that would be hard to replicate. 

These days any hacker can't possibly make a choice to use WordPress without looking at� [Jekyll][3] and its semi-clones. Initially I was excited by the whole concept of throwing away fat server side stack� and having every� change� archived at Github but as I thought more about it I felt� Jekyll wasn't passing this litmus test:� _Everything Should Be Made as Simple as Possible, But Not Simpler_. 

If you think about it, even though modern CMS/blog software dynamically generate pages using their fat footprints, for most of the requests content is served right off of the cache. In essence,� these fat complex infrastructures� _are_� static site generator but storing their generated content in memory instead of disc. This� actually� enables simplicity in use which would be otherwise be sacrificed to keep technology stack simple. 

So the new version of this website is _mostly_ WordPress and I'm pretty happy with everything so far. The reason for "mostly" because I'm still running� some code that I wrote using� ASP.Net. The ability to use WordPress side-by-side your own code and override any WordPress idiosyncrasy is very important to me.� This gives me an escape hatch to write my own� code for whatever I wanted using� whatever stack I preferred.� The source code of [old version of this website][4] will remain available like all of my open source projects. 

In past, I'd kept content of this blog more personal and less technical because at that time social media didn't existed and many of� my friends and family would� have glazed their eyes over technical content. Thanks to social media, I can now continue posting all those personal opinionated blurbs there and use this website for sharing something more� serious. If you are interested� in the former you can follow [my social feeds][5].

 [1]: https://github.com/sytelus/SyFastPage
 [2]: https://github.com/sytelus/CCBlog
 [3]: http://jekyllrb.com/
 [4]: https://github.com/sytelus/ShitalShahWebV3
 [5]: /connect/