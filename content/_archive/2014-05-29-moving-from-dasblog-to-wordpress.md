---
title: Moving from dasBlog to WordPress
author: Shital Shah
type: post
draft: true
date: 2014-05-29T04:14:24+00:00
url: /p/moving-from-dasblog-to-wordpress/
dsq_thread_id:
  - 2720297175
tags:
  - Geekery

---
I've [written earlier][1] why I decided to move my site to WordPress instead choosing Jekyll or keep updating my custom code. In this post I'll go in to some details on how I moved to WordPress with the hope that others might have easier time.

Previously I'd decided to use [dasBlog][2] because it was fairly minimal and hackable. In the end I modified dasBlog in such a way that it would be hard to tell for normal users where my own code ended and dasBlog started. As it happens with so many open source projects, people moved on and now this project isn't even updated since 2012. So please move on!

#### Installing WordPress

As I still have some legacy ASP.Net code so I decided to host WordPress on IIS. Fortunately famous 5-minute installation claims does holds on Windows as well. You just install it through [Microsoft Web Platform Installer][3] (WebPI)� and off you go, well, except few things.

  1. It's best to� install and test everything on your� local machine first and then move it to web host. By default WebPI uses WebMatrix server but you might want to use full IIS with all its goodies for experimentation. There are plenty of instructions on [installing IIS on Windows][4].
  2. Search for WordPress in WebPI and choose WordPress product that has WordPress logo, avoid variants such as Brandoo. In WebPI, make sure you click on options:
    <img class="alignnone wp-image-1407" src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/WebPIOptionsButton.png" alt="WebPIOptionsButton" width="500" height="292" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/WebPIOptionsButton.png 896w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/WebPIOptionsButton-300x175.png 300w" sizes="(max-width: 500px) 100vw, 500px" />

    On the options screen you should select these options:<img class="alignnone wp-image-1406" src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/WebPIOptionsScreen.png" alt="WebPIOptionsScreen" width="500" height="343" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/WebPIOptionsScreen.png 875w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/WebPIOptionsScreen-300x205.png 300w" sizes="(max-width: 500px) 100vw, 500px" /></p> </li>

      * When WordPress installation dialog comes up select New Web Site instead of using default (its a good practice!) and specify some local folder� for all WordPress files. [<img src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/WebPIWordPressOptions.png" alt="WebPIWordPressOptions" width="500" class="alignnone size-full wp-image-1409" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/WebPIWordPressOptions.png 875w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/WebPIWordPressOptions-300x205.png 300w" sizes="(max-width: 875px) 100vw, 875px" />][5]
      * Start IIS, stop Default site and start wordpress site. Navigate to localhost, fill in username, password and you should be able to log on to brand new WordPress website!
      * I would highly recommend that you move WordPress installation to a subfolder instead of keeping it in the root. This has several advantages. First,� you keep WordPress files separate so during updates there are no worries for overwriting your own stuff in root. Second, in root folder your can host your own code or override WordPress behavior using URL redirects. Finally, this arrangement allows you to host other Web applications and sub-sites in to its own folders sitting next to WordPress. The [instructions are very easy][6] and your external WordPress URLs don't change by doing this.
      * There are few essential settings you want to no set: Timezone in Settings > General and url formats in Settings > Permalinks. For permalinks I used the Custom� Structure with value <pre class="code-inline"><code>/p/%postname%/</code></pre>

        .</li> </ol>

        #### Exporting from dasBlog

        The easiest way to migrate posts and comments from dasBlog is using [DasBlogML tool][7]. Unfortunately it seem to have gotten lost from Web altogether after MSDN folks decided to reorganize few things. I've put the� copy I used on [GitHub][8] and for me the process went smoothly without errors. If you do encounter some issues [there][9] - [are][10] - [few][11] - [posts][12] out there for help.

        #### Importing to WordPress

        While WordPress doesn't have any built-in way to import BlogML content, there is a plugin [BlogML Importer][13]. Again, this plugin hasn't been maintained and is broken with current version of WordPress. So I [forked it on GitHub and updated it with the fix][14]. You just need to install original plugin and overwrite files I've on repository. Also look at [this article][15] for tips.

        #### Cleaning Up the Markup

        Over the period I'd use quite a few tools to post to my blogs and some of these produced a really messed up HTML. So one thing I needed was to clean up the markup in my posts. The Tidy2 plugin that can be downloaded from within [Notepad++][16] is a godsend for this purpose. However you might need to invest significant time in configuring it. I've put the [Tidy2 config][17] that I tweaked for hours at Github. This config is fairly robust and does good job at cleaning bad markup in HTML fragments, even those awful MS Word extensions.

        #### Managing Redirects for the Old Links

        One of the things I care about a lot is making sure that links on my website remains valid during the moves. I've practically obsessed over this even if this website is not popular and there are hardly any old links out there pointing back here. But still, I have [301 redirects][18] from all the way back from year 2000 so even those links remains valid today after 3 major technology stack changes. With [IIS Rewrite Maps][19] things have become much more easier. Here's what I did: Create a file that looks like below with list of URLs for individual posts dumped from the DasBlogML tool plus others you add manually. For categories you should have one URL for each category in dasBlog.

        <pre class="code-block"><code> &lt;rewriteMaps&gt;
	&lt;rewriteMap name="ShitalShahV3Redirects"&gt;
		&lt;!-- redirects for the pages --&gt;
		&lt;add key="/aboutme.asp" value="/about/author/"/&gt;
		&lt;add key="/aboutme.aspx" value="/about/author/"/&gt;
		&lt;!-- etc --&gt;

		&lt;!-- 401s detected from Google Webmaster tools --&gt;
		&lt;add key="/?s=CategoryView.aspx" value="/p/category/" /&gt;
		&lt;add key="/blog/CategoryView.aspx" value="/p/category/" /&gt;
		&lt;add key="/?s=content/AllComments.xml" value="/comments/feed/" /&gt;
		&lt;add key="/?s=CommentView.aspx" value="/comments/feed/" /&gt;
		&lt;add key="/blog/content/AllComments.xml" value="/comments/feed/" /&gt;

		&lt;!-- redirects for the feeds --&gt;
		&lt;add key="/blog/SyndicationService.asmx/GetRss" value="/feed/"/&gt;
		&lt;add key="/blog/SyndicationService.asmx/GetAtom" value="/feed/atom/"/&gt;

		&lt;!-- Redirects for categories --&gt;
		&lt;add key="/blog/CategoryView.aspx?category=AI" value="/p/category/machine-learning/" /&gt;
		&lt;add key="/blog/CategoryView.aspx?category=Announcement" value="/p/category/personal-news/" /&gt;
		&lt;!-- etc --&gt;
	&lt;/rewriteMap&gt;
