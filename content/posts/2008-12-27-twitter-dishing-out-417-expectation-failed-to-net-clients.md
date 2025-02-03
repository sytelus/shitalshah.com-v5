---
title: 'Twitter Dishing Out 417 - Expectation Failed to .Net Clients'
author: Shital Shah
type: post
draft: true
date: 2008-12-27T12:20:00+00:00
url: /p/twitter-dishing-out-417-expectation-failed-to-net-clients/
categories:
  - Developers

---
My little [Twitter app][1] was broke since past few days with error 417 - Expectation Failed. Infect most .Net apps calling Twitter APIs would be broken right now so I thought to write this up.

This error is seemingly because Twitter servers have started rejecting Expect HTTP header with value "!00-Continue". I'm not sure if this was planned event or enough warnings were issued to developers but it would be guaranteed to drive you nuts.

The error is because of default behavior in HttpWebRequest object that [adds an HTTP header][2] called Expect with value "100-Continue" to almost every outgoing POST request. This header basically tells the server that it's going to send all the data in form in the next request instead of current request so that if server has redirects or auth then it doesn't have to resend it all over again. This is a good thing if your web form has lots of data or if you are on low latency network or most servers in the word have either redirects or auth when submitting forms but a bad thing for server performance because now it gets hit twice for each request. I think performance might be the reason Twitter has turned off support for such two partter POST requests which unfortunately happens to be the default for HttpWebRequest.

In any case, it turns out that HttpWebRequest does all these thing under the hood so to get rid of this error you will need to set a static flag in ServicePointManager class like this:

<pre class="code-block"><code>System.Net.ServicePointManager.Expect100Continue = false;
</code></pre>

Above statement will cause elimination of HTTP Expect header from your calls to Twitter and it will be happy again.

I'm using [Yedda's C# wrapper][3] for Twitter APIs for [QckTwit][1] so above line goes in to start of ExecutePostCommand method.

PS: If you are new to Twitter try out free simple lightweight app [QckTwit][1]. It just sits in your system tray, asks you about what you are doing at reminder interval you set, updates the Twitter and gets out of your way!

 [1]: http://www.codeplex.com/QckTwit
 [2]: http://haacked.com/archive/2004/05/15/http-web-request-expect-100-continue.aspx
 [3]: http://devblog.yedda.com/index.php/twitter-c-library/