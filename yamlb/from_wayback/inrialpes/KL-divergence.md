---
title: KL divergence 
---
|*Date*| 2007-05-19|


The [Kullback and Leibler divergence](https://web.archive.org/web/20080328095608/http://eom.springer.de/K/k110180.htm) is a common measure of the “distance” between two probability distributions. It’s central in probabilty based machine learning algorithm.

For instance, when trying to approximate an intractable distribution p(x), we can try minimize KL(p,q) (or KL(q,p)) with q belonging to a particular class of distributions (ex: exponential family).

(KL is used in variational methods and approximate inference message passing algorithms.)

Another scenario is when we are considering that a “true” distribution p generated some data, and we infer q from our prior and data without knowing p. In this case KL(p,q) measure how close we are from the true p. This can help to derive some learning bounds and estimator proprieties.

But why using this divergence (which isn’t a real distance)? Why not a more classical L^2 distance ? Or Chi-square ?

There are several leads:

- Information geometry: KL is a special case of [delta-divergences](https://web.archive.org/web/20080328095608/http://citeseer.ist.psu.edu/zhu95information.html) (comming from delta-connection) These divergences have the great advantage to be invariant by reparametrisation.
- Information theory: KL can be seen as the amount of information (in bits) missing to q in order to specify p. (conditional entropy). It is the average “surprise” of a incoming message drawn from q when you expect it arrived form p.
- Bayesian theory: KL minimisation can be “derived” from log-likelihood maximisation.
Invariance seems to be the more general requirement. Closeness beetween distribution should not depend on parametrisation and base measure.

Moreover the delta divergence point of vue gives us a better understanding of different appromate inference algorithm. Belief propagation, expectation propagation, variational bayes, mean field, tree reweighted belief propagation, power expectation propagation, generalised belief propagation are unified with delta-divergences. ([this paper](https://web.archive.org/web/20080328095608/http://research.microsoft.com/~minka/papers/message-passing/)).

The information theory justification seems weaker to me because it takes place in a theory of communication, requiring an emmitter, a channel and a receiver. However it’s intuitive and expressing divegence in bits shows the parametrisation independence.
Finally I’m still not sure of my derivation from Log Likelihood minimisation, especially in the continous case.

# Comments 
RSS feed for comments on this post. TrackBack URI

It looks like it seems to be a good measure of surprise in the human visual cortex (see Laurent Itti’s work at USC)
http://nuit-blanche.blogspot.com/2005/12/quantifying-wows-and-autism-how-many.html

Igor.

Comment by Igor Carron — May 19, 2007 #

As much as I like the KL divergence to measure distance between distributions, it has some disadvantages:

1. It is not symmetric
2. It cannot handle cases where the probability of one event is 0 in one distribution and non-zero in the other.

For these reasons, the Jensen-Shannon divergence (that builds on KL divergence) seems to be a better metric to use.

Comment by [Panos Ipeirotis](https://web.archive.org/web/20080328095608/http://behind-the-enemy-lines.blogspot.com/) — May 19, 2007 #

Panos : About the symetry desiderata. Why/when do you need it ?

In my applications, I’ve always had a non-symetry between p and q, from a semantic point of vue. For instance p is the true one, and q an approximation. Since they don’t play the same role, I don’t need a symetric divergence.

But I guess that in some contexts, it could be useful to have the symetry, or better, the metric propreties.

BTW, alpha-divergences (or delta-div) with alpha=0.5 and alpha=2 are true distances (Hellinger=Jensen-Shannon and Chi-squarred). (cf link in the post)

Comment by Pierre — May 25, 2007 #

The KL divergence can be derived as the maximum entropy in a distribution and this relationship does have it’s uses with solving some types of problems (Wake-sleep learning). Although, Shannon’s coding theorem (information transmission; -log n) would seem to be more relevant to ML applications.

Comment by [smw](https://web.archive.org/web/20080328095608/http://codebudo.com/) — July 3, 2007 #

One other way to look at relationships between KL and entropy : maximizing the entropy of a distribution is equivalent to minimizing its KL with the uniform distribution.

Comment by Pierre — July 3, 2007 #

Another justification of KL-divergence is that it’s an approximation of the natural (Fisher) metric on the space of distributions. That metric is natural because it makes the distance between distributions proportional to how hard it is to tell them apart based on a finite sample, and the measure of model complexity based on that metric seems to outperform other methods of model complexity http://omega.albany.edu:8008/bitnets/

Comment by Yaroslav Bulatov — July 4, 2007 #
