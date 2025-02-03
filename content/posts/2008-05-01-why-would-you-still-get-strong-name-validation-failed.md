---
title: Why would you still get "Strong name validation failed"?
author: Shital Shah
type: post
draft: true
date: 2008-05-01T10:34:00+00:00
url: /p/why-would-you-still-get-strong-name-validation-failed/
dsq_thread_id:
  - 2731495945
categories:
  - Developers

---
There are not many web pages mentioning this so I would just post this so it comes up in search. Having personally spent 4 hours tracking this little thing down, I would want anyone else to go through same :). 

So... if you are using delay signing, you will need to run the following command so you can still debug from Visual Studio.Net: 

<pre class="code-block code-text"><code class="no-highlight">sn -Vr *,[public key token]
</code></pre>

Apparently if you are using Vista 64-bit it just won't work! You will still keep getting error something like, 

<pre class="code-block code-text"><code class="no-highlight">Could not load file or assembly '[Your file], Version=2.0.0.0, Culture=neutral, PublicKeyToken=[public ket token]' or one of its dependencies. Strong name validation failed. (Exception from HRESULT: 0x8013141A)
</code></pre>

You can try viewing Fusion log, cleaning solution, rebooting machine, watch FileMon, run Process Explorer, rebuild everything 10 times... but it just won't work. Infect if you try removing signing and if your app is WPF 3.5 then you might even get even more weird errors like 

<pre class="code-block code-text"><code class="no-highlight">Could not create an instance of type 'StaticExtension'
</code></pre>

The solution is hidden in a one liner in [Dan Wahlin's blog][1]: 

_If you're running a 64-bit installation of Vista you'll need to use the sn.exe located at **C:\Program Files\Microsoft SDKs\Windows\v6.0A\Bin\x64\sn.exe**_

I'm pretty sure tons of developers adopting shiny 64-bit OS are/would run in to this. The root cause here is sn.exe designed for 32-bit doesn't error out instead it happily lets you know that "_Verification entry added for assembly '\*,\*_'" successfully! It's not! So I also filed [a bug in out Connect web site][2]. Please vote to make 64-bit world a better place!

 [1]: http://weblogs.asp.net/dwahlin/archive/2007/08/06/fixing-a-vs-net-2008-asp-net-debugging-issue-on-vista-quot-strong-name-validation-failed-quot.aspx
 [2]: https://connect.microsoft.com/VisualStudio/feedback/ViewFeedback.aspx?FeedbackID=341426