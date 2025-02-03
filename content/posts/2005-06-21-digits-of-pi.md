---
title: Digits Of Pi
author: Shital Shah
type: post
draft: true
private: true
date: 2005-06-21T20:20:14+00:00
url: /p/digits-of-pi/
dsq_thread_id:
  - 2659222482
categories:
  - Mathematics

---
A famous quote from John Von Neumann goes like this,

> Anyone who considers arithmetical methods of producing random digits is, of course, in a state of sin.

This is something I've intuitively believed since I was 15 and even hadn't heard of Neumann. Pure random numbers is (or probably more) as fascinating concept as <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_7ed9abff4dafd78d08e616c899412e92.gif' style='vertical-align: middle; border: none; padding-bottom:2px;' class='tex' alt="\infty" /></span> or <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_865c0c0b4ab0e063e5caa3387c1a8741.gif' style='vertical-align: middle; border: none; padding-bottom:1px;' class='tex' alt="i" /></span>. It is impossible to generate sequence of purely random numbers without tapping in to nature. That means I could never write a computer code that generates a sequence of random numbers without showing up absolutely any patterns in a long run. There are only better random generators, never a perfect one, except thy nature itself.

So when I saw an [article][1] that digits of Pi are so far empirically proven to be randomly distributed, I was shocked. Infect [huge progress][2] has been made to prove that digits of Pi are indeed randomly distributed. Now the fact is, p can indeed be calculated algebraically (i.e. without tapping in to any natural phenomenon) and the idea that this can produce a pure random distribution just gives me a feeling as if sky is falling. I'd been hypothesizing since long time that the ability to generate infinite sequence of pure random numbers is the most significant (and probably the only) property to identify the existence of _real universe,_ if it at all exist, that is ;). Consider this question: How do you know, at this precise moment, that you aren't part of some simulation running on some huge alien computer, or that you aren't some character in StarTrek holosuit or that you aren't dreaming with all these things around you (however "real" they may feel) aren't really "real"? Ok, it's hard to explain what I'm asking you but in nutshell, I'm trying to find out from pure mathematical perspective if there is anything in the nature that I can't masquerade, a property of the physical world around us that is impossible to simulate by any artificial means however sophisticated.

My hypothesis is that this property of the real world is an ability to generate infinite sequence of pure random numbers. That means, if you really want to find out whether you are some simulation running in a giant alien computer, all you have to do is to observe some natural phenomenon over a time with precision P and verify that your readings demonstrate pure randomness over the period of time T, where the P and T depends on sophistication of that alien simulation. The P and T can be very large but can never be infinity, except unless you are in the _real_ world, of course. This is the mathematician's version of "I exist because I think".

So now you know why randomness of digits of pi made my stomach cringe. When I think about it, I'm starting to feel that any [transcendental number][3] obtained through convergence of infinite series (lets call them algebric transcendentals or ATs) must indeed have its digits distributed randomly. If you remember Cantor, there are more transcendental numbers than any other kind. But what this really means is I'm able to generate sequence of _pure_ random numbers only using algebric means. It's as simple as finding new AT and emitting its digits. If you were someone who had given lot of thoughts to the nature of random numbers for years, this would sound both frightening and exciting to you. But hold on, could this really be true? After giving this some thought I believe it couldn't possibly be. I've finally constructed the following conjecture:

> From a finite sequence of minimum length _L_ of digits of any AT, there exist a Turing machine program <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_ea71ebbff62198aa6264a9da7b39d1f5.gif' style='vertical-align: middle; border: none; ' class='tex' alt="G(L)" /></span> to calculate the next digit in that sequence in finite steps. In other words, for any AT there always exist a number _L_ which is finite and for which <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_ea71ebbff62198aa6264a9da7b39d1f5.gif' style='vertical-align: middle; border: none; ' class='tex' alt="G(L)" /></span> is a [computable function][4].

In simple language, if you just give me sequence of AT's digits I should be able to _predict_ the next digits provided you gave me enough of them to start with. This simply means if the alien computer was trieng to fool you by feeding you digits of some AT as a stream of random numbers, you can just sit back, collect these digits for a while and when you get handful of those, you can run through your algorithm to predict the next digits and find out you are not really in a real world (and also the fact that aliens didn't knew about Shital's AT Conjecture)! So random distribution is not the one and only property to identify a sequence of pure random numbers. The sequence of pure random numbers would not satisfy this conjecture (i.e. _L_ would be 8). Infect this should be outright obvious: For sequence of natural numbers <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_95367d3bc0a72098fbf5e8eb9ee62b23.gif' style='vertical-align: middle; border: none; ' class='tex' alt="0, 1, 2, \ldots" /></span> we have all digits equally distributed but this sequence isn't by any means random.

This also gets us on to something else: the _L_ now becomes a valuable property of an AT. A random number with infinite digits can be considered as a special class of AT with <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_be99be7086bdc9d1844b5d182145e847.gif' style='vertical-align: middle; border: none; padding-bottom:1px;' class='tex' alt="L\approx" /></span>\infty<span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_d41d8cd98f00b204e9800998ecf8427e.gif' style='vertical-align: middle; border: none; ' class='tex' alt="" /></span>. Let's call set of all such number _?_ (greek capital letter Rho) then the cardinality of <span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_d2606be4e0cd2c9a6179c8f2e3547a85.gif' style='vertical-align: middle; border: none; padding-bottom:2px;' class='tex' alt="\rho" /></span> should be _[<span class='MathJax_Preview'><img src='http://shitalshah.com/ShitalShahWP/wp-content/plugins/latex/cache/tex_1ec91515d3d64d3f7811f9d115134b0c.gif' style='vertical-align: middle; border: none; padding-bottom:1px;' class='tex' alt="\aleph" /></span>][5]_.

If all of this went over your head, here is fun part: [Here][6] you can look it up if your phone number has showed up in digits of pi calculated so far or [even your name][7] expressed as hex codes! For example, I can be found in pi at 67357954<sup>th</sup> digit ;).

 [1]: http://www.sciencenews.org/articles/20010901/bob9.asp
 [2]: http://www.nersc.gov/%7Edhbailey/dhbpapers/bcrandom.pdf
 [3]: http://mathworld.wolfram.com/TranscendentalNumber.html
 [4]: http://mathworld.wolfram.com/ComputableFunction.html
 [5]: http://mathworld.wolfram.com/Aleph-1.html
 [6]: http://www.angio.net/pi/piquery
 [7]: http://pi.nersc.gov/