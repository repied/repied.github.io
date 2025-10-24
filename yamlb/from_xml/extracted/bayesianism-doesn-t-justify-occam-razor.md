---
title: Bayesianism doesn’t justify Occam Razor
---

|*Original link*| http://yamlb.wordpress.com/2006/02/15/bayesianism-doesnt-justify-occam-razor/|
|*Date*| 2006-02-15|
|*Status*| publish|

One could say that someone is starting to be a bayesian when he understand what is Automatic Occam Razor. I won't introduce it, but have a look on slides or papers from Neal or Ghahramani to find out some explanations.

Let's take the example of a mixture of gaussian model for modelling the density of a sample of points. The parameter space is the cartesian product : A=<strong>R</strong>^2*<strong>R</strong>^4*<strong>R</strong>^6*...*<strong>R</strong>^2n*...*<strong>R</strong>^(2*infinity), because one has to chose the numb re of gaussians (K) in <strong>N</strong>, and for each one, to choose the mean (m) and standard deviation (s).

For the moment, let's choose and uniform (improper argh!) prior on this space A. The MAP is a point in <strong>R</strong>^(nb of data), but it's clearly not a good solution for us. Why ? 
<ul>
	<li>because it has no theoretical reason to be a good solution (see previous post)</li>
	<li>because this model is able to generalised (the same data set with one point slightly moved will give an almost zero probability to the model)</li>
	<li>because this model has as complex (in the sens of information weight) as the data set, then one can say we summarised nothing, we learnt nothing</li>
</ul>

Bayesian people can find a better model, even <strong>even with a flat prior on K</strong>, by, in a first step finding the optimal K, the most probable K, by using the marginalised likelihood (I don't like this name), ie by marginalising on each <strong>R</strong>^2K space.
After choosing that K (which is small thanks to automatic Occam razor, ie thanks to the marginalisation), one can just run EM to find the most probable (m,s) knowing K.

Remark: marginalising is not easy, the BIC is an approximation.

What I want to add is that the way to marginalise on (m,s) spaces is a little bit arbitrary, here it's intuitive to find K in the first step, but in a general problem, where we don't have a clear semantic on the parameters, other methods to subdivide the A space before marginalising can be good. In the mixture problem K controls the complexity of the model, but could we find problem where marginalising regarding a normal parameter can lead to a good solution ?
I think so, because, more than the convenient idea of Occam razor (which can be discussed...), this is working because we want very probable models, and not just with high density. We want models in an local area with a lot of probability mass. The difficult question is the size and the shape of the area.

That's why I think that congratulating our self for this "automatic Occam" is <strong>not</strong> really relevant. This feature appear in bayesian statistics just because we <em>choose to marginalise regarding a parameter controlling complexity</em>, but <strong>this is just a choice</strong>, and this is not a justification of the "simplicity is better" philosophy.
