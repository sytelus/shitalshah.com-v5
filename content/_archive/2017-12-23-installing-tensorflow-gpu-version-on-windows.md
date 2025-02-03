---
title: Installing TensorFlow GPU Version on Windows
author: Shital Shah
type: post
draft: true
private: true
date: 2017-12-23T07:21:27+00:00
url: /p/installing-tensorflow-gpu-version-on-windows/
tags:
  - Uncategorized

---
TensorFlow 1.4 installation on Windows is still not as straightforward so here are quick steps:

  1. [Install Anaconda][1]. Grab the version that has Python 3.6. After installation, you will need to downgrade to Python 3.5 as quite a few libraries like OpenCV still aren't compatible with Python 3.6 and also TensorFlow does seem to have few issues with 3.6. So after installing Anaconda run following command to downgrade: <pre class="code-block"><code>conda install python=3.5</code></pre>

    . Another alternative is to create virtual environment but I want to keep this post short.</li>

      * Next, install NVidia CUDA Toolkit 8.0. This is currently not the version so you can only find in [archives][2]� and you might have to register on NVidia website first. You will see Base Installer and Patch 2. Install both in one after another. Note that you must do this after step 1. If you did this before then go to [Environment Path][3] editor and make sure NVidia Cuda Toolkit's path is listed before Anaconda path. Currently Anaconda also supplies CUDA 8.0 DLLs and they don't seem to be compatible causing DLL ImportError.
      * Next, [Download cuDNN v6.0 (April 27, 2017), for CUDA 8.0][4]. Extract the zip file to some folder and add path path cuDNN6\cuda\bin in to your machine's Environment Path. Make sure this path comes before Anaconda's path in your Environment Path variable. TensorFlow 1.4.0 looks for cuDNN64_6.dll and this folder has this DLL. Again this step should be done after step 1 otherwise Anaconda's cuDNN DLL will be found first on path and you will get DLL ImportError.
      * Open Command Prompt as Administrator and install TensorFlow using command: <pre class="code-block"><code>pip install --ignore-installed --upgrade tensorflow-gpu</code></pre>

        . Sometime this command might fail. In which case, try to update pip (if you see warning) and run this command again.</li>

          * [Validate your installation][5].</ol>

        If you are getting ImportError for DLL load then see [my post][6] on how to debug it.

 [1]: https://www.anaconda.com/download/
 [2]: https://developer.nvidia.com/cuda-80-ga2-download-archive
 [3]: https://superuser.com/questions/284342/what-are-path-and-other-environment-variables-and-how-can-i-set-or-use-them
 [4]: https://developer.nvidia.com/rdp/cudnn-download
 [5]: https://www.tensorflow.org/install/install_windows#validate_your_installation
 [6]: http://shitalshah.com/p/debugging-tensorflow-dll-importerror/