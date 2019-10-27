---
title: Using Windows Explorer Progress Dialog In Your Application
author: Shital Shah
type: post
date: 2004-12-26T19:37:27+00:00
url: /p/using-windows-explorer-progress-dialog-in-your-application/
gr_overridden:
  - 1
gr_options:
  - 'a:3:{s:13:"enable-ribbon";s:4:"Show";s:10:"github-url";s:44:"https://github.com/sytelus/WinProgressDialog";s:11:"ribbon-type";i:3;}'
dsq_thread_id:
  - 3299243889
categories:
  - Software

---
<a href=/images/posts/2004/12/ProgressDialogDemo.jpg"><img src="/images/posts/2004/12/ProgressDialogDemo.jpg" alt="ProgressDialogDemo" width="381" height="169" class="alignleft size-full wp-image-897" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/ProgressDialogDemo.jpg 381w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/ProgressDialogDemo-300x133.jpg 300w" sizes="(max-width: 381px) 100vw, 381px" /></a>

When you copy lot of files in Explorer, you see the standard Windows progress dialog with "flying papers" animation and the calculation of estimated time remaining. This dialog is accessible to any Windows application through [IProgressDialog interface][1]. This source code provides you a managed .Net wrapper to easily and intuitively integrate Windows Progress Dialog in your own applications. You can read more details in [my original article on CodeProject][2]. Also see the comments in that article. It looks like two of the guys really hit on it and have produced a stand alone version.

<p class="obsolete">
  Warning: This program was last updated on 13 Jan 2005 and is considered <em>obsolete</em>. There are no plans to update it and no support is provided. It exists here purely for its historical and nostalgic value.
</p>

[WinProgressDialog is now archived at Github][3]

<div class="github-widget" data-repo="sytelus/WinProgressDialog">
</div>

 [1]: http://msdn.microsoft.com/library/default.asp?url=/library/en-us/shellcc/platform/shell/reference/ifaces/iprogressdialog/iprogressdialog.asp
 [2]: http://www.codeproject.com/Articles/9298/Using-Windows-Explorer-Progress-Dialog-In-Your-App
 [3]: https://github.com/sytelus/WinProgressDialog