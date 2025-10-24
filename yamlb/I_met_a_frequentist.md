---
title: I met a frequentist
---

|*Date*| 2007-09-28|


... and the discussion raised issues with the IID assumption :

According to a classical definition (wikipedia):

> In probability theory, a sequence or other collection of random variables is independent and identically distributed (IID) if each has the same probability distribution as the others and all are mutually independent.

Now, let's consider the simple example of a repeated coin toss : let $x_i$ be the result of the i-th flip. **The question is "are they independent" ?**

This question should seem trivial to most people, but it seems that even this simple question can have different answers, depending on your approach of probability. A frequentist would say "YES", a bayesian would say "NO".

(note : my point is not to study in the details the physical process of tossing, and to ague that true independence never occurs in reality...)

No, let's consider the usual "perfect" model of a coin : $p(x_i)$ is a Bernouilli distribution : $p(x_i=\text{head}) = \theta$ and $p(x_i=\text{tail})=1-\theta$, with $\theta$ being the bias of the coin, summarizing all its physical properties.

## Firstly, let's consider the frequentist approach :

$\theta$ is not a random variable, this is the true physical (unknown) bias of the coin, which has a definite value. It doesn't make sense to speak of $p(\theta)$. In all textbooks, we find that the flips are IID. Why? Because the model says that the result of a flip doesn't have an influence on the next flip. This is because $\theta$ is fixed. The flips are (stochastically) influenced only by the true value of $\theta$, and nothing else. Then, we have independence, expressed as :

$$(1) : p(x_i | x_j) = p(x_i)$$

## Now, the bayesian point of vue :

Again, $\theta$ is the real physical bias of the coin, but, because bayesian probabilities represents subjective degrees of belief, it is completely Ok to see $\theta$ as a random variable, and to speak about distributions over $\theta$. The true value of $\theta$ is unknown, but we model our knowledge of its credible values by a probability distribution. It's then natural to state the naive bayes model:

$$p(x_i x_j \theta) = p(\theta)\ p(x_i | \theta)\ p(x_j | \theta)$$

in which $x_i$ and $x_j$ are not independent, but they become independent conditionally on $\theta$. Therefore, $x_i$ and $x_j$ are not independant, because past flip results give us information about $\theta$, which, in turn, changes our state of belief about futur flips. Then

$$(2) : p(x_i | x_j) \not= p(x_i)$$

but 

$$p(x_i | x_j, \theta) = p(x_i | \theta)$$

## Conclusions :

The 2 approaches, with similar models, give two different independency statements (1) and (2). This simple example shows that bayesianism and frequentism are different, and that their differences are not just about priors or large data asymptotic behaviors.

The true fundamental difference is their interpretation of probability : by using the frequency-limit interpretation, frequentists can't assign probabilities to parameters, and therefore need to rely on ad-hoc methods for doing statistical induction (by exploring the so called "sample space" : the space of all data sets, the observed one AND all others sets, not observed and imaginary). 

For instance, for predicting the next flip, frequentists need to produce a point estimation of the true $\theta$ (by a more-or-less-arbitrary-chosen method, for instance max-likelihood or the method of moments), and then plug this estimation in their parametric model to do a prediction.

Bayesian just average over the posterior distribution of $\theta$,

$$(3) : p(x_n+1 | x_0 \dots x_n) = \int_\theta p(x_n+1 | \theta) \ p(\theta|x_0 .. x_n) \ d\theta$$

In the machine learning community, more and more people accept the bayesian interpretation, but there still exist strong frequency advocates. My opinion is that the bayesian way is better to tackle such real data problems, with a modeling part. 

But, during a recent discussion, I started to write eq.(3) and my frequentist partner stopped me : 
> "No, this is false, because $p(x_n+1 \| x_0 .. x_n) =p(x_n+1)$  and that's all ! [...] "

Hugh, then the discussion was quite difficult to continue   Especially because it was during a job interview and the interviewer was a highly skilled statistician... too bad...

---

## Comments

