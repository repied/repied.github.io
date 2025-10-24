---
title: Inference methods
---

|*Original link*| http://yamlb.wordpress.com/2006/03/03/inference-methods/|
|*Date*| 2006-03-03|
|*Status*| publish|

List of inference methods I've heard about:
<ul>
	<li> <em>Exact and numerical</em> : reorganizing sum and products for exact inference on discrete variables (juction tree)</li>
	<li><em> Exact and analytical</em> : using conjugate priors, posteriors can be analytically derived.</li>
	<li> <em>Appoximation by sampling</em> : All kind of sampling including the family of Markov chains Monte Carlo methods (Gibbs sampling seems to be often used)</li>
	<li> <em>Approximation with variational approach</em>: mean field, message passsing, belief propagation, (expectation propagation?). They consit in minimising a "distance" between the searched distribution with a member of  a class of candidate distributions</li>
	<li><em>Approximations based on posterior modes</em> : Laplace approximation, EM-related algorithms</li>

</ul>



# Comments


---
- author: **Yaroslav Bulatov**
- date: 2006-03-07 09:10:51

Maybe you've seen this before, Wainwright shows a very cool way to derive message passing algorithms through variational approach http://research.microsoft.com/uai2004/Slides/Wainwright.pdf

---
- author: **Pierre**
- date: 2006-11-20 21:18:36

Some corrections/precisions:

Belief propagation is exact on trees (de-localization of computations), expectation propagation and variational method are similar in the sense they are both minimizing a KL divergence between the true posterior p and an approximate one (q). But EP tries to (locally) minimize KL(p,q) and variational minimizes KL(q,p). This makes a difference, because the first leads to a "conservative", "secure", "inclusive" approximation, and variational results are too confident.
Mean Field is a simple variational method.
Also EM can be understood in the framework of variational approximation.
Loopy Belief propagation can be seen as a special case of EP with a fully factorized approximation family.
There are also all those "free energy minimization" methods, Kikuchi approximation, Generalised  belief propagation and Tree reweightseted BP stuff. 

Ouf !!!