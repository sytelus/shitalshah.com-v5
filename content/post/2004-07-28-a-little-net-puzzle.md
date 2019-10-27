---
title: A Little .Net Puzzle
author: Shital Shah
type: post
date: 2004-07-28T15:14:25+00:00
url: /p/a-little-net-puzzle/
dsq_thread_id:
  - 4156009760
categories:
  - Software

---
This innocent little puzzle formed from some of the recent code I was writing. Lets see if it gets you!

<pre class="code-block"><code>object p = 2;
object q = p;
p = 4;
System.Diagnostics.Debug.WriteLine("Answer is " + q.ToString());
</code></pre>

Meanwhile I'm having fun asking it to my colleagues 😉