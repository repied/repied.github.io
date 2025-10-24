---
title: MaxLikelihood doesn’t exists !
---

|*Original link*| http://yamlb.wordpress.com/2006/02/15/maxlikelihood-doesnt-exists/|
|*Date*| 2006-02-15|
|*Status*| publish|

After a discussion with <a href="http://www.inrialpes.fr/movi/people/gargallo/">Pau</a>, it appears to me that the conventional <strong>Maximum Likelihood</strong> point estimation doesn't exists, I mean that it is actually a <strong>Maximum A Posteriori</strong> with an uniform prior.

Why am I stressing this, although it's obvious as soon as you studied probabilities ? Because I think that people who use ML methods are thinking they don't use any prior, that they are "objective", and that, if they have a problem, that can't be the fault of a bad prior, simply because they don't have any prior.

But actually, the assumption of a uniform prior <strong>is</strong> a big assumption. It's indeed often admitted that there is no such things as "informative priors", and at least   the flat one isn't non-informative at all.

In the correct bayesian method, one should consider carefully his priors, so a approach that consider by default a flat prior isn't following this correct approach.

In other word, maximising the likelihood of a model as no fundamental justification, the likelihood is just a function, and doesn't represents any sort of "belief" or "probability". The only correct way is to think to it in terms of posterior with flat prior. Likelihood maximisation was a heuristic in orthodox statistics (for example in parameter estimation), and this is all it can be.

Once you have a good prior, then you can think that your posterior is the product of a prior and a likelihood, and then you can think to those 2 terms as being some function of the model $P(M\|D)=CST* P(D\|M) P(M)= CST * f1(M) * f2(M)$. Then its correct to reason on them, for instance for thinking to the so-called <strong>automatic Occam razor</strong>, who'll be the subject of another post.

# Comments


---
- author: **Pierre**
- date: 2006-02-16 13:55:28

Pau, you disagree because of the non existance of flat prior on infinite space. Then what ?

---
- author: **pau**
- date: 2006-02-18 16:20:57

Uniform pdf on the real numbers don't exist, so a uniform prior on a real variable can not be assumed. However, the likelihood can be considered instead of the posterior to obtain the desired effect.
Beside this, one must be aware that uniform priors are not non-informative. If someone knows what non-informative means, please explain.

And concerning the post title, as long as the likelihood is a well-behaved bounded function, it will have a max.

---
- author: **pau**
- date: 2006-02-18 16:23:18

i hope you are happy. you have 1 reader ;-)

---
- author: **Yaroslav Bulatov**
- date: 2006-03-04 10:05:29

I think ML is better viewed from Empirical Risk Minimization standpoint than Bayesian. IE, you are trying to fit a model to data as hard as you can. If you are able to prove that your training error is close to test error (which you can do under some conditions, through Statistical Learning Theory), then minimizing training error (in this case, log-likelihood) also minimizes test error, and hence is the right thing to do.

As far as noninformative priors, Pau, you aren't the only one that thinks they don't exist -- http://www.isds.duke.edu/research/conferences/valencia/Dialogue.pdf

---
- author: **Pierre**
- date: 2006-03-13 17:04:37

This paper is really interresting and pleasant to read. Bernardo explains his "reference priors", that are non-subjective priors maximising the amount of information brought by data. He presents lots of good properties of them. But they are often improper. In this case, Bernardo advice that "one should not interpret them as probability distribution", but rather as a "technical device" to produce non-subjective, proper and "sensible" posteriors. Sensible means "of value for scientifique communication". More explainations are in the text.
