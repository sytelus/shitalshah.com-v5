---
title: DVD-Audio Format
author: Shital Shah
type: post
date: 2004-11-01T21:32:23+00:00
url: /p/dvd-audio-format/
dsq_thread_id:
  - 2739720675
categories:
  - Geekery
  - Music

---
In my [recent quest][1] to find new music, I bumped in to brand new [DVD-A format][2] on which many [new demanding music albums][3] are being delivered. It appears that this is definitely the next generation of music quality but there is very little or no information on many of its aspects. Here I'll try to summarize what I found so far:

This format is capable of delivering very high quality multi-channel surround sound on your home theater system. The DVD-A format is entirely different than usual [Dolby Digital or DTS][4] which is used for DVD movies. The quality that could be delivered using DVD-A is superior than Dolby Digital or DTS. If you look in to your DVD disk in Windows Explorer, you will find that there are two folders: Audio\_TS and Video\_TS. So far, only Video_TS folder was used to put all the movie files on DVDs because industry wasn't settled on standards for DVD-A format. Recently standards have been finalized and [loads of new music albums][5] are now being released in this format. They have content inside Audio_TS folder which contains DVD-A audio tracks in files with extension .aob. Because its brand new format, you need [newer DVD players][6] or [sound cards][7] to play it. However because most people aren't going to upgrade their DVD players soon, these audio DVDs supply same sound tracks in Video_TS folder encoded in usual Dolby Digital or DTS which all players knows how to play.

Now say you buy an audio album on DVD disc. Obviously you can't play it on car stereo or your portable MP3 players because it’s a DVD disc rather than normal audio CD. Or you might want to take backup of your DVD-A disc as [WMA Pro][8] files on your PC whcih allows 7.1 surround sound and playback. So what you do? You need to convert DVD disc in to normal Audio disc or rip tracks to MP3s. Unfortunately this isn't easy. The DVD-A format employs [higher level of encryption][9] than usual DVDs. The DVD videos (stored in .vob files) employs copy protection scheme called [CSS][10] which can be broken in to very easily using DeCSS or even more friendly [DVD Decryptor][11]. But [DVD-A format][12] which was developed later has learned lesson from this hack and currently there is no known way to decrypt .aob files which contains DVD-A audio tacks. That means you can't rip MP3s out of AOB files. Your only way out is to rip off from slightly lower quality Dolby/DTS formatted tracks. The most reliable and easy to use software to do this is [DVD Audio Extractor][13]. Fortunately many DVD-A albums also provides [LPCM][14] version of tracks along with AC3 (i.e. Dolby Digital)/DTS format. So to burn normal audio CDs or MP3s you might want to choose LPCM version. If DVD-A disc [doesn't contain LPCM tracks][15], than you are out of luck. The down-mix/demux process employed by most software to convert surround sound from AC3/DTS to plain stereo format doesn't produce same quality as commercially available stereo tracks. Though you can try [some equations][16] to combine 5.1 channels in to stereo using SoftEncode etc and usually DTS works better than AC3.

 [1]: /p/blue-man-group-and-polyphonic-spree/
 [2]: http://searchstorage.techtarget.com/sDefinition/0,,sid5_gci510035,00.html
 [3]: http://www.amazon.com/exec/obidos/tg/browse/-/574074/102-8083421-0521740
 [4]: http://home.clear.net.nz/pages/adbarr/page1.html
 [5]: http://www.amazon.com/exec/obidos/tg/browse/-/574074
 [6]: http://www.digitalaudioguide.com/dareview/players.htm#da%20(DVD-Audio)%20Players
 [7]: http://www.soundblaster.com/products/Audigy2ZS_platinum_pro/
 [8]: http://www.microsoft.com/windows/windowsmedia/domorewith/sursoshowcase.aspx
 [9]: http://www.extremetech.com/article2/0,1558,1638228,00.asp
 [10]: http://www.extremetech.com/article2/0,1558,1638226,00.asp
 [11]: http://www.dvddecrypter.com/
 [12]: http://www.digitalaudioguide.com/faq/dvd-audio/faq_intro.htm
 [13]: http://www.castudio.org/dvdaudioextractor/
 [14]: http://www.videohelp.com/forum/archive/t140530.html
 [15]: http://www.amazon.com/exec/obidos/tg/detail/-/B000051S65/
 [16]: http://www.trevormarshall.com/byte_articles/byte7.htm