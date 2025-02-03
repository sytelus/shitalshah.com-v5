---
title: Simple Sharing Extension
author: Shital Shah
type: post
draft: true
date: 2005-11-21T21:26:16+00:00
url: /p/simple-sharing-extension/
dsq_thread_id:
  - 3582154802
categories:
  - Junk

---
Unlike breakthrough ideas in physical sciences, the breakthrough ideas on Internet are in general so simple that they don’t require you to be genius, just not being stupid is often enough. And yet [SSE][1] specs [from Ray Ozzie][2] is truly something that I can go crazy about and has definitely reignited my cravings for starting a new project for building a dream version of Groove. As someone who has spent 2 intensive years in turning a real world large scale application in to almost-magic collaboration app despite the [frustrating state of Groove][3], I can’t over judge the delights and simplifications the SSE can bring to you.

The SSE could be essentially viewed as lightweight simplified version of Groove dynamics riding on RSS. What can you do with it? For any app that deals with some kind of data, you can enhance that app to publish the modifications to that data, accept modifications from someone else and merge them using well defined rules. For most real world applications, this won’t be enough. You would never want your data to be blindly overwritten by someone else’s changes. You had rather want an ability to view those edits as conflicts and resolve them. This needs more than SSE: You will need to enhance your existing XML/RDBMS schemas to allow for versions, new capabilities for UI elements to display conflict and resolve them and in-between middle tier to incorporate conflict state in to your business logic. Still this simple thing, SSE is a huge start and can essentially turn almost any application in to a collaborative powerhouse instead of something that runs in dark isolation on your local box.

While I can’t yet comment on finer points until I actually build something that talks using RSE+SSE, my feeling is that we have yet to see SSE specs getting matured. You can easily see the hack for _ordered_ list to accommodate OPML which otherwise could have been modeled using additional item elements describing relationships between other items and reusing the mechanism developed for ordered item. But that probably would end up in endless discussion than just adding a hack to make DaveW happy. However the major grip is about using RSS as a carrier for sync info. This isn't unusual, as I'd noted in [my essay][4], it is often easier to ride on RSS popularity to gain acceptance rather than hopelessly debating technical merits of your ideas in truly useless meetings with everyone you ever knew. The scarifies is that now instead of using structures that may well fit the data structure you have, you gonna stuff your stuff into RSS item tag. Apart from this, each endpoint will have to maintain history to detect conflict when _version_ attribute is same and also (optionally) maintain list of conflicts along with item which would be republished to other endpoints. I wonder if there exist an algorithm to eliminate/further simplify this.

 [1]: http://msdn.microsoft.com/xml/rss/sse/
 [2]: http://spaces.msn.com/members/rayozzie/Blog/cns%211pyct_cYtbBtOBPDVAumMEdw%21175.entry
 [3]: /p/applications-and-platforms-an-another-face-of-internet-and-why-i-hate-groove/
 [4]: /p/integrating-rss-and-calendar/