---
title: Virtual By Default
author: Shital Shah
type: post
draft: true
private: true
date: 2004-11-15T20:33:19+00:00
draft: true
private: true
url: /p/virtual-by-default/
categories:
  - Software

---
Omar [blogs about an age-old debate][1] on whether class members should be [virtual-by-default or final-by-default][2]. Here's my take:

After my years of messing around with .Net class libraries, I would prefer virtual-by-default any day. Basically, when people designs their classes they really don't want to spend much time on analyzing how _someone else_ would be overriding a particular method - unless they are really sure that lot of people really wants to do that. And so it makes a logical sense to be pessimistic for a language designer and assume that something bad indeed will happen and disable overriding by default. The bad part of this pessimistic assumption is that it doesn't go well with the real world statistics while its still logically pure and solid. In real world, you will find yourself in need so often to override a particular method, even if its "at your own risk", and hack your way through to satisfy the requirements that original authors didn't spend time thinking about. Usually most people will test their such "hacks" and know that they might be shooting a bullet in their foot. But an ideal language should allow them to do so with warnings - just like unsafe keyword - rather then making it impossible. You had done that rather then relying on original authors (such Microsoft) to come out with new functionality after half a decade or wrapping entire interface in your custom classes. The problem is that people does wish that their methods be extensible but they don't have time to analyse all the side effects and make promises. My solution is that the compiler should just flag the warning that the method you are trying to override was not marked as virtual by default and may cause side effects (instead of current behavior of shadowing them). It should make all methods virtual unless specified otherwise and store additional metadata info that the method is virtual but wasn't marked explicitly so. Forcing virtual or final keywords explicitly does not solve the problem because most people will choose final anyway to be idealistic as they still haven't got time to analyze the side effects but those could have been statistically be mitigated by the authors who are willing to spend time in testing after they override.

As far as the performance goes, I believe, authors of base class would much rather willing to spend time in finding hot-spot public methods and mark them as final rather then running complete analysis to decide if each of their methods could be virtual. So vote again goes for virtual-by-default.

 [1]: http://weblogs.asp.net/okloeten/archive/2004/11/15/257678.aspx
 [2]: http://artima.com/intv/nonvirtual.html