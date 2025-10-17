---
title: Maximum entropy and bayesian updating
---

|*Original link*| http://yamlb.wordpress.com/2006/04/26/maximum-entropy-and-bayesian-updating/|
|*Date*| 2006-04-26|
|*Status*| publish|

When I was young, I was thinking that there were one "best" way for belief updating (Bayes). I was also thinking that the problem with that was the definition of priors, and that, in certain cincunstances, the Maximum entropy principle was helpful.

In short I was thinking that "bayesian belief updating" and "maximum entropy" were two <strong>othogonal</strong> principles. But it appear that they are not, and that they can even be in conflict !

Example (from <a target="_blank" title="The Selection of Prior Distributions by Formal Rules" href="http://links.jstor.org/sici?sici=0162-1459(199609)91%3A435%3C1343%3ATSOPDB%3E2.0.CO%3B2-U">Kass 1996</a>); consider a Die (6 sides), consider prior knowledge <strong>E</strong>[X]=3.5.

Maximum entropy leads to P(X)= (1/6, 1/6, 1/6, 1/6, 1/6, 1/6).

Now consider a new piece of evidence A="X is an odd number"
<ul>
	<li>Bayesian posterior <em>P(X|A)= P(A|X) P(X) = (1/3, 0, 1/3, 0, 1/3, 0)</em>.</li>
	<li>But MaxEnt with the constraints <em><strong>E</strong>[X]=3.5</em> and<em> <strong>E</strong>[Indicator function of A]=1</em> leads to <em>(.22, 0, .32, 0, .47, 0) !!</em>  (note that <em><strong>E</strong>[Indicator function of A]=P(A)</em>)</li>
</ul>
Indeed, for MaxEnt, because there is no more '6', big numbers must be more probable to ensure an average of 3.5. For bayesian updating, P(X|A) doesn't have to have a 3.5 expectation. P(X) and P(X|a) are different distributions.
Conclusion ? MaxEnt and bayesian updating are two different principle leading to different belief distributions. Am I right ?
# Comments


---
- author: **Aleks**
- date: 2006-04-26 18:33:08

The notion of the MaxEnt "prior" (as it also appears) is totally different from the notion of the Bayesian prior.

Instead, E[X]=3.5 is a *constraint*. Similarly, "X is odd" is also a constraint. Where do these constraints come from? Well, in statistical inference (or machine learning) you'd need to infer them from the data. Or, if they are indeed prior constraints, you'd zero out those parts of the prior parameter space that violate those constraints.

But one can combine MaxEnt and Bayes in the same framework. I often like to express my distributions in terms of parameters that are effectively constraints (parameterization-by-constraints). One would use MaxEnt to obtain the distribution given those constraints, but this is often difficult.

See <a rel="nofollow" href="http://dx.doi.org/10.1063/1.1835243">On The Relationship between Bayesian and Maximum Entropy Inference</a> by Cheeseman &#38; Stutz.

---
- author: **Pierre**
- date: 2006-04-27 14:32:59

Indeed, here event A is a constraint and not a piece of data as usually thought. Shimony (1973) showed that if we exented the space so that constraints are events and conditionalization is equivalent to MaxEnt, then, as you said, constraints will have prior probability one.

Thanks for the link, seems interesting, but the paper isn't freely available. Is there a "preprint" somewhere?

---
- author: **hal**
- date: 2006-04-27 22:48:40

<a href="http://mailgate.supereva.com/sci/sci.stat.consult/msg05289.html" rel="nofollow">This post</a> by Radford Neal might be of interest.

---
- author: **Yaroslav Bulatov**
- date: 2006-04-28 09:25:55

With MaxEnt there's a lot of freedom in choosing how data is converted into constraints. So while  subjective Bayesians are often criticized for arbitrary priors (by people like Wasserman), MaxEnt people are critized for their arbitrary data-&#38;gt;constraint conversion mechanism (by people like Radford Neal)

In Wasserman's example, I think there are better ways to set the constraints from data. For instance if we observed "dice landed on 1", his suggested method would contradict the previous constraint, so MaxEnt method would provide no solution. If we dropped the previous constraint, we'd get a solution, but a bad one.

We can motivate better MaxEnt constraints by the observation that observed counts and true counts will not be very far from each other. We can use tools from Statistical Learning Theory to figure out what is "far" and set constraints accordingly (range constraints on expected values). Miroslav Dudik did work in that direction and managed to get theoretical guarantees as well as good practical performance (http://www.cs.princeton.edu/~mdudik/PhillipsDuSc04.pdf)

But back to the topic, I agree that MaxEnt and Bayesian approaches can produce different inferences. Bayesian approach provides a unique way to incorporate data into your inference. But MaxEnt doesn't specify how to incorporate data, so people do all sorts of things -- constrain expected values of X, constrain expected values of Log X, constrain the median of the distribution, use inequality constraints, etc. 

(Uffink talks more about it http://www.citeulike.org/user/yaroslavvb/article/102807)

BTW, since you brought up Wasserman's priors paper, here's a paper from last MaxEnt conference that gives a cool justification of Jeffrey's prior http://web.engr.oregonstate.edu/~bulatov/papers/goyal-prior.pdf

---
- author: **David Corfield**
- date: 2006-05-04 12:24:36

Following up one of the references from the last comment, I see there are two overlapping papers out this year:

Y. Altun and A. Smola, <a href="http://ttic.uchicago.edu/~altun/pubs/AltSmo-COLT06.pdf" rel="nofollow">Unifying Divergence Minimization and Statistical Inference via Convex Duality</a>.

M. Dudik and R. E. Schapire,  <a href="http://www.cs.princeton.edu/~mdudik/DudikSc06.pdf" rel="nofollow">Maximum entropy distribution estimation with generalized regularization</a>.

They seem to be general enough to allow a good part of statistical learning theory inside.

---
- author: **Machine Learning (Theory) &#38;#187;**
- date: 2006-07-08 21:02:50

[...] A few weeks ago I read this. David Blei and I spent some time thinking hard about this a few years back (thanks to Kary Myers for pointing us to it): [...] 

---
- author: **Pierre**
- date: 2006-07-10 13:01:48

This discussion is also continued on

http://hunch.net 

and 

http://www.dcorfield.pwp.blueyonder.co.uk/2006/07/conditionalization-as-i-projection.html