&lt;/rewriteMaps&gt;
</code></pre>

        Now you can put reference above map in your web.config. Below example also takes care of other URL patterns that dasBlog had. This however does not take care of guid based URLs that dasBlog had as permalinks. Unfortunately its just too much effort to mine theme and map them to new WordPress URLs. I used Google Webmaster Tools to find external guid links that were getting 404s. For me there were only couple so it was a quick fix.

        <pre class="code-block"><code>&lt;system.webServer&gt;
	&lt;rewrite&gt;
		&lt;!--Include the map --&gt;
		&lt;rewriteMaps configSource="ShitalShahV3Redirects.config" /&gt;
		&lt;rules&gt;
			&lt;!-- If we find match in the map then just that --&gt;
			&lt;rule name="dasBlogTitleRedirects" stopProcessing="true"&gt;
				&lt;match url="(.*)" /&gt;
				&lt;conditions&gt;
					&lt;add input="{ShitalShahV3Redirects:{REQUEST_URI}}" pattern="(.+)" /&gt;
				&lt;/conditions&gt;
				&lt;action type="Redirect" url="{C:1}" appendQueryString="false" redirectType="Permanent" /&gt;
			&lt;/rule&gt;

			&lt;!-- Redirects for various URL patterns that dasBlog provided --&gt;
			&lt;!-- date based URLs --&gt;
			&lt;rule name="dasBlogDateRedirect" stopProcessing="true"&gt;
				&lt;match url="^blog(.*)" /&gt;
				&lt;conditions&gt;
					&lt;add input="{QUERY_STRING}" pattern="(?:^|&amp;)date=(\d+)-(\d+)-(\d+)(?:&amp;|$)" /&gt;
				&lt;/conditions&gt;
				&lt;action type="Redirect" url="/p/{C:1}/{C:2}/{C:3}/" appendQueryString="false" redirectType="Permanent" /&gt;
			&lt;/rule&gt;
			&lt;!-- month based URLs --&gt;
			&lt;rule name="dasBlogMonthRedirect" stopProcessing="true"&gt;
				&lt;match url="^blog(.*)" /&gt;
				&lt;conditions&gt;
					&lt;add input="{QUERY_STRING}" pattern="(?:^|&amp;)month=(\d+)-(\d+)(?:&amp;|$)" /&gt;
				&lt;/conditions&gt;
				&lt;action type="Redirect" url="/p/{C:1}/{C:2}/" appendQueryString="false" redirectType="Permanent" /&gt;
			&lt;/rule&gt;
			&lt;!-- year based URLs --&gt;
			&lt;rule name="dasBlogYearRedirect" stopProcessing="true"&gt;
				&lt;match url="^blog(.*)" /&gt;
				&lt;conditions&gt;
					&lt;add input="{QUERY_STRING}" pattern="(?:^|&amp;)year=(\d+)(?:&amp;|$)" /&gt;
				&lt;/conditions&gt;
				&lt;action type="Redirect" url="/p/{C:1}/" appendQueryString="false" redirectType="Permanent" /&gt;
			&lt;/rule&gt;
			&lt;!-- Any other URLs --&gt;
			&lt;rule name="dasBlogRootOtherRedirect" stopProcessing="true"&gt;
				&lt;match url="^blog\/(.+)" /&gt;
				&lt;action type="Redirect" url="/?s={R:1}" appendQueryString="false" redirectType="Permanent" /&gt;
			&lt;/rule&gt;
			&lt;!-- Blog's root --&gt;
			&lt;rule name="dasBlogRootRedirect" stopProcessing="true"&gt;
				&lt;match url="^blog[\/]?" /&gt;
				&lt;action type="Redirect" url="/" appendQueryString="true" redirectType="Permanent" /&gt;
			&lt;/rule&gt;

			&lt;!-- main website old redirects --&gt;
			&lt;rule name="defaultAspxRedirect" stopProcessing="true"&gt;
				&lt;match url="^(default\.asp[x]?)$" /&gt;
				&lt;action type="Redirect" url="/" appendQueryString="true" redirectType="Permanent" /&gt;
			&lt;/rule&gt;

			&lt;rule name="wordpress" patternSyntax="Wildcard"&gt;
				&lt;match url="*" /&gt;
				&lt;conditions&gt;
					&lt;add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" /&gt;
					&lt;add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" /&gt;
				&lt;/conditions&gt;
				&lt;action type="Rewrite" url="index.php" /&gt;
			&lt;/rule&gt;
		&lt;/rules&gt;
	&lt;/rewrite&gt;
