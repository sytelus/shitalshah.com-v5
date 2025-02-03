---
title: Analyzing Post Times of Hacker News Data
author: Shital Shah
type: post
date: 1970-01-01T00:00:00+00:00
draft: true
url: /?p=1452
tags:
  - Uncategorized

---
I ran this experiment quite unintentionally on HN: Post a story on Friday evening and then post exact same story again on Monday afternoon with a slight change in URL (all timezones are in PST) . What would be your guess on difference on points in these two scenarios? Well, guess again. The post from Friday evening got 3 upvotes and the post on Monday got whooping 123 upvotes! Why 41X difference for exact same content?

My guess is that we have this surprise because� of two things: First, most HN users are in PST timezone and have predictable rhythm of sleep, work and procrastinate. Second, the [ranking algorithm for HN][1] penalizes stories by almost a square of its age. When lot of users are online, there are lots of votes to go around. So stories can accumulate points fast enough to fight of aging. When people start to go home, there is simply not much attention available for new stories so they quickly fall off the radar even if they would have been equally or more interesting.

Now that we have [entire corpus of HN stories and comments][2] available, I decided to do some quick analysis. The questions I wanted to answer were:

  1. What really is the best time to post stories?
  2. What is the daily rhythm look like for an average HN user?
  3. What time of the day most users are hanging out on HN?
  4. How are the posts and unique users growing on HN?

With a little bit of C# and IPython, these are surprisingly easy to answer questions.

One thing we should make clear: The goal here is to figure out how much exposure a story will get if it was posted on time X VS Y given that it was a great story.� If you haven't got good story or spam then it will fall off to tail no matter what time you choose to post.

My initial guess was that the hour of the week with the highest average points per story would indicate the best time to post. This is how trend of average points� by weekday looks like (day 0 is Sunday).

[<img class="size-full wp-image-1453 alignnone" src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/StoryAveragesByWeekday.png" alt="StoryAveragesByWeekday" width="607" height="423" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/StoryAveragesByWeekday.png 607w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/StoryAveragesByWeekday-300x209.png 300w" sizes="(max-width: 607px) 100vw, 607px" />][3]

So according to this theory, Saturday and Sunday would be the best times. Could that be right? � Let's check total� of all points granted on each weekday.

<a ref="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/TotalsOnWeekday.png"><img class="alignnone size-full wp-image-1455" src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/TotalsOnWeekday.png" alt="TotalsOnWeekday" width="632" height="423" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/TotalsOnWeekday.png 632w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/TotalsOnWeekday-300x200.png 300w" sizes="(max-width: 632px) 100vw, 632px" /></a>

Obviously weekends have much lower points available to go around. Now, let's see how many stories get posted during each weekday:

[<img class="alignnone size-full wp-image-1456" src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/StoriesOnWeekday.png" alt="StoriesOnWeekday" width="570" height="423" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/StoriesOnWeekday.png 570w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/StoriesOnWeekday-300x222.png 300w" sizes="(max-width: 570px) 100vw, 570px" />][4]

Now this is more insightful. Our mean is higher on weekend because there are� lot less stories getting posted but there are _also_ a lot less points available to go around. If your goal is to maximize the number of points your story gets, mean isn't a good metric here. How about� mean of top N stories instead? For instance, if 100 top stories on day X gets total of 2000 points but 100 top stories on day Y gets only 1000 then we have some signal that day X is better than day Y assuming quality of top stories is more or less remains same. Here's how this looks like:

[<img class="alignnone size-full wp-image-1457" src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/Top100AverageOnWeekday.png" alt="Top100AverageOnWeekday" width="605" height="423" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/Top100AverageOnWeekday.png 605w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/Top100AverageOnWeekday-300x209.png 300w" sizes="(max-width: 605px) 100vw, 605px" />][5] �

Now we are getting somewhere. Look at the sharp decline in points that even top stories get on weekend. If you have a really good story to get, it appears that Wednesday and Thursday might be the best days. Tuesday seems to be anomaly here but we'll get to that later.� First we� should see how trend for� number of unique users looks like during the week. Unfortunately there is no data available for this as far as I know but we can get some nice approximation by calculating number of unique users who have been commenting each hour. Below is the graph of unique commenting users per hour during the week:

[<img class="alignnone size-full wp-image-1458" src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnWeekday.png" alt="UniqueUsersOnWeekday" width="558" height="423" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnWeekday.png 558w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnWeekday-300x227.png 300w" sizes="(max-width: 558px) 100vw, 558px" />][6]

