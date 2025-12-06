+++
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
author: Shital Shah
draft: true
private: true
date: '{{ .Date }}'
slug: '{{ .File.ContentBaseName }}'
tags:
  - Machine Learning
+++

This is my new blog post.

To insert figures, charts etc:

```html
{{< figure src="festivities.svg" class="m-auto mt-6 max-w-prose" >}}
```

To insert image:

```html
![Image alt string](image.png)
```

[More about images](https://gohugo.io/content-management/image-processing/)

To insert tweet:

```html
{{< tweet user="sytelus" id="1714557767250489783" >}}
```

To add url,

```html
<https://some.url>
```

To add YouTube:

```html
{{< youtube ZJthWmvUzzc >}}

See other shortcodes: https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes