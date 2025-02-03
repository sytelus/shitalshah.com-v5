---
title: Relations Between Your VB Components
author: Shital Shah
type: post
date: 1999-08-10T07:50:35+00:00
url: /p/relations-between-your-vb-components/
dsq_thread_id:
  - 2919037091
tags:
  - Software

---
[<img src="/images/posts/2004/12/refexplorer-300x191.jpg" alt="refexplorer" width="300" height="191" class="alignleft size-medium wp-image-900" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/refexplorer-300x191.jpg 300w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/refexplorer.jpg 660w" sizes="(max-width: 300px) 100vw, 300px" />][1]

This application scans the given folder and sub folders for VBP files, analyses which VBP file references which ones and generates a Tree view showing this relationships. What's more, it stores this analysis results in Access database so that you can run your own query or open it at later time. This utility is typically useful if your project consists of tons of VB components calling each other and if you wish to see what will be the impact of changing interface of one on other components. You can also use it to just document component relationships between your projects. This application also shows you how to analyze VBP file contents and ready-to-use source code. This application is right now in state of easy clicks but no online help is available.

<p class="obsolete">
  Warning: This program was written circa Jan 2000. It is currently considered obsolete. There are no plans to update it and no support is provided.
</p>

[ComponentCallTree is now archived at Github][2]

<div class="github-widget" data-repo="sytelus/ComponentCallTree">
</div>

 [1]: /images/posts/2004/12/refexplorer.jpg
 [2]: https://github.com/sytelus/ComponentCallTree