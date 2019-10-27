---
title: On Truly Managed Operating Systems
author: Shital Shah
type: post
date: 2005-03-28T19:03:23+00:00
draft: true
private: true
url: /p/on-truly-managed-operating-systems/
dsq_thread_id:
  - 2718334509
categories:
  - Software

---
Anyone who have worked with .Net or Java would have certainly thought about this: Is there a way to extend these runtimes/VMs to build truly managed operating system? As it turns out Longhorn would be "mostly" managed OS but this is not the kind of "managed" OS stuff we are talking about. We are talking about truly managed OS, in theory and in imagination, that is. 

If you look at .Net runtime, it indeed provides several services that should be coming from OS otherwise: threading, security, PE loading and so on. When I was watching the documentary [Revolution][1], Richard Stallman was describing similar situation in his days: they wanted to build an OS, they had compilers, all kind of command line utilities, code for various services and so on but they were missing a kernel. So even if they had got lot of functionality working, they still needed some base OS to run off their stuff. I think the .Net runtime/JVM are in the same situation. 

So what a managed OS would look like? Who handles all the system calls down the line and how? Say I want to turn on a pixel on the screen, what my lowest level code running on a truly managed OS would look like? Let’s think about it: the lowest level managed code you can write in .Net is IL, which is essentially an assembly language for a virtualized CPU and memory system. The IL essentially has no idea about the world outside its virtualized CPU and memory system. For instance, I can’t write any direct IL instructions to read sector 510 from my hard drive or turn on a pixel on my screen. In its current form, I would have no choice but to extend IL somehow so I can make low level system BIOS calls or embed native instruction for my graphic card inside my IL. That’s not good. If I’m allowed to embed such low level calls in IL, the whole thing isn’t "managed" anymore and also not independent of the hardware I’m using. 

As I thought about this more, I converged to the answer that we need a "runtime" for each of the subsystem in the computer. If you think about it, a hard-drive controller is a CPU in its own right with its own instruction set and so is your graphics card. Your main CPU and memory are just "over hyped" subsystems of your computer. Our traditional runtime and IL only virtualizes main CPU and memory, not these other subsystems. Once we have this "runtime" for video subsystem, hard drive controller and so on, it should be possible to write pure IL instructions to say, draw a bitmap on the screen. Notice that the IL code should work on any graphics card which has been similarly virtualized. Now you see, these "runtimes" for subsystems are essentially equivalent to drivers in current world but with a twist that they follow exactly the same structure and standards as the main runtime. 

So now imagination can go wild: You have several "runtimes" running and managing each subsystem in your computer. Obviously each of these runtimes needs to discover and talk with other. The traditional runtime only manages main processor and memory but now it needs to send out IL instructions to say, VM controlling hard drive. So we now have a need for a standard protocol to discover virtual machines in the system and talk to them (much like Plug And Play). Also we need a system boot-strapper, which initializes all the runtimes in your system and provides common "channel" for them to discover and talk with each other. I also speculate a base runtime from which all other runtimes must "inherit" so as to enforce common infrastructure such as secured access to instructions and inter-VM communication. If you let your imagination wilder, you can think of a runtime/VM as something that consumes bytecode, changes its own memory state and outputs bytecode to another VM or a hardware. So essentially you can have cascading VMs too. You can even pass objects around VMs and even create your own VM (for example, to emulate non-existent hardware or to create a OS level service). 

So what is the managed OS again? It’s collection of VMs for each subsystem and a bootstrapper. Good, we got somewhere. Anything you code against it would be (really) 100% pure managed code with potential to be executed on variety of hardware. Infect you could even have a VM which simply delegates call to parent OS instead of real hardware subsystem. That could make it possible to build versions of this managed OS that could run off the host OS that you already have, without forcing you to partition your hard drive or reboot your machine. This would still let all your "managed" code run as is it but may be without extra-strength security and such stuff. 

This all sounds really cool. Now only if I can figure out how performance won't suck... 😉

 [1]: http://www.imdb.com/title/tt0308808/