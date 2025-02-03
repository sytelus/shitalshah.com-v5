---
title: Dealing With DataViews
author: Shital Shah
type: post
draft: true
private: true
date: 2004-08-31T18:50:57+00:00
url: /p/dealing-with-dataviews/
dsq_thread_id:
  - 3520229221
categories:
  - Software

---
I never liked being forced to use DataView just to speed up my searches. Why not DataTable.Select() have an overload to generate internal indexes and do some smart things? But anyway, most people searching DataSet eventually would realizes that performance really sucks and they have no choice but to use DataViews, sometime whole bunch of it prepared for all sorts of queries you want to fire. Here are two things you should watch out ([MSDN docs][1] aren’t clear about this):

1. If you call myDataView(someIndex).Delete anywhere in your code, watch out that you do not access any other rows with index > someIndex. If you do, you might either get a run time error or even worse, you might be accessing row underneath that’s different then you actually wanted without any error. Another corollary: **Never delete rows in DataView in forward loop.**

2. If you are changing/adding row in DataTable or other DataViews, do not forget to call row.BeginEdit and row.EndEdit. If you don’t, your changes will not appear in other views you have.

Well, performance gains through DataView is still pretty sweet thing to have 🙂

 [1]: http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpref/html/frlrfSystemDataDataRowViewClassDeleteTopic.asp