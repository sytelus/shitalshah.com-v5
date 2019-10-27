---
title: How to use Windows network share from domain joined machine on Linux
author: Shital Shah
type: post
date: 2016-06-03T21:22:15+00:00
url: /p/how-to-use-windows-network-share-from-domain-joined-machine-on-linux/
dsq_thread_id:
  - 4881808532
categories:
  - Uncategorized

---
I'm seeing lot of websites with bit outdated or incomplete instructions. So here are the full steps that works for Ubuntu 14 for mounting Windows network file share on Ubuntu through active directory domain account:

First you need to install cifs-utils. Check if you already have it:

<pre class="code-block"><code>dpkg -l cifs-utils
</code></pre>

If not, just install it:

<pre class="code-block"><code>sudo apt-get install cifs-utils
</code></pre>

You can mount Windows shares anywhere but /mnt is generally preferred. Another often used location is /media but in modern environments /mnt is more preferred for things that users mount manually while /media is more preferred for things that system would mount for you. Regardless, you should create a folder where the content of your share will appear. Run following command to do that:

Note: In this guide, replace ALL_CAPS words with values you want.

<pre class="code-block"><code>mkdir -p /mnt/FOLDER
</code></pre>

Then run the mount command:

<pre class="code-block"><code>sudo mount -t cifs //SERVER/FOLDER /mnt/FOLDER -o username=USER,domain=DOMAIN,iocharset=utf8
</code></pre>

Note that,

  1. We set iocharset to utf8. This is optional but better than default charset ISO 8859-1 that Linux uses for mount.
  2. Some websites uses filemod/dirmode to 777 (i.e. grant all permissions). This is usually not necessary. </ol> 
    That's it! If you need to unmount share then run the command,
    
    <pre class="code-block"><code>sudo umount //SERVER/FOLDER
</code></pre>
    
    One problem is that, you will need to run mount command every time after you restart again. While there are ways to connect network shares at startup, they often involve storing your passwords and not recommended. So usually I would just add a line in my ~/.bash-aliases file like this:
    
    <pre class="code-block"><code>alias mountshare='sudo mount -t cifs //SERVER/FOLDER /mnt/FOLDER -o username=USER,domain=DOMAIN,iocharset=utf8'
</code></pre>
    
    So next time when I need share, I just type `mountshare` on command line.