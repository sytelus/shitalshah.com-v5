---
title: Exception Code Template For CodeRush
author: Shital Shah
type: post
date: 2005-09-06T17:55:00+00:00
url: /p/exception-code-template-for-coderush/
blogger_blog:
  - astrila.blogspot.com
blogger_author:
  - Shital Shah
blogger_permalink:
  - /2005/09/exception-code-template-for-coderush.html
dsq_thread_id:
  - 4570061806
categories:
  - Developers

---
How CodeRush could miss this template? Anyway you can copy and paste this in CodeRush Options (Expert mode) to have your own!

<pre class="code-block"><code>[System.Serializable]
public class InvalidDataException
{
    public InvalidDataException()
    {
    } 

    public InvalidDataException(string message) : base( message )
    {
    } 

    public InvalidDataException (string message, System.Exception inner): base( message, inner )
    {
    } 

    public InvalidDataException (System.Runtime.Serialization.SerializationInfo info, System.Runtime.Serialization.StreamingContext context) : base(info, context)
    {
    }
}
</code></pre>