---
title: Test Results Windows and Exception has been thrown by the target of an invocation
author: Shital Shah
type: post
date: 2009-12-31T23:29:45+00:00
url: /p/test-results-windows-and-exception-has-been-thrown-by-the-target-of-an-invocation/
dsq_thread_id:
  - 3519951418
categories:
  - Developers

---
Just a note… if you are getting "Exception has been thrown by the target of an invocation" message when opening Test Results window in Visual Studio 2008 then it’s most likely because you have an open solution in offline mode that was bound to some TFS instance. A bug that can waste lots of your time if you didn’t knew about it!