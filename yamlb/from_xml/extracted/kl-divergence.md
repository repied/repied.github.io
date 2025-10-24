---
title: KL divergence
---

|*Original link*| http://yamlb.wordpress.com/?p=10|
|*Date*| 1970-01-01|
|*Status*| draft|

The <a target="_blank" title="kl" href="http://eom.springer.de/K/k110180.htm">Kullback and Leibler divergence</a> is a common measure of the "distance" between two probability distributions. It's central in machine learning algorithm based on probabilities.

For instance, when trying to approximate a distribution p(x), we can try minimize KL(p,q) with q belonging to a particular class of distributions (ex: exponential family).

This is used in a lot of variational methods and approximate message passing algorithms.

But why using this divergence (which isn't a real distance)? Why not using L^2 distance ? Or Chi-square ?

I found several leads:
<ul>
	<li><strong>Information geometry: </strong>KL is a special case of <a title="information geometry" target="_blank" href="http://citeseer.ist.psu.edu/zhu95information.html">delta-divergences</a>. These divergences have the great advantage to be invariant by reparametrisation.<strong>
</strong></li>
	<li><strong>Information theory: </strong>KL can be seen as the amount of information (in bits) missing to q in order to specify p. (conditional entropy). It is the average "surprise" of a incoming message drawn from q when you expect it arrived form p.</li>
	<li><strong>Bayesian theory: </strong>KL minimisation can be derived from log-likelihood maximisation.</li>
</ul>
Invariance seems to be the more general requirement because it leads to a family of divergences. Exchanging KL with a delta-divergence in our algorithm can give a <a title="minka paper" target="_blank" href="http://research.microsoft.com/~minka/papers/message-passing/">better understanding</a> on what's really going on.

The information theory justification seems weaker to me because it takes place in a theory of communication, and it requires a subjective receiver.

Finally I'm still not sure of my derivation from Log Likelihood minimisation, especially in the continous case.