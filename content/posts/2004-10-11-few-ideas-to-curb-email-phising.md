---
title: Few Ideas To Curb Email Phising
author: Shital Shah
type: post
draft: true
private: true
date: 2004-10-11T22:37:19+00:00
draft: true
private: true
url: /p/few-ideas-to-curb-email-phising/
dsq_thread_id:
  - 4852988107
categories:
  - Junk

---
Chris Sells [blogs about his experience][1] and this exponentially growing problem of email [phishing][2] and asks if there is any way out.

Few things to think about:

1. Enable Explicit Links Only

In email clients, put an option, which is turned _on_ by default for this: While rendering HTML hyperlinks, disable them _unless_ the link text is exactly the same as hyperlink URL it is pointing to. Images in email also can't have hyperlink any longer.

There are many advantages: This option does not completely block legitimate commercial senders. Also it does not hurt users themselves sending links to each other because when they copy and paste links in their emails, this is how it appears by default.

2. Use TITLE tag for warning

The email client can add/override TITLE tag for all [clickable hyperlinks with a text: "Unsafe website"][3]. So these words will appear when user hovers mouse over a link and is about to click on the link.

3. Ugly Message Box

If the idea of disabling links could be an overkill. May be email client can just put a message box when you are opening a browser by clicking a link in email: "Following website may not be safe: blah.blah.gov. This could be with checkbox "Don't warn again" or may be as an secret advanced option somewhere.

4. Auto-refresh email to browser page

When you click on a link in an email client, the browser first shows a default warning page that URL may not be safe with text of actual URL and then after a while it refreshes itself to that actual URL, puts the focus on address bar and may be change the address bar foreground color as red. Playing the wave file for hazard siren while user browse that page is optional.

 [1]: http://www.sellsbrothers.com/news/showTopic.aspx?ixTopic=1541
 [2]: http://www.cbfa.be/eng/press/html/2004-07-14_phising.asp
 [3]: http://www.dontlink.com/ "Unsafe website"