---
title: Tomato Firmware for Router and Comcast Cable Modem
author: Shital Shah
type: post
draft: true
private: true
date: 2009-12-17T07:41:00+00:00
url: /p/tomato-firmware-for-router-and-comcast-cable-modem/
blogger_blog:
  - astrila.blogspot.com
blogger_author:
  - Shital Shah
blogger_permalink:
  - /2009/12/tomato-firmware-for-router-and-comcast.html
dsq_thread_id:
  - 3571789661
categories:
  - Geekery

---
Just a note… if you have Tomato installed as firmware in the router and Comcast cable internet then try followings:

  1. Disconnect cable modem and router and wait until their lights go off. For Comcast modem it takes fair bit of time because of internal battery.
  2. If Internet connection is still lost then connect your computer directly to cable modem. If this doesn’t work then you need to call Comcast at 1-800-COMCAST.
  3. If above works then the problem is that your router isn’t syncing with cable model. To confirm this, log in to router login page usual [http://192.168.(0][1] or 1).1. See the status in overview. If this status is "Renewing…" and never changes then disconnect cable co-axial wire going to model. Turn off cable model. After all LEDs goes off turn it back on. Reconnect cable co-ax to it.

 [1]: http://192.168.(0/