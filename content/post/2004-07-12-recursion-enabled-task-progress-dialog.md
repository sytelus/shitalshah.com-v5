---
title: Recursion Enabled Task Progress Dialog
author: Shital Shah
type: post
date: 2004-07-12T10:37:07+00:00
url: /p/recursion-enabled-task-progress-dialog/
dsq_thread_id:
  - 3206314859
categories:
  - Software

---
[<img src="http://shitalshah.com/wp-content/uploads/2004/12/TaskProgress-300x180.jpg" alt="TaskProgress" width="300" height="180" class="alignleft size-medium wp-image-903" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/TaskProgress-300x180.jpg 300w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/TaskProgress.jpg 344w" sizes="(max-width: 300px) 100vw, 300px" />][1]

This is an advanced progress dialog which can be shared among method calls which can call each other recursively. Each method call gets a portion of the total progress so we can see some continuous progress instead of only top level method progress.
  

  
This is implemented by singleton version of TaskProgress using static public member which each method can use without being aware of other methods. This component keeps tracks of call recursion in a Stack and allocates progress bar range to each of the calls. Also the point of interest is the time remaining calculation which, if not sure, would show min-max range like "Time Remaining: 2 mins to 7 mins". Please note that this is .Net 2.0 Beta1 code. 

Sample code for usage:

<pre class="code-block"><code>
/*** Pseudo Code ***/
public void Button1_Click(...) 
{       
    Progress.Show(0, 100);                  
    Progress.AllocateRangeForCallee(0,25);    //child updates would be mapped to range 0 to 25       
    Callee1();  //Callee would also attempt to show progress dialog too       
    Progress.Unload();      //ref count =0, this will actually unload 
} 

private void Callee1() 
{       
    //this won&#39;t re-show, just increment the ref count       
    Progress.Show(0, 100);  //this range is mapped to what caller has allocated       
    ...         //do work and update progress       
    Progress.Unload();  // this won&#39;t actually unload, just decrement the ref count 
} 
</code></pre>

<p class="obsolete">
  Warning: This program was written circa Mar 2004 and last updated around Mar 2005. It is currently considered obsolete. There are no plans to update it and no support is provided.
</p>

[TaskProgressDialog is now archived at Github][2]

<div class="github-widget" data-repo="sytelus/TaskProgressDialog">
</div>

 [1]: http://shitalshah.com/wp-content/uploads/2004/12/TaskProgress.jpg
 [2]: https://github.com/sytelus/TaskProgressDialog