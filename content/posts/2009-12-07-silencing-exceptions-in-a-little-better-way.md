---
title: Silencing Exceptions in a Little Better Way
author: Shital Shah
type: post
draft: true
private: true
date: 2009-12-07T23:54:35+00:00
url: /p/silencing-exceptions-in-a-little-better-way/
dsq_thread_id:
  - 3582760886
categories:
  - Developers

---
Some of the most disastrous code usually takes the following form

<pre class="code-block"><code>try
{
    //some code
}
catch
{ }
</code></pre>

Silencing exceptions is almost never good but sometime the problem is minor and you don’t want want to blow up and call for an exit. However wouldn’t it be better if exceptions don’t remain silent and scream for your attention when you are debugging and behave less aggressively otherwise?

How about if we can replace above code with following:

<pre class="code-block"><code class="language-cs">IgnoreExceptionButNotIfDebugging(() =&gt;
{
    //some code
});
</code></pre>

Better.

The mysterious IgnoreExceptionButNotIfDebugging is a simple method that takes lambda and it would look like below:

<pre class="code-block"><code>public static void IgnoreExceptionButNotIfDebugging(Action codeBlockToExecute)
{
    try
    {
        codeBlockToExecute();
    }
    catch (Exception ex)
    {
        if (Debugger.IsAttached)
            Debugger.Break();

        Trace.Write("Exception occured: " + ex.Message);

        EventLog.WriteEntry("MyApp", ex.Message, EventLogEntryType.Warning);

#if DEBUG
            throw;
#endif
    }
}
</code></pre>

Now you can surround any of your code by IgnoreExceptionButNotIfDebugging and make sure things don’t remain silent when you are debugging!