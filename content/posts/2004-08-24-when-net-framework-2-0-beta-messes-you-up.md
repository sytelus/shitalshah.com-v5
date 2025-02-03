---
title: When .Net Framework 2.0 Beta Messes You Up
author: Shital Shah
type: post
draft: true
private: true
date: 2004-08-24T04:02:08+00:00
url: /p/when-net-framework-2-0-beta-messes-you-up/
dsq_thread_id:
  - 2892121989
categories:
  - Software

---
If you installed [.Net Framework 2.0 Beta][1] and suddenly [VS2K3.Net][2] refuses to attach to your existing 1.1 apps with a very cool error message “Unable to attach to process”, don’t get panic! Looks like side-by-side promise of Framework versions doesn’t work in some rare cases (which somehow I always get in to). Unfortunately you can’t uninstall 2.0 (even though it gets installed in separate folder, core DLLs such as mscorlib.dll is already replaced by 2.0 version). The best way to make things work is to live with it and add this little snippet in your [[myapp].exe.config][3]:

<pre class="code-block"><code>&lt;?xml:namespace prefix = o ns = "urn:schemas-microsoft-com:office:office" /&gt;
&lt;configuration&gt;
   &lt;a href="http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpgenref/html/gngrfstartup.asp">&lt;startup&gt;&lt;/a>
      &lt;supportedRuntime version="v1.1.4322"/&gt;
   &lt;/startup&gt;
&lt;/configuration&gt;
</code></pre>

Even better way is, off course, install betas only in your [VPC][4]!

PS: If you ask what was that rare situation: This happens with [Groove tools][5] you write with 100% managed code. In this case, you expose your [DMD][6] with [CCW][7] which Groove loads dynamically using ProgID and somehow it gets bind to 2.0 version. One more thing, I’ve heard that 2.0+ Frameworks will upgrade existing framework version rather then getting installed side-by-side. That might be it! In any case, your VS2003.Net will get screwed up, so above step is necessary.

 [1]: http://www.microsoft.com/downloads/details.aspx?FamilyID=916ec067-8bdc-4737-9430-6cec9667655c&DisplayLang=en
 [2]: http://msdn.microsoft.com/vstudio
 [3]: http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpguide/html/cpconapplicationconfigurationfiles.asp
 [4]: http://www.microsoft.com/windows/virtualpc/default.mspx
 [5]: http://docs.groove.net/dev/currentbuild/platform/wwhelp/wwhimpl/js/html/wwhelp.htm?href=Net%20Lead.html
 [6]: http://docs.groove.net/dev/currentbuild/platform/wwhelp/wwhimpl/js/html/wwhelp.htm?href=DMDComponents.html
 [7]: http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dndotnet/html/callnetfrcom.asp