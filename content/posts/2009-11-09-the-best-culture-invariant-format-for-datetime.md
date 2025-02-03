---
title: The Best Culture Invariant Format for DateTime
author: Shital Shah
type: post
draft: true
private: true
date: 2009-11-09T01:35:41+00:00
url: /p/the-best-culture-invariant-format-for-datetime/
dsq_thread_id:
  - 2992915495
categories:
  - Developers

---
If you are looking to display how to display DateTime as text without causing confusion to users in different countries then good choices is either "o" or "r". The "o" format is in general more preferable as it also puts timezone offset.

<pre class="code-block"><code>long t = DateTime.Now.Ticks;
Console.WriteLine((new DateTime(t)).ToString("o"));
Console.WriteLine((new DateTime(t, DateTimeKind.Local)).ToString("o"));
Console.WriteLine((new DateTime(t, DateTimeKind.Unspecified)).ToString("o"));
Console.WriteLine((new DateTime(t, DateTimeKind.Utc)).ToString("o"));
</code></pre>

Prints followings when actual date time is 2009-11-08T17:16:13.7791953 PST:

<pre class="code-block code-text"><code class="no-highlight">2009-11-08T17:16:13.7791953
2009-11-08T17:16:13.7791953-08:00
2009-11-08T17:16:13.7791953
2009-11-08T17:16:13.7791953Z
</code></pre>

If you use "r" instead it would print followings:

<pre class="code-block code-text"><code class="no-highlight">Sun, 08 Nov 2009 17:26:02 GMT
Sun, 08 Nov 2009 17:26:02 GMT
Sun, 08 Nov 2009 17:26:02 GMT
Sun, 08 Nov 2009 17:26:02 GMT
</code></pre>