1.  Wow, an encounter with a frequencist in an interview for a job that I would really want is one of my worst nightmare. Seriously, it keeps me awake at night.

    Comment by BenE — September 28, 2007 

2.  I think here the problem might be that the definition of "independence" doesn’t apply to bayesian interpretations or at least it doesn’t apply in the same way. I think that when bayesians claim independence they mean something more like causal independence. That performaing the experiment doesn’t influence the physical context of subsequent experiments. In the case of repeated trials, this means every trial is actually estimating the same thing in the same context (only our knowledge as changed).

    Comment by BenE — September 28, 2007 

3.  ...or otherwise if there is in fact something that changes between experiments, we take it into account by integrating it out.

    Comment by BenE — September 28, 2007 

4.  I’m an undergrad interested in machine learning. I’ve seen many arguments for bayesian methods on the internet, but I haven’t been able to find any arguments on the frequentist side. In the interest of fairness, could anyone point me to some frequentist arguments against bayesianism? (Personally, I don’t see what the big fight is about, because I have no problems with interpreting bayesian belief probabilities as frequencies of possible worlds.)

    Comment by Abram Demski — September 29, 2007 

5.  Wrong question. As a Bayesian, probabilities are not physical objects and neither is independece (which is a mathematical property of the probability distribution being used).

    Thus _a coin toss_ is neither "dependent" nor "independent": that is a question for the _model_ which represents our knowledge of the coin toss, not the coin toss itself.

    Comment by anon — September 30, 2007 

6.  Thanks for the comments.

    BenE: Up to my knowledge, "independence" has the same math. definition in both cases : "factorizability" of the joint. But eq.(1) and (2) are not contradictory, because they apply to different functions : "p" doesn’t mean the same thing in the 2 eq. (limit of frequencies or beliefs)

    Abram: I don’t have such frequentist arguments, and I would be happy to find a frequentist, who truly understand the bayesian approach, to ask him such arguments. Usually, people reproaches to bayesian methods
    (1) their non-objectivity (2) the pb of prior specification (3) intractability of computations.
    From Skilling :
    " There are many excuses for not using a Bayesian approach. The only true one is incompetence." ;-) "
    More seriously, this 1986 JSTOR paper is interesting.
    I personally think that it’s a social phenomena due to the historical development of statistics.

    Anon: Of course, the question is about independences in the 2 models.

    Comment by Pierre — October 1, 2007 

7.  Abram : beliefs and frequencies of "possible" words are actually quite different things ! One is subjective, and the other is objective. If you have a bayesian robot, do you think that "possible" words will change when you upgrade its program (his model of reality represented with some belief function)?
    Do you think that the physical proprieties of the coin changes when I give you the information that I produced the coin with 2 "heads" ? Your beliefs change, but the "possible" world do not ; except if you define "possible" world in a subjective way ;-)

    Comment by Pierre — October 1, 2007 

8.  Very interesting! May be you should have answer to the frequentist partner:
    $p(x_n+1 | x_0 .. x_n, \theta) = p(x_n+1|\theta)$

    and that the distribution of $X_n+1$ depends on the parameter estimation of $\theta$ (knowing that it’s a Bernouilli law with an unknown parameter $\theta$).

    This estimation is done on previous experiments $x_0 .. x_n$. Thus the probability distribution of x_n+1 depends on $x_0 .. x_n$. No ?

    Comment by b. j.-m. — October 1, 2007 

9.  Yes, this is the idea. But a fundamentalist won’t accept to write $p(\dots\| \dots \theta)$, because this supposes that $\theta$ is a random variable, it supposes that $p(\theta)$ is defined, which is not true from the frequentist point of view.

    Comment by Pierre — October 1, 2007 

10. Thanks for the link to the paper. And of course I don’t mean that the probability of possible worlds changes when we decide on a different prior. But we get better results if we choose a prior closer to the actual distribution. So (to adhere to the frequentist definition of probability) we can say there is such a thing as "the actual distribution" out there, which we have beliefs about. That’s my view, anyway.

    Comment by Abram Demski — October 1, 2007 
