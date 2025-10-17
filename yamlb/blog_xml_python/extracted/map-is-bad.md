---
title: MAP is BAD
---

|*Original link*| http://yamlb.wordpress.com/2006/02/15/map-is-bad/|
|*Date*| 2006-02-15|
|*Status*| publish|

Maximum A Posterori, is often used when people design bayesian based algorithms. Sometime it is good, sometime not. We have to understand why.

In the correct bayesian approach, the result of the inference is a probability distribution. The <strong>entire</strong> distribution <strong>is the</strong> solution. Of course, In a lot of concrete problems, a hole distribution cannot be used as an output, you need to have just an element. For instance, when you drive robots, the motors need to be fed with ONE value and not a distribution.

So in such cases, we have to choose one number (lets says that the distribution is on real numbers), who is the <strong>"best"</strong> representative of the entire distribution (which is a function, so which is an infinity of real numbers in term of information content).

There is absolutely no reason to think that the MAP is always the best. And I can give common situations where it's a bad idea to take the MAP. Example: if the posterior is the sum of a big gaussian centered on 0, and of a really sharp peak (a Dirac) centered on 100. If I have to choose a representative, I'd choose 0, which is not the MAP. Actually it depends on the problem, and one has to carefully think on which representative should be taken. Candidates are
<ul>
	<li>MAP</li>
	<li>mean (really bad if several big modes)</li>
	<li>draws(can lead to oscillations in the motor command)</li>	
       <li> max of the posterior "convolved" with a shifting windows (in order to smooth it)</li>
</ul>
For this last idea, there is a parameter, the window size, which depend on the application. This last idea isn't just a trick, I think that it's closely related to <strong>automatic Occam razor</strong>("marginalised likelihood"). Actually this is not a real convolution, but rather a discretisation. <strong>Discretisation is a complex problem, much more fundamental than it's usually thought.</strong>

Another clear example were MAP is BAD is the estimation of a gaussian mixture modelling a set of points. The MAP, with a flat prior, is clearly achieved when you put as many gaussians as points, each of them with zero std (diracs). 

Another way to simply explain why MAP is bad, is saying that MAP maximises the <strong>probability density</strong>. But the density itself has no meaning, this is not a "belief". In general, the density isn't a function, it's a distribution, in sens of Schwartz (Dirac...)

What is relevant is the <strong>probability</strong>, which is an integration of the density around a point. <em><strong>The real problem-dependant question is to decide the size of the area we integrate on.</strong></em>
That's why the marginalised likelihood makes sense, when you consider it as a posterior with uniform prior integrated on a subregion of the space. That's why there is

(Again, this follows a discussion with <a href="http://www.inrialpes.fr/movi/people/gargallo/">Pau,</a> lots of ideas are from him)
# Comments


---
- author: **Yaroslav Bulatov**
- date: 2006-03-04 10:10:29

There's another reason MAP is bad -- it's not invariant to reparametrization. In other words, if you reparametrize your model, and use MAP, it will lead to different inference decisions. So for applying MAP, the modeller needs to choose a "good" parametrization (however that's found), so it's one more place to make a bad modelling decision. I wrote up a small note showing this in a coin-tossing example -- http://web.engr.oregonstate.edu/~bulatov/research/reports/bad_map.ps

---
- author: **Pierre**
- date: 2006-03-08 11:56:42

Thanks, that's a really clear example.

---
- author: **Yaroslav Bulatov**
- date: 2006-04-02 10:21:41

Here's a related paper I just came across -- <a href="http://www-sop.inria.fr/ariana/personnel/Ian.Jermyn/publications/InvariantBayesianEstimationAnnStat.pdf" rel="nofollow">INVARIANT BAYESIAN ESTIMATION ON MANIFOLDS</a>.