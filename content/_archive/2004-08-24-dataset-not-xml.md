---
title: DataSet, not XML
author: Shital Shah
type: post
draft: true
private: true
date: 2004-08-24T18:09:57+00:00
url: /p/dataset-not-xml/
dsq_thread_id:
  - 2732030970
tags:
  - Software

---
If you need to store certain data in file, most of the time you will obviously think about storing it as XML file. Then soon you start drawing XML schemas and think about generating XSDs... Well, stop! You might be making same mistake as many other people. The better idea is to design XML schema which is [loadable in DataSet][1] rather then just [XMLDocument][2]. This has tremendous advantages then your custom schema:

  * Instead of thinking in hierarchical terms, you can now think in relational terms. I've often found that this simplifies lots of things. This means you can think how you will be storing your data in tables rather then XML hierarchies.
  * Schema generation gets simplified: You can draw actual database schemas using drag and drop in Access visually, set various properties for fields and generate XML schema using my utility.
  * You can load your XML file right in to DataSet, create various [relationships][3] and access your data far more easily and with less code then directly using XMLDocument.
  * Once you have stuff in DataSet, you can do data bindings directly for quick demos or even use typed datasets - which is far more safer then always late bound XMLDocument objects.
  * In future, if you change your mind (and in most cases you will) to store your data in high performance databases rather then plain XML files, using DataSet in first place makes your job far more easier. Using DataSet compatible schemas allows you support plain XML files as well as real databases as your storage.
  * If you don't want to use SQL Server, its still a good idea to include possible support for Access mdb file along with plain XML file as your storage. Unlike plain XML files, Access single file databases allows you to fire far more complex queries rather then just XPath, generate reports write VBA scripts, set constraints, use security features and use other tons of utilities out there. Using DataSet compatible schemas lets you do that.
  * Use of dataset will let you migrate your application as becoming a [Groove tool][4] with far more ease. Once your app can sit in Groove transceiver, it would suddenly become a marvellous magic collaboration product! However note that Groove has not included their ADO.Net support in their 3.0 version but there are rumours that they eventually will. Currently the only way to have it is to use Groove 2.5 or upgrade from it to 3.0.
  * If you manually enter data in your XML file (usually you might have to for unit tests, bug repro etc), you can do it in Access tables which is far more easier and save whole database as XML using my utility.

This might make you wonder is there is any negative points in using DataSet compatible schemas. There are some, indeed:

  * Some data which is inherently hierarchical are better represented using custom schemas. Trying to fit in relational table structure will cause to create several [many-to-many map tables][5] and complicate the whole thing.
  * If XML file becomes large, there ways to read it using [SAX parser][6] rather then loading whole file in memory. Using DataSet directly will always load the whole file in memory and in general uses more of it.
  * Custom XML schemas are more "purer" to share across the platforms. However if you plan to use [Mono][7], it already supports DataSets and that won’t be a problem.

 [1]: http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpguide/html/cpconloadingdatasetfromxml.asp
 [2]: http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpref/html/frlrfsystemxmlxmldocumentclasstopic.asp
 [3]: http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpguide/html/_mapping_xsd_relationships_to_dataset_relationships.asp
 [4]: http://docs.groove.net/dev/currentbuild/platform/wwhelp/wwhimpl/js/html/wwhelp.htm?href=Net%20Lead.html
 [5]: http://www.ehow.com/how_13626_define-many-many.html
 [6]: http://www.xml.com/pub/a/2001/02/14/perlsax.html
 [7]: http://www.mono-project.com/about/index.html