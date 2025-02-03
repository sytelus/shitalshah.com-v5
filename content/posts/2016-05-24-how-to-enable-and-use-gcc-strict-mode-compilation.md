---
title: How to Enable and Use GCC Strict Mode Compilation
author: Shital Shah
type: post
date: 2016-05-24T01:19:51+00:00
url: /p/how-to-enable-and-use-gcc-strict-mode-compilation/
dsq_thread_id:
  - 4852451428
categories:
  - Developers

---
One of the great feature that many C++ programmers rarely use is GCC strict mode compilation. Enabling this lets compiler warn you about any potential issues that might often get unnoticed in build noise. Unfortunately there is little documentation, let alone quick tutorial on this subject so I thought to write this up.

First, let's clear this up: There is no official GCC mode called "strict". I just made that term up. Fortunately there are enough compiler options that you can rig up to create "strict" mode that is often available in many other languages.

To get the "strict" mode, I use following command line options for gcc/g++. Below are written in format consumable in CMakeList.txt but you can use same options from pretty much anywhere.

```bash
set(CMAKE_CXX_FLAGS "-std=c++11 -Wall -Wextra  -Wstrict-aliasing -pedantic -fmax-errors=5 -Werror -Wunreachable-code -Wcast-align -Wcast-qual -Wctor-dtor-privacy -Wdisabled-optimization -Wformat=2 -Winit-self -Wlogical-op -Wmissing-include-dirs -Wnoexcept -Wold-style-cast -Woverloaded-virtual -Wredundant-decls -Wshadow -Wsign-promo -Wstrict-null-sentinel -Wstrict-overflow=5 -Wswitch-default -Wundef -Wno-unused -Wno-variadic-macros -Wno-parentheses -fdiagnostics-show-option ${CMAKE_CXX_FLAGS}")
```

That's a looong list of compiler options so now I hope you can agree that we really mean "strict" business here :). In essence it enables extra warnings and makes all warnings as errors, points out coding issues that borderlines on pedantic and then on top of that enables some more warnings. Rest assured, above is not an overkill. You are going to thank compiler for taking care of these stuff as your code base becomes larger and more complex.

Unfortunately, road from here has lots of twist and turns. The first thing that might happen to you is that you will get tons of errors, most likely not from your own code but from the included headers that you don't own! Because of the way C++ works, other people's bad code in their included header becomes your liability. Except for Boost and standard library, I haven't found many packages that can get through strict mode compilation. Even for relatively nicely written packages such as ROS you will get tons of compiler errors and for badly written packages such as DJI SDK, forget about it. Right... So now what?

Here's the fix I have used with fair amount of success. First, declare these two macros in some common utility file you have in your project:

```bash
#define STRICT_MODE_OFF                                                                 \
    _Pragma("GCC diagnostic push")                                            \
    _Pragma("GCC diagnostic ignored \"-Wreturn-type\"")             \
    _Pragma("GCC diagnostic ignored \"-Wdelete-non-virtual-dtor\"") \
    _Pragma("GCC diagnostic ignored \"-Wunused-parameter\"")        \
    _Pragma("GCC diagnostic ignored \"-pedantic\"")                 \
    _Pragma("GCC diagnostic ignored \"-Wshadow\"")                  \
    _Pragma("GCC diagnostic ignored \"-Wold-style-cast\"")          \
    _Pragma("GCC diagnostic ignored \"-Wswitch-default\"")

/* Addition options that can be enabled
    _Pragma("GCC diagnostic ignored \"-Wpedantic\"")                \
    _Pragma("GCC diagnostic ignored \"-Wformat=\"")                 \
    _Pragma("GCC diagnostic ignored \"-Werror\"")                   \
    _Pragma("GCC diagnostic ignored \"-Werror=\"")                  \
    _Pragma("GCC diagnostic ignored \"-Wunused-variable\"")         \
*/

#define STRICT_MODE_ON                                                                  \
    _Pragma("GCC diagnostic pop")
```

Here we have two macros, one tells GCC to turn off selected warnings before some chunk of code and second tells GCC to re-enable it. Why can't we just turn off all strict mode warnings at once? Because GCC currently doesn't have that option. You must list every individual warning :(. Above list is something I just put together while dealing with ROS and DJI SDK and is obviously incomplete. Your project might encounter more stuff in which case you will need to keep adding in to above list. Another issue you might encounter is that GCC currently doesn't support suppressing every possible warnings! Yes, a big oops there. One of them that I [recently encountered in DJI SDK][1] was this:

```
warning: ISO C99 requires rest arguments to be used
```

The only way out for me in this case was to modify DJI's source code and submit the issue to them so hopefully they will fix it in next release.

Once you have above macros, you can place them around problematic headers. For example,

```cpp
#include <string>
#include <vector>

STRICT_MODE_OFF
#include <ros/ros.h>
#include <actionlib/server/simple_action_server.h>
#include <dji_sdk/dji_drone.h>
STRICT_MODE_ON

#include "mystuff.hpp"
```

We are not out of the water yet because above trick will work only for some header files. The reason is that GCC sometime doesn't compile entire file as soon as it encounters #include statement. So it's pointless to put macros around those #include statements. Solving those issues requires some more work, and in some cases a lot more work. The trick I used was to create wrappers around things you use from bad headers such that only those wrappers needs to use `#include <BadStuff.h>` statements and rest of your code doesn't need those header. Then you can disable strict mode for the wrappers and rest of your code remains clean. To do this, you would need to implement [pimpl pattern][2] in your wrapper classes so that all objects in BadStuff.h are behind opaque member. Notice that `#include <BadStuff.h>` statements would be in your wrapper.cpp file, not wrapper.hpp file.

Even though this might require significant work in big project, it's often worth it because you are clearly separating interface and dependency for the external stuff. Your own code then remains free of `#include <BadStuff.h>`. This will enable you to do even more things like static code analysis just for your code. In either case, consider contributing to those project with bad stuff and make them pass strict compilation!

So as it happens, working strict mode requires buy off from C++ community. If everyone isn't doing it then it becomes hard for others. So, tell everyone and start using yourself today!

 [1]: https://github.com/dji-sdk/Onboard-SDK-ROS/issues/27
 [2]: https://herbsutter.com/gotw/_100/