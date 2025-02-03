---
title: 'Debugging TensorFlow ImportError: DLL load failed Exception'
author: Shital Shah
type: post
draft: true
date: 2017-12-23T07:52:56+00:00
url: /p/debugging-tensorflow-dll-importerror/
tags:
  - Uncategorized

---
I have encountered this error at least twice on two different machines and have spent too much time tracking down all different reasons it can occur.

`import tensorflow<br />
Traceback (most recent call last):<br />
File "C:\...\site-packages\tensorflow\python\pywrap_tensorflow.py", line 18, in swig_import_helper<br />
return importlib.import_module(mname)<br />
File "C:\...\importlib_init_.py", line 126, in import_module<br />
return _bootstrap._gcd_import(name[level:], package, level)<br />
File "", line 986, in _gcd_import<br />
File "", line 969, in _find_and_load<br />
File "", line 958, in _find_and_load_unlocked<br />
File "", line 666, in _load_unlocked<br />
File "", line 577, in module_from_spec<br />
File "", line 906, in create_module<br />
File "", line 222, in _call_with_frames_removed<br />
ImportError: DLL load failed: The specified module could not be found.`

So anyone facing this issue (especially with TensorFlow 1.4.0) here is how to debug this:

  1. First make sure you have correct versions of CUDA Toolkit and cuDNN. NVidia has newer versions as default downloads and they won't work. See [my post][1] on TensorFlow installation.
  2. I would highly recommend using Python 3.5 version instead of 3.6 with TensorFlow 1.4. If you have latest Anaconda version, you probably have Python 3.6. You can check this by using command `conda info`. If you indeed have Python 3.6 then you can downgrade to 3.5 by using command `conda install python=3.5`.
  3. Make sure you have NVidia's CUDA Toolkit path as well as cuDNN path - _both_ - listed before Anaconda path in Environment variable Path. Anaconda now seem to supply same DLLs in its own folder but they seem to cause ImportError.
  4. Use where command to actually see if you can find these DLLs on path: <pre class="code-block"><code>             where cuDNN64_6.dll
             where curand64_80.dll
</code></pre>

    The first path should be where you downloaded cuDNN 6 and the second path should be in NVidia's CUDA Toolkit folder.</li>

      * If you still get this error, download [Process Monitor from sysinternals][2].� You will see icons to monitor registry, disk etc in toolbar. Disable those except for icon that says "Show Process and Thread Activities". Then click on filter icon and add a filter for `ImagePath contains python`. Now you should see only process and thread activities from python.exe. Close all python instances, open a new one and execute <pre class="code-block"><code>import tensorflow as tf</code></pre>

        .� Now Process Monitor will show you DLLs being loaded by TensorFlow. The last DLL in this list is usually is the one causing problem.</li> </ol>

 [1]: http://shitalshah.com/p/installing-tensorflow-gpu-version-on-windows/
 [2]: https://docs.microsoft.com/en-us/sysinternals/downloads/procmon