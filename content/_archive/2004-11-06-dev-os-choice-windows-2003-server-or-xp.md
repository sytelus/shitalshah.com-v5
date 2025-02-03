---
title: 'Dev OS Choice: Windows 2003 Server Or XP'
author: Shital Shah
type: post
draft: true
private: true
date: 2004-11-06T00:25:42+00:00
url: /p/dev-os-choice-windows-2003-server-or-xp/
dsq_thread_id:
  - 2826620468
tags:
  - Opinions

---
[Peter Provost][1] is [switching to Server 2003][2]. I want to say: don't do it! I'd been using server version of operating system on my dev machines, even on laptops, since I can remember. But now I'm about to change my mind for the first time. Windows Server 2003 is not a cutting edge OS any longer. Infect it sucks!

1. You really have to spend lot of time to set it up right to [reclaim memory and performance][3]. For example, disabling several services, disabling option for higher performance for services, enabling DirectX manually and so on - it's always been on going job. Even than, I still find my dev box spinning way too much disk then equivalent XP box.

2. Even both OS shares lot many drivers, its sometime amazingly difficult to install some devices for Sever 2003. Infect just couple of years old hardware from Creative and ATI, the XP version of drivers just won't work.

3. Many new software from Microsoft itself just don't work on 2003. For example, Windows Media Player 10, Microsoft TimeZone etc.

4. Enhancements from XP SP2 like IE security and Wireless config etc aren't still available for 2003. It looks like users of 2003 are always one step behind in the line to get the new beef and its taking just too long.

5. Windows Peer-To-Peer SDK and Advanced Networking Pack does not work on 2003.

6. DVD playback and built-in CD burning is hard to get working (requires registry tricks and more).

7. There is [no System Restore][4]!! It might surprise you, but this is true. For this is so-called solid server OS, if file system corrupts, you lost the whole thing. This actually happened with my laptop which I just switched off while hard drives were still spinning and on next boot I was greeted with blue screen with a message that registry was corrupted. This could have been a legitimate power loss also. It was after-midnight and I really needed few things to get done. After an hour of reading docs all around Internet truth revealed: there was no way to bring 2003 back to life because there is no System Restore feature in this OS!

Overall, it just appears that Microsoft simply doesn't care if the new software/drivers they released on XP doesn't work on 2003. They just don't care. I really hate this line between server and home OS versions. Everybody knows that this lines have been drawn just to milk more money from fat corporates for so-called server versions. Few might know, XP and 2003 shares almost identical kernels (even OS version numbers are 5.01 and 5.02 respectively). Right now, you choose any flavor of OS, you not gonna get satisfied because something is missing. Its not because of technicality but pure politics of pricing. And thats a shame to Microsoft.

 [1]: http://www.peterprovost.org/
 [2]: http://www.peterprovost.org/archive/2004/11/04/2067.aspx
 [3]: http://www.msfn.org/win2k3/
 [4]: http://www.msfn.org/win2k3/sysrestore.htm