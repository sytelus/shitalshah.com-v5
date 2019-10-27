---
title: Underscores be Gone
author: Shital Shah
type: post
date: 1970-01-01T00:00:00+00:00
draft: true
url: /?p=1469
categories:
  - Developers

---
My two biggest pet peeves with Python are underscores and outdated less powerful list comprehensions compared to modern standards such as Linq. The _ should be considered as relics of 60s era when terminals/printers didn't had ability to print lower cases. However programming languages didn't allowed spaces so programmers were forced to use some character to separate words in variable names. With new technology of lower case letters this was no longer needed since about 50 years. Underscores takes away extra space, makes code actually less readable because they stand out too much among regular roman characters and its slow down the typing a lot (I've to reach my finger for shift key followed by _ key on most keyboards).

can't select a variable or function name with a double click
  
One case for the underscored style is that you can use one-letter-words better. For (a rather silly) example, findMeAClass is perhaps uglier than find\_me\_a_class

Google Python Style Guide has the following convention:

module\_name, package\_name, ClassName, method\_name, ExceptionName, function\_name, GLOBAL\_CONSTANT\_NAME, global\_var\_name, instance\_var\_name, function\_parameter\_name, local\_var\_name