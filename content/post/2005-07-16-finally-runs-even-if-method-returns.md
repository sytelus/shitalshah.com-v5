---
title: Finally Runs Even If Method Returns
author: Shital Shah
type: post
date: 2005-07-16T03:41:00+00:00
url: /p/finally-runs-even-if-method-returns/
blogger_blog:
  - astrila.blogspot.com
blogger_author:
  - Shital Shah
blogger_permalink:
  - /2005/07/finally-runs-even-if-method-returns.html
dsq_thread_id:
  - 3582155607
categories:
  - Junk

---
<pre class="code-block"><code>using (DisTest o = new DisTest())
{
        return;
}
</code></pre>

OR

<pre class="code-block"><code>Dim o As DisTest = New DisTest
Try            
        Return        
Finally
         o.Dispose()
End Try
</code></pre>