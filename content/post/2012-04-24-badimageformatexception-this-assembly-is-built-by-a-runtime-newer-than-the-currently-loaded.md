---
title: 'BadImageFormatException - This assembly is built by a runtime newer than the currently loaded'
author: Shital Shah
type: post
date: 2012-04-24T05:49:22+00:00
url: /p/badimageformatexception-this-assembly-is-built-by-a-runtime-newer-than-the-currently-loaded/
dsq_thread_id:
  - 2685407539
categories:
  - Developers

---
Strange thing happened today. I upgraded one of the internal tool to .Net 4.0 without any issues but as soon as I attempt to debug/run the binary, I’ll see this exception:

<pre class="code-block code-text"><code class="no-highlight">System.BadImageFormatException was unhandled Message: Could not load file or assembly SomeTool.exe' or one of its dependencies. This assembly is built by a runtime newer than the currently loaded runtime and cannot be loaded.</code></pre>

Normally you see this exception if the machine doesn’t have right run time installed. But this was obviously not the case. Changing build to x86 or x64 didn’t made any difference either. Next I ran peverify.exe which happily reported that there was nothing wrong with the binary image. Finally I needed to pull out the big guns, ask fuslogvw, which would show me if there are any dependent assembly binding that was failing. But that also didn’t produce any boom sounds. So the last resort was to just meditate over the issue for few minutes. And that works. In a sign of enlightenment I saw app.config buried along with bunch of files and it had these lines:

<pre class="code-block"><code>    &lt;?xml version="1.0"?&gt; 
    &lt;configuration&gt; 
    &lt;startup&gt;&lt;supportedRuntime version="v2.0.50727"/&gt;&lt;/startup&gt;&lt;/configuration&gt;
</code></pre>

Aha! Apparently the app.config doesn’t get updated (may be because it was in TFS?) when VS did the 4.0 upgrade. As app.config didn’t had anything else, just deleting this file solved the issue. I do wonder how many people come across this gotcha.