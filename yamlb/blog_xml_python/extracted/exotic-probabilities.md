---
title: Exotic probabilities
---

|*Original link*| http://yamlb.wordpress.com/2006/05/23/exotic-probabilities/|
|*Date*| 2006-05-23|
|*Status*| publish|

When we refer to the notion of probabilty, there are basically 2 main approches:
<ul>
	<li><strong>bayesian</strong>: based on Cox theorem: a probability is a positive real number representing a degree of belief.</li>
	<li><strong>frequentist</strong>: a probabilty is the limit of frequences in an infinite sequence of  random experiments.</li>
</ul>
In both cases, probabilities obey to Kolmogorov axiomatic, and in particular there are <strong>real numbers between 0 and 1</strong>.

The point of this post is : <em>Could we imagine defining probabilities with another set of numbers ?</em>

Does it make sense, and would it be useful, to define:
<ul>
	<li>probabilities greater than one ?</li>
	<li>negative probabilities ?</li>
	<li>complex probabilities ?</li>
	<li>quaternion probabilities ?</li>
	<li>...</li>
</ul>
In the fields of information theory (Shannon), game theory (von Neumann), classical statistics (Fisher), statistical physics (Boltzman-Maxwell-Gibbs) and statistical inference (Bayes-Jaynes), real number based probabilities have shown to be very productive. There is no reasons to change them, and to do without the useful underlying measure theory. On top of that the meaning of a, say, complex probabilty is counter intuitive and a bit confusing.

But there is <em>quantum mechanics</em>, where the wave function is a complex-valued function bringing all the information on a system. For instance the norm of this function is the probability density of the presence of a electron.

Instead of considering this norm, would it be possible to look at the complex number itself as a probabilty ? In this frameworks, would Feyman path integrals be a kind of marginalisation ? This would imply some constructive/destructive interferences when adding probabilities. What would be the interpretation of the phase part of a complex probabilty ?

I'm definitely not a quantum physicist, but I've found some theorical work on those ideas [<a title="youssef web site" href="http://physics.bu.edu/~youssef/">S.Youssef</a>]. This researcher argues that Cox requirements still holds when you consider measuring subjectives beliefs with complex numbers (or
quaternions for Dirac theory) on a distributive lattice of propositions (events). Then he argues that this simplifies a lot the interpretation of quantum mechanics and brings interessant results with Bell inequalities and renormalisation problems.

I can't judge the validty of those work, but I wonder why a so appealing theory isn't more studied.

Let's finish with a citation of a great physician,  Bill Jefferys:
<blockquote>There is no need to modify probability theory from any perspective
in order to do quantum mechanics. Bayesianism uses standard,
unmodified probability theory. Bayesian interpretations of QM use
standard, unmodified probability theory. [...] Such [complex, quaternion
probabilities] approaches are also not necessary and in my opinion
they confuse more than they illuminate.</blockquote>
# Comments


---
- author: **Pierre**
- date: 2006-05-24 09:58:26

Thanks for your comment.
Indeed, I prefer to see this as a kind of hierarchical modeling. If P(head)=q, if we don't know precisely q (q=0, q=1 or ???), we can consider q as a random variable itself, and put a probability density on it. Usually p(q)=Beta(a,b), the conjugate of the binomial. I guess that (a,b) are (more or less) the 2 numbers you are speaking about. IMHO, this is not linked with complex probability.

---
- author: **John C.**
- date: 2006-05-23 19:29:11

Certain two-number formulations have been used with relatively widespread appeal in the uncertainty reasoning community, such as the belief and plausability approach of Dempster-Shafer.  Here, the intuition is that for an unflipped coin we have no belief that it will be heads, it could be perfectly flawed towards tails (belief=0), but it is also plausable that it could be perfectly biased towards heads (plausability=1).  For a fair coin, these would converge towards 0.5.  

But, admittedly, these meta-probabilistic frameworks really do little to address your question, since they are really just using multiple probabilities, as opposed to starting from the foundations.

---
- author: **Julien**
- date: 2006-06-09 13:04:52

Hi Pierre,

Quoting Jaynes' book, page 30 :

<blockquote>
[...] qualitative correspondence with common sense requires that <i>w(x)</i> be a positive continuous monotonic function. It may be either increasing or decreasing. If it is increasing, it must range from zero for impossibility up to one for certainty. It it is decreasing, it must range from (infinity) for impossibility down to one for certainty. [...]
However, these two possibilities of representation are not different in content. [...] Therefore, there will be no loss of generality if we now adopt the choice 0 w(x) convention. 
</blockquote>

If I remember correctly, Jaynes also cites the case that raising w(x) to any arbitrary power does not change much either : w(x), w^2(x), ..., w^m(x) are all possibilities for obtaining a formalism that is coherent with the initial desiderata. 

Anyway, in summary, yes, you can mess up with the probability system somewhat to have it look stranger than it already is. ^_^

As for using multi-dimensional representations of single degrees of belief... That goes out of the scope of Jaynes' theory (look up the first desiderata). As such, it is similar to "croiser les flux", it is baaad. ;-) But... why not? 

Cheers,
Julien

---
- author: **Pierre**
- date: 2006-06-10 15:29:29

"Why not ?"
This is indeed the question.
Youssef says that it helps a lot for understanding QM, making some counter intuitive paradoxes disappear. And that Cox's requirements still holds.
Actually, QM *is* a probability theory on a space where operators don't commute.
Understanding QM is deeply related to understanding the notion of probabilty.
"Why not ?"
Maybe because 1-D probability densities are sufficient, according to Jefferys.