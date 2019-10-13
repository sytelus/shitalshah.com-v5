---
title: Some Cool .Net Nuggets
author: Shital Shah
type: post
date: 2005-06-24T22:00:46+00:00
url: /p/some-cool-net-nuggets/
dsq_thread_id:
  - 2731587316
categories:
  - Software

---
  * If type's constructor (i.e. static constructor) throws an exception, entire type becomes unusable. Any attempt to call any member of that type would result in TypeInitializationException.
  * Operator overloading should never be the only way to use the functionality if your code targets 1.x versions of frameworks because VB.Net can't access it without resorting to ugly calls such as <pre class="code-inline"><code>op_Addition</code></pre>
    
    .</li> 
    
      * There is universal symbol for money (a generic version of $, £, ¥ etc) and it's ¤ (U+00A4). If you format the number as currency in culture invariant way then .net attaches this symbol to your number. I just think it's cool to have some universal symbol for money :).
      * Simplest way to convert hex number to int: <pre class="code-inline"><code>Int32.Parse("1AFF", NumberStyles.HexNumber, null)</code></pre>
    
      * Simplest way to display array of bytes as hex values: <pre class="code-inline"><code>BitConverter.ToString(byteArray)</code></pre>
    
      * If you updated something in your computer and suddenly your .Net app behaves bad, it is possible to do automatic rollback.. The .Net Framework keeps track of assemblies that was loaded by any managed app up. This info is stored in an INI file in <pre class="code-inline"><code>LocalSettings\Application Data\ApplicationHistory</code></pre>
        
        and is used by .Net Application Restore tool. I think this great debugging aid too.</li> 
        
          * In .Net world, zombies are not purely an imagination: <pre class="code-block"><code>class Person
{
        static object HoldOnToMe;
        ~Person()
        {
                &lt;strong>HoldOnToMe = this;&lt;/strong>
                GC.ReRegisterForFinalize(this);
        }
}
</code></pre>
        
          * Values types are allocated on stack but not when you have an array of value types. For example, <pre class="code-inline"><code>new Int32[100]</code></pre>
            
            allocates 100 unboxed integers on heap, not on stack.</li> 
            
              * The Finally block is not really always guaranteed to get executed. If any of these 3 special exceptions do happen, code in Finally won't be executed: <pre class="code-inline"><code>OutOfMemoryException</code></pre>
                
                ,
                
                <pre class="code-inline"><code>StackOverFlowException</code></pre>
                
                and
                
                <pre class="code-inline"><code>ExecutionEngineException</code></pre>
                
                (I'd be fortunate enough to experience all of these). That means you had created some global kernel objects, they will indeed hang around and may interfere when user restarts your app. BTW, if you see a code like
                
                <pre class="code-inline"><code>catch(Exception ex) {...}</code></pre>
                
                or
                
                <pre class="code-inline"><code>catch{...}</code></pre>
                
                , tell the developer that he has committed a sin.</li> 
                
                  * Apparently GC.Collect() is not always a line of code you should disgust at. You might want to do it especially when you _own_ the process and had created loads of objects which won't be used any further (for example moving on to a new tab in WinForms app). I used this in one of my projects to improve on the memory pressure and was really feeling guilty about it, until recently. <pre class="code-block"><code>        GC.Collect();
        //block my thread till objects needing finalization are done
        GC.WaitForPendingFinalizers();
        GC.Collect();
</code></pre>
                
                  * You should always strong name your assemblies, especially if it is going to be used by assemblies in multiple AppDomains in the same process because only they are shared between domains; otherwise each AppDomain will have it's own copy. Why anyone would have multiple AppDomains, you ask. Well, if you are enabling your app to have 3<sup>rd</sup> party plugins, I strongly recommend loading all these plugins in to a separate domain. This way not only you can control the security policy on these plugins but also unload the bad plugins without shutting down your app. This is often overlooked in various plugin architectures for .Net but if you don't do this, you app might go on the same route as IE6.
                  * If you have enabled your app or website for localization, don't forget to test it with Turkish language. If your thread is having CurrentCulture Turkish (tr-TR) and if you try to uppercase a letter i, you get 0 instead of normal english I (i.e. Unicode character U+0130 instead of U+0049). Scott Hanselman has [a first hand experience][1]. 
                  * Many of you know Application.ThreadException event which lets you capture the unhandled exceptions in WinForms app and do something like Windows Error Reporting. But the better way is probably <pre class="code-inline"><code>AppDomain.UnhandledException</code></pre>
                    
                    event because that also lets you get notified for non-CLS compliant exceptions and without needing a reference to
                    
                    <pre class="code-inline"><code>Application</code></pre>
                    
                    object.</li> 
                    
                      * The values of public constants that you reference from other assemblies are embedded in your own assembly metadata. That means, if other assembly changes the value of the constant afterwards, you must recompile your own assembly or otherwise you still will be using that old value of the constant. I think this is as critical "bug" as [lapsed event handlers][2]. 
                      * Jagged arrays are not CLS compliant. If you are building a library that can be used by VB or C# guys, you can't have jagged arrays as public member type.
                      * Visual Basic can do this: <pre class="code-block"><code>Try
        ...
Catch e as Exception &lt;strong>When x = 0&lt;/strong>
        ...
End try
</code></pre></ul>

 [1]: http://www.hanselman.com/blog/UpdateOnTheDasBlogTurkishIBugAndAReminderToMeOnGlobalization.aspx
 [2]: http://groups.yahoo.com/group/win_tech_off_topic/message/27597 "My post on OT list about how troublesome this problem could be"