---
title: 'Understanding "Understanding": Quantifying AI Comprehension'
draft: false
date: 2023-06-27T20:17:35+00:00
slug: '202306272017-quantifying_ai_understanding'
is_tweet: true
tweet_info:
  id: '1673681985276088320'
  type: 'thread'
  is_thread: True
---



We often use phrases like “model understands X” but what does that even mean? What is to “understand” something? Can we make our understanding of the word “understanding” more concrete? Perhaps even quantitative?

I think we can. 🧵

When we use the word “understand” in context of something, that “something” is important! It is an object with an implicit interface that allows us to interact with it. Any interface must have inputs and outputs.    2/

For example, if object is a Python function, it has straight forward inputs and outputs. If object is universe of particles in classical physics then inputs are forces and outputs are 6 numbers (position and momentum vectors).   3/

We implicitly use the word “understanding” in context of these inputs and outputs. 

The first part of “understanding” is ability to predict output given input.

However, we often forget about the second part.  4/

The second part is the ability to predict input given output! 

This is a necessary and important part of what we often call “understanding”. 

To understand something is to create a forward and backward *model* of that something.  5/

We often focus on modeling the forward part in classical ML however all the magic is in backward part! When we create a model to classify an image, it’s forward modeling. When we ask model to generate an image given a class, it’s backward part of modeling.  6/

To “understand” something is to be able to model that “something” both forward and backward. These are the fundamental yin and yang. In ML, the yin is supervised modeling and yang is generative modeling (or vice versa, if you prefer). 7/

A possible quantification of the term “understanding” therefore could perhaps be defined as the set intersect of some performance metric of these two models. The understanding of “something” is not complete until we have both yin and yang models.   8/

All of above observations are inspired from a beautiful evaluation metric for code generation called Python Programming Puzzles or P3. 

Let’s make above rather abstract concepts to a more concrete problem:  9/

Given a Python function, when can we say that our model has developed “understanding” of that function in some well defined sense? 

This would hopefully lead us to designing a good metric for the code generation task.   10/

Typically, we focus only on forward modeling. That is, can a model predict output of a function for a given input to the function? This is implemented, for example, as set of test cases in metrics like HumanEval and MBPP. 

We have yin but not yang!   11/

For code generation task, models can cheat away at forward-only metrics like HumanEval and MBPP by generating code through pattern matching aka statistical parroting. We don’t know if model really “understands” the code. /12

Enter P3. In this code generation task, model is given code for f() and it must generate code for g() such that f(g()) is true.

For example, try to write g() such that f(g()) must be true for the below given f(): 

def f(s):
    return s[::,-1] + ‘World’ == ‘Hello World’

  /13

This is far more harder to game for the model than forward-only metrics. To generate g(), the model would be forced to learn evaluating f() for a given inputs AND also search for inputs that generates desired output. That’s our yin and yang composed in harmony!  /14

If model has finite computational resources then the search for inputs for given output must become efficient. This is perhaps where the magic lies. To develop this efficiency, the model must “understand” the function! Better the “understanding”, better is performance.  /16

It may not be lost on us that “understanding” and “reasoning” are related. To evaluate a program, one must be able to “reason”. Therefore, it’s tempting to recast process of reasoning simply as ability to evaluate. If X=2 and Y=X, can you tell what is Y? Is this reasoning?   /17

You might be able to now see that recasting the ability to reason as the ability to evaluate has yin but is missing proverbial yang! The CPU can evaluate a program perfectly but it doesn’t make a lot of sense to say that CPU has ability to do perfect “reasoning”. /18

We posit that the ability to reason is ability to *both* forward and backward model an event. In order to generate g(), one must be able to “reason” through f(). Notice that f() and g() are often so dissimilar that pattern matching and statistical parroting is ineffective. /19

One more thing. What is the difference between programming and math? I suspect none. When we write code in Python, we call it programming and when we write code in Lean we call it math. Code generation and proof generation are the same thing, just different languages! /20

Consequence of above is that if we know how to build solid code generation model, we can use exact same techniques to build solid proof generation model. Longer the correct code that we can generate, longer the correct proof we can generate!  /21

If you dreamed about building model that one day can generate proof of Riemann hypothesis and do new math, you might start with building the code generation model. It’s the most fundamental ML task of our times.

Also, I should make t-shirt for 

Math ≡ Code ™

:).  22/

[Discussion](https://x.com/sytelus/status/1673681985276088320)
