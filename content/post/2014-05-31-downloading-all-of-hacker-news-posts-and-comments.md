---
title: Downloading All of Hacker News Posts and Comments
author: Shital Shah
type: post
date: 2014-05-31T02:54:03+00:00
url: /p/downloading-all-of-hacker-news-posts-and-comments/
gr_overridden:
  - 1
gr_options:
  - 'a:3:{s:13:"enable-ribbon";s:4:"Show";s:10:"github-url";s:47:"https://github.com/sytelus/HackerNewsDownloader";s:11:"ribbon-type";i:3;}'
dsq_thread_id:
  - 2725269643
categories:
  - Developers
  - Software

---
### Introduction

There are two files that contains all stories and comments posted at [Hacker News][1] from its start in 2006 to May 29, 2014 (exact dates are below). This was downloaded using simple program available I wrote  [Hacker News Downloader][2] by making REST API calls to [HN's official APIs][3]. The program used API parameters to paginate through created date of items to retrieve all posts and comments. The file contains entire sequence of JSON responses exactly as returned by API call in JSON array. 

### HNStoriesAll.json

Contains all the stories posted on HN from `Mon, 09 Oct 2006 18:21:51 GMT` to `Thu, 29 May 2014 08:25:40 GMT`.

### Total count

1,333,789

### File size

1.2GB uncompressed, 115MB compressed

### How was this created

I wrote a small program [Hacker News Downloader][2] to create these files, available at Github.

### Format

Entire file is JSON compliant array. Each element in array is json object that is exactly the response that returned by HN Algolia REST API. The property named \`hits\` contains the actual list of stories. As this file is very large we recommend json parsers that can work on file streams instead of reading entire data in memory.

<pre class="code-block"><code>{
	"hits": [{
		"created_at": "2014-05-31T00:05:54.000Z",
		"title": "Publishers withdraw more than 120 gibberish papers",
		"url": "http://www.nature.com/news/publishers-withdraw-more-than-120-gibberish-papers-1.14763?WT.mc_id=TWT_NatureNews",
		"author": "danso",
		"points": 1,
		"story_text": "",
		"comment_text": null,
		"num_comments": 0,
		"story_id": null,
		"story_title": null,
		"story_url": null,
		"parent_id": null,
		"created_at_i": 1401494754,
		"_tags": ["story",
		"author_danso",
		"story_7824727"],
		"objectID": "7824727",
		"_highlightResult": {
			"title": {
				"value": "Publishers withdraw more than 120 gibberish papers",
				"matchLevel": "none",
				"matchedWords": []
			},
			"url": {
				"value": "http://www.nature.com/news/publishers-withdraw-more-than-120-gibberish-papers-1.14763?WT.mc_id=TWT_NatureNews",
				"matchLevel": "none",
				"matchedWords": []
			},
			"author": {
				"value": "danso",
				"matchLevel": "none",
				"matchedWords": []
			},
			"story_text": {
				"value": "",
				"matchLevel": "none",
				"matchedWords": []
			}
		}
	}],
	"nbHits": 636094,
	"page": 0,
	"nbPages": 1000,
	"hitsPerPage": 1,
	"processingTimeMS": 5,
	"query": "",
	"params": "advancedSyntax=true\u0026analytics=false\u0026hitsPerPage=1\u0026tags=story"
}
</code></pre>

### HNCommentsAll.json

Contains all the comments posted on HN from `Mon, 09 Oct 2006 19:51:01 GMT` to `Fri, 30 May 2014 08:19:34 GMT`.

### Total count

5,845,908

### File size

9.5GB uncompressed, 862MB compressed

### How was this created

I wrote a small program [Hacker News Downloader][2] to create these files, available at Github.

### Format

Entire file is JSON compliant array. Each element in array is json object that is exactly the response that returned by HN Algolia REST API. The property named \`hits\` contains the actual list of stories. As this file is very large we recommend json parsers that can work on file streams instead of reading entire data in memory.

<pre class="code-block"><code>
{
	"hits": [{
		"created_at": "2014-05-31T00:22:01.000Z",
		"title": null,
		"url": null,
		"author": "rikacomet",
		"points": 1,
		"story_text": null,
		"comment_text": "Isn\u0026#x27;t the word dyes the right one to use here? Instead of dies?",
		"num_comments": null,
		"story_id": null,
		"story_title": null,
		"story_url": null,
		"parent_id": 7821954,
		"created_at_i": 1401495721,
		"_tags": ["comment",
		"author_rikacomet",
		"story_7824763"],
		"objectID": "7824763",
		"_highlightResult": {
			"author": {
				"value": "rikacomet",
				"matchLevel": "none",
				"matchedWords": []
			},
			"comment_text": {
				"value": "Isn\u0026#x27;t the word dyes the right one to use here? Instead of dies?",
				"matchLevel": "none",
				"matchedWords": []
			}
		}
	}],
	"nbHits": 1371364,
	"page": 0,
	"nbPages": 1000,
	"hitsPerPage": 1,
	"processingTimeMS": 8,
	"query": "",
	"params": "advancedSyntax=true\u0026analytics=false\u0026hitsPerPage=1\u0026tags=comment"
}
</code></pre>

### Where to download

As GitHub restricts each file to be only 100MB and also has policies against data ware housing, these files are currently hosted at FileDropper.com. Unfortunately FileDropper currently shows ads with misleading download link so be careful on what link you click. Below is the screenshot FileDropper shows and currently the button marked in red would download the actual file.

[<img src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/FileDropperDownloadScreen.png" alt="FileDropperDownloadScreen" width="500" class="alignnone size-full wp-image-1434" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/FileDropperDownloadScreen.png 905w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/FileDropperDownloadScreen-300x293.png 300w" sizes="(max-width: 905px) 100vw, 905px" />][4] 

#### HN Stories Download URL

Using Browser: <http://www.filedropper.com/hnstoriesall>
  

  
<small>Using Torrent Client: <a href="magnet:?xt=urn:btih:00bfc9143ecdc8d3c27a170c2d1474e05ccdbc59&dn=HNStoriesAll.7z&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce">magnet link</a> (thanks to <a href="https://github.com/saturation">@saturation</a>)</small>
  

  
<small>Archived at: <a href="https://archive.org/details/HackerNewsStoriesAndCommentsDump">Internet Archive</a> (thanks to <a href="https://news.ycombinator.com/user?id=bertrandom">Bertrand Fan</a>)</small> 

#### HN Comments Download URL

Using Browser: <http://www.filedropper.com/hncommentsall>
  

  
<small>Using Torrent Client: <a href="magnet:?xt=urn:btih:21abd27bfe4c01264eb0548543606140ee48d19b&dn=HNCommentsAll.7z&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce">magnet link</a> (thanks to <a href="https://github.com/saturation">@saturation</a>)</small>
  

  
<small>Archived at: <a href="https://archive.org/details/HackerNewsStoriesAndCommentsDump">Internet Archive</a> (thanks to <a href="https://news.ycombinator.com/user?id=bertrandom">Bertrand Fan</a>)</small> 

### Few points of interests

  * API rate limit is 10,000 requests per hour or you get blacklisted. I tried to be even more conservative by putting 4 sec of sleep between calls.
  * I like to keep entire response from the call as-is. So return value of this function is used to stream a serialized array of JSON response objects to a file.
  * As the output files are giant JSON files, you will need a JSON parser that can use streams. I used [JSON.NET][5] which worked out pretty well. You can find the sample code in [my Github repo][2].
  * In total 1.3M stories and 5.8M comments were downloaded and each took about ~10 hours.
  * It's amazing to see all of HN stories and comments so far fits in to under just 1GB compressed!

### Issues and Suggestions

Please let me know any issues and suggestions in comments. You can also file issue at ["shell" Github repo][6] I'd created for this data.

 [1]: https://news.ycombinator.com/
 [2]: https://github.com/sytelus/HackerNewsDownloader
 [3]: https://hn.algolia.com/api
 [4]: http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/FileDropperDownloadScreen.png
 [5]: http://james.newtonking.com/json
 [6]: https://github.com/sytelus/HackerNewsData