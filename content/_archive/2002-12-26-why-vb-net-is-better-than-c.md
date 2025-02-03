---
title: 'Why VB.Net Is Better Than C#'
author: Shital Shah
type: post
date: 2002-12-26T22:31:17+00:00
draft: true
private: true
url: /p/why-vb-net-is-better-than-c/
dsq_thread_id:
  - 2705609217
tags:
  - Software

---
Seven years ago, a candidate appearing for his first job interview right after school was put up with cold stare and a question: "So, what you know in C?". The candidate kept his reply short with similar cold stare: "everything". While candidate got the job very next day, the reply was unusual for interviewers because C was notorious for being deceptively complex language and it was believed that only few knew it's real innards. So for decades, for most hard-core programmers, it had been a passion to meet every challenge and master it's every intricacy. And still many of them knew it was becoming increasingly impractical to use it and compete against new RAD stuff like Delphi and VB. Even if we'd adapt to (some call it give in to") RAD which had much weaker languages, we always kept our secret hidden love for C++ in our heart and hoped that our darling would be reincarnated one day to be back with us again. When I saw C# spec in .Net beta I was thrilled. The re-incarnation was finally happened. The C# is probably the best programming language yet that is modern, sophisticated, sexy and yes, has true RAD vision behind it. For more than a year, I'd aggressively fought to choose C# in anything I was doing until I started comparing it with VB.Net from good 'ol productivity point of view. And this is really bad... VB which I thought will be dead in coming years, seems to be winning again. I'm still reluctant to give final verdict and you are invited to pour in your opinions. While [the entire book][1] is already devoted on this subject, here's one of the most complete list of reasoning I've compiled from several sources and my observations on VB.net and C# pros and cons:

  * Direct copy paste of large amount of existing VB6 code in to your .Net projects. I did this so many times until I realized what if I'd been writing code in C#?
  * Option Strict can be turned on or off at will in VB.Net. With C# it's not in _your_ control. This is really helpful to reduce unreadable ugly type casting when using COM interops
  * You can use either traditional On..Error or Try-Catch. With C# you only have later choice
  * With VB.Net you can have "modules" which is little cleaner then static classes.
  * Easier way to resize arrays in VB.Net and other functions like IsDbNull and exponentiation
  * More granular way to shadow methods in derived classes
  * No automatic indentation and removal of extra spaces. This slows you down plus your code looks little ugly.
  * No automatic statement completion (for example VB.Net IDE automatically completes constructs like If-Then-Else)
  * No automatic casing. How many times your compilation failed because of stupid upper case/lower case mistakes?
  * No redundant ";" after every statements. We originally loved this as C programmer but think about it: How many times you combined two statement in single line? Isn't new line enough to mark end of 99% of the statements you usually write?
  * Auto completion of "()". As usual, I love all kind of auto completions. Code must flow with speed!
  * Have to use escape sequences for "\" in XPath and file paths. This native C feature really becomes cumbersome and even worse can produce hard to find run time errors.
  * Microsoft.VisualBasic namespace provides for missing .Net functionalities like case insensitive string replace. While you can use it in C# also, it's bit natural to use in VB.Net
  * VB.Net wires events in forms transparently (you can delete the event handler without compilation error)
  * VB.Net allows optional parameters

Having said that, C# also has it's own share of advantages:

  * Much powerful and flexible language constructs
  * Can do Operator overloading
  * You can use real memory pointers for performance code!
  * Lots of original Microsoft and 3rd party code will be ported to C# rather than VB.Net. For example source code for DevXpress grid and many other is available only in C#
  * Better looking type cast statements
  * Much of Java, C++ Builder and VC++ code may be re-used - but with comparitively more care and may need more changes than using VB6 code in VB.Net
  * The [Shared Source CLI code][2] is in C#
  * [New language features][3] are announced for C# but not for VB.Net
  * Multi line comments
  * C# can use native unsigned data types in .Net framework
  * Allows XML documentation of code
  * The great Using keyword in C# allows to do "deterministic finalization" in easy readable way for objects implementing IDisposible.

 [1]: http://www.amazon.com/exec/obidos/ASIN/B00005YX8N
 [2]: http://msdn.microsoft.com/downloads/default.asp?url=/downloads/sample.asp?url=/msdn-files/027/002/097/msdncompositedoc.xml
 [3]: http://www.devx.com/cplus/Article/9937