---
title: 'REA2 - Take The Control'
author: Shital Shah
type: post
date: 1998-07-03T16:59:33+00:00
url: /p/rea2-take-the-control/
dsq_thread_id:
  - 4675635051
categories:
  - Software

---
[<img src="/images/posts/2003/03/tools_icon.gif" alt="tools_icon" width="40" height="40" class="alignleft size-full wp-image-1124" />][1]
  
Concept of trojan horses is not new. Programs like [Back Orifice 2000][2] silently stays in background in your PC, acts as TCP/IP server and allows somebody to connect it through Internet and execute commands sent by them. The REA2 (Remote Execution Agent) is my own trojan horse specifically designed for silent, full proof, reliable and powerfull intrusion and control. I crafted this gem in about 5 hours and comparing with BO2K, it lacks few features like real time screen display and mouse control and plug-ins but it's designed to be much more "reliable and silent intrusion" and has some more capabilities then BO2K. It's written in Delphi 3.0 to eliminate any runtime requirements. The EXE available here is a server. You can use any client that can connect to it on port 23145 and send the command as strings. My favorite client is my own PortTalk. I didn't got much time to document these stuff (as usual it was fun program solely meant for me) but you can get the list of commands in TMainForm.ProcessReq function in main.pas file. This application is right now not in state of easy clicks. You might have to modify the source code for your needs. However you may freely contact me for the assistance. 

<p class="obsolete">
  Warning: This program was written circa Jul 1998. It is currently considered obsolete. There are no plans to update it and no support is provided.
</p>

[REA2 is now archived at Github][3]

<div class="github-widget" data-repo="sytelus/REA2">
</div>

 [1]: /images/posts/2003/03/tools_icon.gif
 [2]: http://www.shitalshah.com/www.bo2k.com
 [3]: https://github.com/sytelus/REA2