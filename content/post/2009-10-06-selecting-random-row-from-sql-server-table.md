---
title: Selecting Random Row From SQL Server Table
author: Shital Shah
type: post
date: 2009-10-06T03:08:25+00:00
url: /p/selecting-random-row-from-sql-server-table/
dsq_thread_id:
  - 3582758287
categories:
  - Developers

---
It is important to make sure your automated tests covers various real-world data combinations (for instance, some columns could be null or some rows could be duplicate). For perf testing you want to reduce effects of caching by not firing same SQL over and over. In these cases, ability to select a random row for your test could come in handy and here’s neat little trick to do it:

<pre class="code-block"><code>select top 1 * from table order by newid()
</code></pre>