---
title: 'What to do on dreaded error CS0003: Out of memory'
author: Shital Shah
type: post
date: 2009-12-31T09:36:33+00:00
url: /p/what-to-do-on-dreaded-error-cs0003-out-of-memory/
dsq_thread_id:
  - 2700036263
categories:
  - Developers

---
I’ve spent way too much of time today (again!) on this error so here’s blog post for future reminder to me!

If you are generating or working with very large proxies then you might see following error:

<pre class="code-block code-text"><code class="no-highlight">Exception: InvalidOperationException&lt;br>
Message: Unable to generate a temporary class (result=1).
error CS0001: Internal compiler error (0xc00000fd)
error CS0003: Out of memory</code></pre>

This error typically occurs when .Net infrastructure attempts to generate *XmlSerializers.dll on the fly. To do this csc.exe is spawned off and if your proxy is too large then it might error out with a message like above. This seems to be a bug in csc and reportedly it might get fixed in .Net 4.0.

Meanwhile, here’s how you can workaround it:

First make sure all your classes that are derived from SoapHttpClientProtocol (i.e. the proxy classes) are decorated with WebServiceBindingAttribute. If you have a whole class hierarchy that derives from SoapHttpClientProtocol then all classes in that hierarchy must be decorated.

Next, for all the projects that contains classes derived from SoapHttpClientProtocol, turn “Generate serialization assembly” option on Build page to ON. Remember you will need to do this for Debug as well as Release mode or your code will fail in production.


![Visual Studio XML Serialization Option][1] 

Now you are set. The *XmlSerializers.dll will be generated and signed+versioned automatically (if your project is signed and versioned) when you do build and csc.exe won’t get spawned to cause above error.

Few more things to keep in mind:

  * One of the “popular” workaround in some forums is to switch IIS app pool for WCF to 32-bit. I wouldn’t advise this because you loose all the advantage of 64-bit, primarily, access to all the memory available on server.
  * Above error often occurs for Microsoft Dynamics CRM proxies if you have tons of entities and attributes.
  * If your code is running as plugin then you might have plugin DLLs hosted at different location than main app exe. An example of this is Microsoft Dynamics CRM plugins that gets hosted by CRM Async service. In this case, you need to copy the *XmlSerializer.dll generated after the build to same location as host exe otherwise it won’t be found by .Net infrastructure!
  * If you are using Visual Studio integrated debugging feature for WCF services then you must run Visual Studio as Administrator or above error will pop its ugly head when you are debugging.

If above steps doesn’t solve your problem then you might have to dig deeper using techniques described [here][2], watching binding errors from fuslogvw or attempt to generate Xml serilizer DLL manually using sgen.

 [1]: /images/posts/2009/12/clip_image002_2.jpg
 [2]: http://blog.bits-in-motion.com/2009/11/xmlserializers-moduleversionid-ilmerge.html