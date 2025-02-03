---
title: Making 2D photos in to 3D
author: Shital Shah
draft: true
date: 2008-11-04T00:28:56+00:00
slug: making-2d-photos-in-to-3d
tags:
  - Machine Learning

---
How do you take a 2D photograph and create a 3D scene out of it? When you take a 2D photograph the depth information is inherently loss. However when we see 2D photograph our brains can actually still perceive and estimate depth information, for example, a tree is in front and house is about 10 feet in the back and mountain is very far even though the photograph doesn't have any depth information in it at all. Using machine learning it is possible to partially recover and estimate depth information just like our brains does. For this, the team at Stanford has achieved very convincing results: first they divide the photograph in multiple segments and then applies several image processing filters for each segment to extract information such as blurriness, texture variation, shading etc. Then they create some training shots by sending out a robot toy car with laser light to get some sample scenes and actual depth information in the scene (they also use computer generated scenes to train the model). Then they feed this training data to algorithm based on Marcov Random Field to train the model. Each photograph is nothing but a connected graph of these segments as nodes and MRF fits quite well to operate on this graph using properties and connection of node as input and depth as output. Try out some photos you have taken at [their website][1].

On unrelated note, there is an effect called [Hitchcock Zoom][2] where camera moves closer (or away) but in a way so that the subject size remains same by reducing (or increasing) zoom. As this is very counter intuitive for our visual system it provides for [an interesting effect][3] :).

 [1]: http://make3d.stanford.edu/
 [2]: http://en.wikipedia.org/wiki/Dolly_zoom
 [3]: http://www.youtube.com/watch?v=R3W2BgM5N3A