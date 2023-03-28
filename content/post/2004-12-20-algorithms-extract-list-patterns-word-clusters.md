---
title: 'Algorithms: Extract List Patterns, Word Clusters'
author: Shital Shah
type: post
draft: true
private: true
date: 2004-12-20T13:59:47+00:00
draft: true
private: true
url: /p/algorithms-extract-list-patterns-word-clusters/
gr_overridden:
  - 1
gr_options:
  - 'a:3:{s:13:"enable-ribbon";s:4:"Show";s:10:"github-url";s:40:"https://github.com/sytelus/ListExtractor";s:11:"ribbon-type";i:3;}'
dsq_thread_id:
  - 2859055064
categories:
  - Software

---
[<img src="/images/posts/2004/12/WordGroups.jpg" alt="WordGroups" width="1280" height="744" class="alignleft size-full wp-image-907" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/WordGroups.jpg 1280w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/WordGroups-300x174.jpg 300w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2004/12/WordGroups-1024x595.jpg 1024w" sizes="(max-width: 1280px) 100vw, 1280px" />][1]

This program demos two very interesting algorithms that I'd started designing during Fall 2004 and then got busy in other stuff.

First algorithm is simple which I call List Extractor and it finds the list like structures in any given text and extracts the data out of them. This enables automatic data extraction without prior knowledge of layout or formatting in web pages. If you look at lot of web pages, you will find that they just present some data in some repetative HTML formatting which I call a "list". Examples are airlines schedules list, Google search results list, chronological experience list in resumes and so on. Challenge is to extract these lists from a page without knowing beforehand how this page has been laid out. Lot of web scrapping algorithms works on a fixed known layouts and by use of complex regular expressions. They will usually break if layout even changes slighly. This program demos my algorithm. Though I'd made some last minute changes which have affected its performance and accuracy. I'll correct that as I get sometime.

Second algorithm is what I (and apparently now Google too) calls the "Word Clustering". Basically the concept is that when you are looking at a genuinely informative webpage on a particular subject, say, General Relativity, you will tend to find (and intuitively expect) several other associated relevant words to appear on the same page such as metric, tensor, Riemann, geometry, gravity and so on. So these sets of words form a relevant "cluster" and they tend to appear together a lot. So by checking what kind of word clusters a page contains, it should be possible to find out what "topics" that page is talking about and you can also get some idea of the degree it's genuinely informative. This program contains quick and dirty way to find Word clusters on a page (not fully implemented yet) including elimination of "noise" words such as "is", "this", "are" etc.

<p class="obsolete">
  Warning: This program was written circa Dec 2004 and last updated around Mar 2005. It is currently considered obsolete for most practical purposes. There are no plans to update it and no support is provided. It exists here purely for its historical and nostalgic value.
</p>

[ListExtractor is now archived at Github][2]

<div class="github-widget" data-repo="sytelus/ListExtractor">
</div>

 [1]: /images/posts/2004/12/WordGroups.jpg
 [2]: https://github.com/sytelus/ListExtractor