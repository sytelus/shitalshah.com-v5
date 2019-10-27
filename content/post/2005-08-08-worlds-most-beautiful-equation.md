---
title: "World's Most Beautiful Equation"
author: Shital Shah
type: post
date: 2005-08-08T17:22:07+00:00
url: /p/worlds-most-beautiful-equation/
dsq_thread_id:
  - 2664486103
categories:
  - Mathematics

---
UPDATE: Check out [my article][1] on detailed HowTo for this topic.

A weekend worth of effort has paid off so I can finally write about this equation. For those who wants to write about mathematics in their blogs knows what I'm talking about. Quite ironically, there is no built-in support for writing math equations in HTML. Of all types of knowledges, mathematics is something that remains invariant over time, cultures, languages. But the fact that the Internet, the largest knowledge resource of our times, does not _yet_ have the capability to easily represent theses crown jewels is ironic.

That got to be changed. Thanks to John Forkosh who authored MimeTeX, the C code that parses equations in TeX format and renders them in to images. The code could be compiled as CGI executable to run under Windows. But my goal is different. I want to enable all forums, blogs, wikis and even desktop apps like Yahoo/MSN messenger so users can quickly write math equations. Considering some of forums and wikis have thousands of simultaneous users, the CGI executable just won't cut it. Neither it's usable for integration with desktop apps. So my decision was to convert original MimeTex code in to Win32 DLL and that's were the trouble begins (and weekend plans ends). I realized the MimeTeX code had several memory leaks which don't matter that much when you run it as a CGI EXE but could bring down the server if I'd to run it in-proc. Fortunately I was able to fix those leaks in just a weekend worth of effort and finally have my C# test app talking to MimeTeX Win32 DLL and displaying equations as I type! However the coolest part of the whole process was the long long emails with John Forkosh over next few days discussing every change I made in his code, carefully scrutinizing it, sending back and forth our changes to each other. While John would be updating his distro soon, you can [get the code][2] with fixes along with VB.Net and C# samples, DLL for desktop apps and my HttpHandler HttpModule code. This will enable you to integrate this functionality in any website or desktop app and let your users write equations as simply as:

<pre class="code-block"><code>Fermat&#39;s Last Theorem is &lt;img src="$x^n + y^n = z^n$"&gt;
</code></pre>

And Now without further ado, here's [the answer to life, the universe and everything][3] (and no, it's not 42):

<p style='text-align:center;'>
  <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_74efedf498a3cab300eae408c273ffdb.gif' style='vertical-align: middle; border: none;' class='tex' alt="e^{i\pi}=-1" /></span>
</p>

Known as Euler's Identity, this equation reflects the relationship between four most fundamental numbers in the universe. There are not many important mathematical and physical equations where <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_e1671797c52e15f763380b45e841ec32.gif' style='vertical-align: middle; border: none; padding-bottom:2px;' class='tex' alt="e" /></span>, <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_865c0c0b4ab0e063e5caa3387c1a8741.gif' style='vertical-align: middle; border: none; padding-bottom:1px;' class='tex' alt="i" /></span> or <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_235cde285dd1dd8c9ceb6cadf9a15444.gif' style='vertical-align: middle; border: none; ' class='tex' alt="/pi" /></span> hasn't invaded yet and that in essence implies that these fundamental constants very tightly controls the ways the universe works (did you noticed <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_587a1a92298cb01e0cc2c2a14547dc0b.gif' style='vertical-align: middle; border: none; ' class='tex' alt="G_{\mu\nu}=\frac{8\pi G}{c^4} T_{\mu\nu}" /></span>). So in nutshell, this equation just might be the concise definition of the universe ;).

 [1]: http://www.codeproject.com/Articles/11406/Enable-Your-Users-to-Write-Math-Equations-in-Your
 [2]: https://github.com/sytelus/Eq2Img
 [3]: http://en.wikipedia.org/wiki/The_Answer_to_Life,_the_Universe,_and_Everything