Look at that peak on Tuesday again. My guess for the reason for a dip on Tuesday in previous chart is because we have highest number of users on Tuesday and even higher� number of posted stories on Tuesday. In other words, Tuesday is the day of maximum competition� among stories. This leaves out Wednesday as our next best option. Now let's zoom out Top N stories chart just for Wednesday and plot it against the hour of the day:

[<img class="alignnone size-full wp-image-1459" src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/Top100AverageOnWednesday.png" alt="Top100AverageOnWednesday" width="570" height="423" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/Top100AverageOnWednesday.png 570w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/Top100AverageOnWednesday-300x222.png 300w" sizes="(max-width: 570px) 100vw, 570px" />][7]

We seem to have a clear winner between 9 AM and 10 AM. How does this correlate with unique users trend during the entire day?

[<img class="alignnone size-full wp-image-1460" src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnWednesday.png" alt="UniqueUsersOnWednesday" width="566" height="423" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnWednesday.png 566w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnWednesday-300x224.png 300w" sizes="(max-width: 566px) 100vw, 566px" />][8]

Wow, what a chart! It almost tells a story about how we live. The unique users maximizes at 10 AM point pretty much coinciding with general start in the office time. Then look at slight flattening out exactly at 12:30 PM coinciding with general lunch time spanning for about an hour. Then there is just barely visible sharper decline at about 5 PM when people starts leaving the offices. Another sharp decline is at during TV prime time 8:30 to 10 PM. Then we all go to sleep with turn around coming at about 3 AM when there are more people waking up then going to sleep. Overall, HN users do have 9 to 5 life style with typical lunch breaks and even possible TV prime time. Above� chart is so interesting that we ought to see how this looks like on other weekdays:

[<img class="alignnone size-full wp-image-1461" src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnDifferentWeekDays.png" alt="UniqueUsersOnDifferentWeekDays" width="698" height="423" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnDifferentWeekDays.png 698w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnDifferentWeekDays-300x181.png 300w" sizes="(max-width: 698px) 100vw, 698px" />][9]

Very cool! We see that 10 AM peak is retained pretty much all days except that Sundays are about an hour slow. Notice that Mondays are fairly busy with reduced� participation on HN but on Friday people it gets even worse as people starts flying off for weekend! On Weekends, participation plummets almost halfway through but interestingly it is much more stable through rest of the day than during the weekdays. So the bottom line seems to be 9-10 AM on Wednesdays are absolutely the best time to post on HN. Before we leave this entry, let's take a very quick look at how the number of stories and unique users are growing on HN:

[<img class="alignnone size-full wp-image-1465" src="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/PostsUsersOverTime1.png" alt="PostsUsersOverTime1" width="606" height="423" srcset="http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/PostsUsersOverTime1.png 606w, http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/PostsUsersOverTime1-300x209.png 300w" sizes="(max-width: 606px) 100vw, 606px" />][10]

Interestingly, number of stories being posted has been in some decline during past two years. My guess is that previous peaks were because of spam and now there is probably some decrease in spam. The number of users is growing linearly with time which is surprising to me because I always through this would be more exponential as word gets around and virality comes in to effect. May be hackers and geeks just aren't huge in numbers yet...

References:

  1. HN Stats http://labs.im/hnstat/
  2. Why HN Should Use Randomized Algorithms http://danluu.com/randomize-hn/
  3. The Best Time to Post on Hacker News http://silverman.svbtle.com/the-best-time-to-post-on-hacker-news
  4. Whats the best time to post to HackerNews http://blog.itlater.com/whats-the-best-time-to-post-to-hackernews/
  5. Best time to post on HN & other time-effects in the HN community http://blog.wybowiersma.net/2011/05/09/the-best-time-to-post-on-hn-and-other-time-effects.html
  6. HN Notify: Find out when to post on hacker news http://hnnotify.leknarf.net/

 [1]: https://news.ycombinator.com/item?id=1781417
 [2]: http://shitalshah.com/p/downloading-all-of-hacker-news-posts-and-comments/
 [3]: http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/StoryAveragesByWeekday.png
 [4]: http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/StoriesOnWeekday.png
 [5]: http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/Top100AverageOnWeekday.png
 [6]: http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnWeekday.png
 [7]: http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/Top100AverageOnWednesday.png
 [8]: http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnWednesday.png
 [9]: http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/UniqueUsersOnDifferentWeekDays.png
 [10]: http://shitalshah.com/ShitalShahWP/wp-content/uploads/2014/07/PostsUsersOverTime1.png