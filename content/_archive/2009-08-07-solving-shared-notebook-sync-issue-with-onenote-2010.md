---
title: Solving Shared Notebook Sync Issue With OneNote 2010
author: Shital Shah
type: post
draft: true
date: 2009-08-07T10:55:14+00:00
url: /p/solving-shared-notebook-sync-issue-with-onenote-2010/
dsq_thread_id:
  - 3577683630
tags:
  - Geekery

---
Since about 3 years we used Groove to share calendar, notes and files within family – until I discovered a feature in OneNote called “Shared Notebooks”. The Shared Notebooks are just like any other OneNote notebooks with a difference that they get synced with other people! If someone added new note or modified a note you get it next time and vice a versa. On conflicts it created new pages and also you can take automated backups. This feature requires either file share or SharePoint. So I’ve now got my personal SharePoint website on Internet (which costs $10 per year) to host our shared OneNotes as well as our shared calendar that gets synced in Outlook.

Unfortunately in OneNote 2010 Technical Preview, the sync stopped working because OneNote for some reason does not popup a dialog to ask for a password to connect to SharePoint website on Internet anymore. Very troublesome. But here’s the work around I’ve found:

  1. Right click on the Notebook, select Properties.
  2. Click on Change Location button.
  3. Type URL of your SharePoint website. This will popup password dialog.
  4. Cancel all dialogs and sync! It should work now.