&lt;/system.webServer&gt;
</code></pre>

        #### Themes, Plugins, Pages, Commenting and General Organization

        I'll write more detailed post on how to find programmer-friendly themes and essential plugins to make WordPress more hackable in a separate post (the short answer is I'm using [Decode for the theme][20]). However eventually question will come and haunt you if you should use page or post for X where X = photo albums or your projects or articles and so on. I eventually settled on the principle to use post for pretty much everything except for few rare cases such as About and Disclaimer. The primary reason is that posts can be categorized which ultimately appears as navbar on my website. Also I've stopped treating posts as immutable pieces of textual stream that they were decade ago in RSS word. Instead I look at them as evolving articles that gets refreshed as new information becomes available. Just that underlying principle has helped me to clear up my mind about using posts as opposed to pages for most scenarios.

        I decided not to write my own gallery code or use WordPress's built-in option (which I think is pretty bad). The thing is that photo galleries are finally becoming sophisticated enough that just like blog engines they would take a lot of your time to do them really well. That's the time you could have been working on more interesting problems. So I left hosting of photo galleries to [PicasaWeb][21] (with [Flickr][22] - they are offering whooping 1TB for free!). The way this would work is I will simply create a post for new albums that will have description and link to PicasaWeb and/or Flickr.

        Next thing to get rid of is hosting my projects, binaries and code on my website. Github has evolved to be an obvious choice to browse, view and download so there is now little point in creating my own stuff to do the same thing. So again, the strategy is to create a post for each new project that points to my repos on Github.

        Finally I also decided to dump built-in commenting system of WordPress. For an experiment I'd left it turned on for few weeks and I got 150 spam comments. It's huge pain to clean that up and disappointing that even in 2014 WordPress out-of-box comment system is just not usable. There are plugins like Akismet but its not completely free. The next obvious option was Disqus. They have proven that they can scale, they are robust, have great community support and _most importantly_, they allow exporting all your data so you can switch to something else if you want to. Despite of all these positives, I did encountered few unhappy moments. For example, current markup injected by Disqus actually doesn't validate for HTML5. This is super bad for product that is almost viral. I contacted their support which apparently didn't consider that was an alarming issue and asked me to post it in their community forums where all their devs handout. Huh? Why can't their support _just_ forward it to their _own_ devs instead of me having to find them in their public forums?

        #### Where Do You Host This Thing?

        I'd WebHost4Life as my hosting provider for very long time. However recently they have been going downhill. Their control panel is ancient and a mess of Frankenstein apps. They haven't yet gotten around to supporting latest versions of .Net, IIS and so on. Just doing FTP on their servers gave me nightmares by frequent errors and disconnections. Plus their prices are no longer competitive. So I took this opportunity to check out all the cloud providers. It turns out that none of the popular providers (Amazon, Rackspace, Azure) has a viable option for low traffic website like this one at a price that is comparable to something like WebHost4Life (while Azure has option for free website, they don't allow custom domains). Even after recent price cuts from Google, Azure and Amazon hosting website like this can easily cost $30 per month and that's with severe limitations on bandwidth, storage and compute. So I reverted back to finding regular web hosts and zeroed in to [SmarterAsp.net][23] folks. These guys are just great. They really have very modern control panel, nice support, easy to manage emails, multiple websites, databases, FTP and so on. Plus their advertised storage and bandwidth is unlimited which had been my primary criteria even though it really doesn't mean that in practice. I just don't want my users to see errors "This website has exceeded its bandwidth quota" ever.

        #### Deploying to Production

        Finally its time to move your localhost WordPress installation to actual web host. How do you do it? It turns out that there is no built-in easy way. Sure, you can export your content as archive and import somewhere else but what about all the themes and plugins and customizations you had been doing all along? Fortunately there is [fantastic WordPress plugin called Duplicator][24] that worked like a charm in my case. It moved everything without a hitch to my actual server.

 [1]: /p/welcome-to-shitalshah-com-v4/
 [2]: http://dasblog.codeplex.com
 [3]: http://www.microsoft.com/web/downloads/platform.aspx
 [4]: http://www.peterviola.com/installing-iis-8-on-windows-8/
 [5]: http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/05/WebPIWordPressOptions.png
 [6]: http://codex.wordpress.org/Giving_WordPress_Its_Own_Directory
 [7]: http://merill.net/2008/03/dasblog-to-blogml-converter/
 [8]: https://github.com/sytelus/DasBlogML
 [9]: http://www.schrankmonster.de/2009/09/22/dasblog-to-wordpress-migration/
 [10]: http://nixmash.com/on-wordpress/net-to-wordpress-migrating-blogengine-net/
 [11]: http://bobcravens.com/2010/11/hello-wordpress-good-bye-dasblog/
 [12]: http://www.little.org/blog/tips-tricks/migrating-from-dasblog-to-wordpress/
 [13]: http://wordpress.org/plugins/blogml-importer/
 [14]: https://github.com/sytelus/blogml-wordpress-import
 [15]: http://casadevega.com/index.php/2010/02/01/importing-blogml-to-wordpress/
 [16]: http://notepad-plus-plus.org/
 [17]: https://github.com/sytelus/MiscDevFiles/blob/master/source/devutils/tidy1.cfg
 [18]: http://en.wikipedia.org/wiki/301_redirect
 [19]: http://www.iis.net/learn/extensions/url-rewrite-module/using-rewrite-maps-in-url-rewrite-module
 [20]: http://wordpress.org/themes/decode
 [21]: https://plus.google.com/photos/+ShitalShahdotcom
 [22]: https://www.flickr.com/photos/sytelus/sets
 [23]: http://www.smarterasp.net/
 [24]: http://wordpress.org/plugins/duplicator/