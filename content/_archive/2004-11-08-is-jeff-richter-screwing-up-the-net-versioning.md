---
title: Is Jeff Richter Screwing Up The .Net Versioning?
author: Shital Shah
type: post
draft: true
private: true
date: 2004-11-08T21:51:06+00:00
url: /p/is-jeff-richter-screwing-up-the-net-versioning/
dsq_thread_id:
  - 2695697101
tags:
  - Software

---
I don't know how no one is bothered by this. May be because [it affects Longhorn][1]. But anyway, everybody would agree that while .Net solved the DLL Hell issue, it created its own which I affectionally call Assembly Hell and had [my rants][2] loud from the start. I'd high hopes when I heard Jeff Richter is on the team. But be hold, they come up with the statement that the problem is "mathematically" unsolvable and some fuzzy argument to back up that statement and then they reveal possibly the worst versioning scheme I've heard in a decade for anything: divide the assemblies in "platform" and "library" groups! I can't even start to imagine someone could think of this kind of stupid idea for things that will hit the entire planet on massive scale. Must be an outcome of long meetings for days :).

I'd been burned a lot by missing gaps in .Net versioning and problem is pretty simple if you had been in this mess. The solution is even amazingly simple for what it appears like a monster.

The fundamental flow in the .Net versioning is that it doesn't allow to put a version number on assembly without breaking the compatibility. Once you understand this, lot many problems would be simplified. The 'assembly version' is what we usually use for checking whether the file is really the one what we want and for deployment modules to make an update. While 'compatible-to version' is for the run time to check if it should throw an error. So 'assembly version' is different then 'compatible-to version' and are not tied with each other. So all we need is one AssemblyXXX attribute that can let us specify what is the build number for this assembly and another AssemblyYYY to specify the version to which this assembly is still compatible from interface as well as behaviour point of view. You always auto-increment your assembly number on each build, but you do not change "compatible-to" number unless you really change the interface and behavior. And the problem is solved.

Infect, here is a final surprise: you can do this right now in 1.x and 2.x. Use AssemblyVersion attribute to specify "Last Compatible-To" version and AssemblyFileVersion attribute to specify the build version. Things have been worked out perfectly for me with this scheme. Now when I hear about dumbest idea since COM versioning and 'plateform' and 'library', I just think we are in for huge additional mess waiting that will take another release (another 10 years?) to clean up. Whether you agree or not, people, speak up!!

 [1]: http://www.theserverside.net/articles/showarticle.tss?id=AssemblyVersioning
 [2]: http://groups.yahoo.com/group/win_tech_off_topic/message/21462