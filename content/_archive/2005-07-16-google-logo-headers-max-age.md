---
title: Interesting Headers
author: Shital Shah
type: post
draft: true
private: true
date: 2005-07-16T02:32:00+00:00
url: /p/google-logo-headers-max-age/
blogger_blog:
  - astrila.blogspot.com
blogger_author:
  - Shital Shah
blogger_permalink:
  - /2005/07/interesting-headers.html
dsq_thread_id:
  - 3844835317
tags:
  - Developers

---
The response headers returns with Google's logo looks like this:

<pre class="code-block code-text"><code class="no-highlight">Content-Type: image/gif
Last-Modified: Mon, 25 Apr 2005 21:06:18 GMT
Expires: Sun, 17 Jan 2038 19:14:07 GMT
Server: GWS/2.1
Content-Length: 8558
Date: Sat, 16 Jul 2005 01:52:05 GMT
</code></pre>

And for some gif served by IIS on Win 2003 Server looks like this:

<pre class="code-block code-text"><code class="no-highlight">Server: Microsoft-IIS/5.0
X-Powered-By: ASP.NET
Date: Sat, 16 Jul 2005 02:08:59 GMT
Content-Type: image/gif
Accept-Ranges: bytes
Last-Modified: Fri, 04 Mar 2005 09:12:29 GMT
Etag: "20bb944a9a20c51:acc"
Content-Length: 3779</code></pre>

You can get this by using Web Developer Toolbar's Information > Reponse Header button in Firefox.

Interesting things are:

  1. Google is not using Cache-Control: max-age=xxxx header which tells browser to cach the image for a while and not re-request from the server again. This is surprising because you would think Google would use every possible way out there to reduce the load on their server.
  2. Google has named their custom web server as Google Web Server, not surprisingly.