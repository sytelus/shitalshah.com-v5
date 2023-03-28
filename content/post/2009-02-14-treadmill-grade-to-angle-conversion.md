---
title: Treadmill Grade to Angle Conversion
author: Shital Shah
type: post
date: 2009-02-14T08:02:00+00:00
url: /p/treadmill-grade-to-angle-conversion/
blogger_blog:
  - astrila.blogspot.com
blogger_author:
  - Shital Shah
blogger_permalink:
  - /2009/02/treadmill-grade-to-angle-conversion.html
dsq_thread_id:
  - 3737209850
categories:
  - Physics

---
Gym machines like treadmills and even some roads express the slop as "grade" in percentage. For example, most gym treadmills allow up to 15% grade. I've left going to gym since last few months and instead I'm doing this Snoqualmie Falls hike almost every other day (which is 0.5 miles one way and 300ft elevation). But occasionally I have to go to gym because of early sunsets. I usually put max grade (15%) and speed walk for one mile burning 350 cal. So naturally the question is how many feet I climbed?

For this I need to convert grade in % to angle. But what is "grade%"? Turns out it's ration of rise/run or in other words,

{{< math >}}
$$
grade=\frac{tan(\theta)}{100}
$$
{{< /math >}}

So your vertical climb in feet is given by,

{{< math >}}
$$
\sin(\tan^{-1}(grade*100))*5280 miles
$$
{{< /math >}}

So by that calculation, at maximum grade on gym treadmill I climb 783.2 feet for each mile I walk. Not too bad.

&nbsp;

_Via conversation [here][1]._

 [1]: http://forum.onlineconversion.com/showthread.php?t=7377