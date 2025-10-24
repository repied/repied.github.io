---
title: Compressed sensing
---
|*Date*| 2007-07-18|


[Igor](http://nuit-blanche.blogspot.com/) has a nice intro about compressed sensing. He explains the principle of the [Rice pixel](http://www.dsp.ece.rice.edu/cscamera/) single camera. This camera, with only one pixel, is able to sense an image with very few measurements. It’s able to sense directly the “compressed image”, instead of firstly sensing a huge grid of pixels and then making a JPEG compression, which seems to be a waste of sensing resources.
[Compressed sensing](http://www.dsp.ece.rice.edu/cs/), a quite new and promising field, with theoretical results, is the underlying idea for this one pixel camera.

Here is what I understood about this method:

Basic assumption : in the real world, sensed signals are not random, they present some regularities, they are compressible. Mathematically, that means that there exist for each signal, a base in which the signal has a sparse representation.
The problem is that we don’t know in advance the good base. For certain kind of signals, we have some idea. For instance, natural images are sparse in a cosine basis, and this is why JPEG achieves good compression rates. It could also be wavelet basis.
But, here is the trick, some mathematical results show that if we take a base perfectly unrelated to the good one, then just a few coefficient (projections) in this base are sufficient to reconstruct the original signal.
How to find such an unrelated basis ? -> take a random basis, a basis of random vectors
Indeed, in hight dimensional spaces, 2 random vectors are almost always orthogonal (with a [slightly modified version](http://terrytao.wordpress.com/2007/07/02/open-question-deterministic-uup-matrices/) of orthogonality), which guarantee non-correlation with high probability.
then, with a few random projections (ie with measurements on a few random vectors from the random basis) we have enough information to reconstruct the original signal.
This reconstruction should be achieved using the L0 norm. Indeed the goal is to find the sparsest signal which matches the few measurements. Optimizing the sparsity is equivalent to minimizing L0 norm.
The problem is that L0 minimization is a combinatorial problem, with an exponential cost, not achievable in practice.
Solution : [use L1 norm instead of L0](http://www.acm.caltech.edu/l1magic/examples.html) : the results will be quite good and the optimization become convex, that is to say that it becomes quick enough.
There are also some works about [Bayesian compressed sensing](http://www.ece.duke.edu/%7Eshji/BCS.html), which basically improves the reconstruction process by explicitly modeling noise and uncertainties.

-
So compressed sensing seems useful when one wants to save sensing resources. Could it be useful for machine learning ?

A few weeks ago, Igor proposed several leads on hunch.net. To summarize :

The relations between L0 and L1 is by itself interesting, generally useful for machine learning, although this is not the key idea of compressed sensing.
Compressed sensing can be seen as a universal dimensionality reduction method. Indeed, random projections can help to learn low dimensional manifolds. (context of manifold learning : in a N dim space, consider a set of data living on a K dim sub space with K really smaller than N. The goal is to find that subspace from samples)
-

Now let me drop a probably bad idea : Using compressed sensing for the Netflix prize.

The idea is to say that, in this challenge, we have few measurements (the given rates) and we want to reconstruct a “signal”. We have a huge matrix with users in rows and movies in columns, each cell is filled with the rate (1-5) given by the corresponding user to the corresponding movie.

The points is that this matrix is 99% sparse, and the given cells is the “training set”. Basically, Netflix gives one million dollar to the people who can fill the rest of the matrix.

The signal is the full matrix, and it is surely not random because there exist similar movies and because users can share similar tastes. A random projection (a measurement) is a observed cell.

The reasons why CS probably doesn’t apply are : the considered space is just 2D, and doesn’t have any ordering (users ID * moviesID). Also random vectors are not linear combinations….it seems to be a dead end idea, but it could worths thinking a bit on that.

# Comments
Pierre,

Thanks for the highlight, Please note that I am not proposing anything with regards to universal dimensionality reduction, [Mike Wakin](http://www.acm.caltech.edu/~wakin/) and [Rich Baraniuk](http://www.ece.rice.edu/~richb/) are. I am just a cheerleader.

For the netflix prize, I am not sure it is a bad idea. Let me throw an idea, consider the ranking obtained from submitting a solution to be a “compressed measurement”.

Igor.

Comment by Igor Carron — July 18, 2007 #

Dear Pierre,

You wrote “Indeed, in hight dimensional spaces, 2 random vectors are almost always orthogonal”. Do you have any reference or proof for that.

Thanks.

Comment by Nhat Vo — August 23, 2007 #

Dear Nhat,
not really…
Of course probability to be strictly orthogonal is zero, but give a look at [Terry Tao](http://terrytao.wordpress.com/2007/07/02/open-question-deterministic-uup-matrices/)’s post for details about “almost orthogonality”. The last comment of Terry gives an analogy with random strings.

Comment by Pierre — August 23, 2007 #
