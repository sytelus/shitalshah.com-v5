---
title: 'SyFastPage - Churn Out Those Web Sites Faster!'
author: Shital Shah
type: post
date: 2003-03-03T19:15:42+00:00
url: /p/syfastpage-churn-out-those-web-sites-faster/
dsq_thread_id:
  - 2731363991
categories:
  - Software

---
[<img src="/images/posts/2003/03/tools_icon.gif" alt="tools_icon" width="40" height="40" class="alignleft size-full wp-image-1124" />][1]
  
This is my private library to build ASP.Net websites with one goal in mind: build it fast! I've already exploited it in building 3 of the websites (including this one) and one of them was literally built overnight! So well, it proves the point. This is still evolving code and there is not much documentation right now but you can contact me for assistance. Here's what this library contains:

  * **Templated themed page framework**: This is easier and different then others. It basically allows you to specify HTML file which will become your template an then you can put markers in that HTML file to indicate where would you want your site title, page title, site logo, menus etc. This is incredibly easy to use and pretty useful if you have raw HTML website and you want to use web forms and other bells and whistles of ASP.Net. This framework can get you started in couple of hours.
  * **Navigational menu server control:** Really simplified menu server control. You set up your menu hierarchy as well as XHTML menu templates in XML file and this thing will paint it on your page.
  * **ListSet server control:** This is the heart of the site server control. It is a templated list in nutshell which means you give it a template (UserControl/ascx file) and it would instantiate that template for each row of the data. Inside your template you can use expression like `DataBinder.Eval(DirectCast(Container, DataGridItem).DataItem, "columnName")` to paint that row in a way you like. Later if you want to change the look, you just modify template and you don't even have to recompile. It nicely separates data and UI. Also it is derived from DataGrid instead of Repeater so it supports paging and other funky features.
  * **Other Stuff:** Website comments infrastructure, Some Web UI helper functions, Data functions

<p class="obsolete">
  Warning: This program was written circa 2002 and last updated around Jan 2005. It is currently considered obsolete. There are no plans to update it and no support is provided.
</p>

<a href=https://github.com/sytelus/SyFastPage">SyFastPage is now archived at Github</a>

 [1]: /images/posts/2003/03/tools_icon.gif