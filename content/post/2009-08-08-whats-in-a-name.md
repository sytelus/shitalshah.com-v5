---
title: What’s in a name?
author: Shital Shah
type: post
draft: true
private: true
date: 2009-08-08T03:32:48+00:00
url: /p/whats-in-a-name/
dsq_thread_id:
  - 4475366750
categories:
  - Developers

---
When you want to store the name of a person a typical design starts out by creating two fields (in database or class):

**Person**

<pre class="code-block code-text"><code class="no-highlight">First Name
Last Name
</code></pre>

Soon you realize lot of people have middle name, especially, when name change occurs after marriages. So you go and add one more field:

**Person**

<pre class="code-block code-text"><code class="no-highlight">First Name
Middle Name
Last Name
</code></pre>

This is all good… until you encounter people in countries such as Spain and Cuba who have custom to have two last names. Both are equally important and both are required in any official document (including ones your website or app may print out). So you go in and add one more field while thinking this ought to do it once and for all:

**Person**

<pre class="code-block code-text"><code class="no-highlight">First Name
Middle Name
Last Name
2nd Last Name
</code></pre>

Not so fast… Lot of people from Hong Kong and few other places in Asia actually carry two first names. One of these first names is traditional while other is typically a Western/Roman name. Both first names are important and often many people will know only Western/Roman first name of a person although official documents would only refer to traditional names.

For example, consider name of Hong Kong’s Chief Secretary [Anson Chan Fang On Sang][1]. Here Anson is English given name, On Sang is Chinese given name, Chan is husband’s surname and Fang is her own surname.

So time to add few more field so we can store everybody’s names on planet without loss of semantics:

**Person**

<pre class="code-block code-text"><code class="no-highlight">Traditional Given Name
English Given Name
Middle Name
Last Name
2nd Last Name
</code></pre>

Ok… so are we done now? Well, almost! We are still missing at least two critical pieces of information: Salutation and Suffix.

Example of common salutations are Dr, Mr, Mrs, Mr. While salutations are quickly falling out of fashion it might be still required, for example, if you are printing out an official letter to your customer and don’t want to make it look very casual.

Example of common suffixes are Jr, Sr, III, IV etc. These are required in official/legal communication to avoid confusion with other family members of a person.

**Person**

<pre class="code-block code-text"><code class="no-highlight">Salutation
Traditional Given Name
English Given Name
Middle Name
Last Name
2nd Last Name
Suffix
</code></pre>

Now we have covered most of the globe. There are still two more nice-to-have fields if you want to make your customers happy: Phonetic Given Name and Phonetic Last Name. Remember the times when you call customer support and each time you have a guy struggling to say your name? These two fields would avoid those moments:

**Person**

<pre class="code-block code-text"><code class="no-highlight">Salutation
Traditional Given Name
English Given Name
Middle Name
Last Name
2nd Last Name
Phonetic Given Name
Phonetic Last Name
Suffix
</code></pre>

So there you have it. A structure that can store almost anybody’s name on planet while maintaining semantics of each component of a name.

Most applications won’t need to go to this extreme because it’s OK to just have one first name and one last name that correctly identifies a person for its purpose even if it’s culturally incorrectly and technically incomplete. However if you are in a business where legal implications are high or if any information loss about your customer is not tolerable then it’s good to think about these possibilities.

There are probably better solutions than giant structure like above just to store name of a person. Instead of having all these different fields you can simply have one free form field, say, Full Name and another field called Full Name Style which takes values indicating how different components of names are arranged:

**Person**

<pre class="code-block code-text"><code class="no-highlight">Full Name
Full Name Style
</code></pre>

This structure will make searches for specific components of a name little difficult but it would extend well as your application grows around the planet.

 [1]: http://en.wikipedia.org/wiki/Anson_Chan