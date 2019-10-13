---
title: Fast Asymmetric Generalized Hebbian Algorithm
author: Shital Shah
type: post
date: 2007-05-07T03:43:37+00:00
url: /p/fast-asymmetric-generalized-hebbian-algorithm/
dsq_thread_id:
  - 2762977649
categories:
  - Machine Learning
  - Mathematics

---
I can get sucked in to [challenges][1] very easily especially when that involves Artificial Intelligence or statistical analysis. The challenge that has occupied my interests these days is the one that was put up by [Netflix][2]. It’s easy to describe: They give you 100 million data points for a triplet (Customer, Movie, Rating) and you have to predict the rating for given (customer, movie) pairs. If the average of squared errors of your predictions is below certain value you get a million dollar prize.

The problem is nothing new in the field. The researchers have been developing techniques for this class of problems since centuries – often without anticipating rewards. Any such material reward would be embarrassingly insignificant compared to the real prize - understanding the most unique and powerful thing in existence that we are aware of: The intelligence.

What makes Netflix prize an interesting challenge, however, is that it’s very well defined and several researchers are trying out their tools of trade so it also provides quantitative measurement for comparison. There are some consensus that Netflix have set the bar just high enough that no one would ever be able to achieve the lowest required RMS. But that shouldn’t stop you to enjoy the game and push extremes to new boundaries.

So how am I doing this? I started out brushing up on all existing techniques: Neural networks with linear elements, back propagation, principle component analysis and SVD, logistic regression (still many more to go: Bayesian networks, Markov decision process, SOMs and Recurrent networks). It’s one thing to read about these algorithms from text books and other to actually put in the practice to solve real world problems efficiently. The difficulty using these techniques straight from textbook (without domain specific enhancements) is that they suck when your data set is huge (matrix with 8.6 billion elements) and that there is no real generalized algorithms to determine several parameters such as learning rate, number of units and so on effectively.

The one algorithm that swept me away among all of these is called Generalized Hebbian Algorithm ([GHA][3]) - which probably is the most practical algorithm out there for linear problems since 1985 but is not described in even latest well known textbooks! This algorithm can deal with essentially infinite data that available serially, it will use only required amount of memory to hold eigenvectors and perform SVD starting with most significant eigenvalue!

In any case, I'm making [my implementation][4] of highly optimized version of this neural network algorithm available with source code.

Again limitation of GHA (and AGHA) is that they work best on linear problems only.

 [1]: http://www.a-i.com/show_tree.asp?id=76&level=2&root=75
 [2]: http://netflixprize.com/
 [3]: http://www.dcs.shef.ac.uk/~genevieve/gorrell_thesis.pdf
 [4]: https://github.com/sytelus/AGHA