---
title: Ultimate machine learning algorithm ?
---

|*Original link*| http://yamlb.wordpress.com/2006/04/19/ultimate-machine-learning-algorithm/|
|*Date*| 2006-04-19|
|*Status*| publish|

J. Langford on his <a title="blog" target="_blank" href="http://hunch.net/?p=176">blog</a> said:
<blockquote>"I am probably extreme as a machine learning person in wanting highly (or fully) automated methods"</blockquote>
After reading another post on <a href="http://ml.typepad.com/machine_learning_thoughts/2006/03/freakonomics.html">O.Bousquet blog</a>, it seems to me that the main difficulty for having "fully automated methods" is to automate the collection and the encoding of preliminary knowledge.

Whatever you call it, "prior probability", inductive bias, loss function, etc, this knowledge you (a human) have about a problem is fundamental for good results. Relying just on, say, a 2 hours movie of data for learning what is a human face in a noisy video seems to me impossible. For instance, for the problem of face tracking in images, a *huge* prior knowledge is coded in the shape and functionality of our body (eye, brain...) and a "smaller part" was acquired during life.

Then if we want "fully automated methods" for this kind of difficult real world problems, do we have to simulate those million years of evolution ? Does a "fully automated methods" need to contain all the knowledge for all the problems ? It seems difficult and recalls past temptatives to design a general problem solver, able to solve all problems...

In my opinion, taking into account this prior knowledge is the key idea, and one advantage of the bayesian approach is to say this explicitely. (even if deriving a prior function is far from easy!)

[EDIT] What's funny is that O. Bousquet has just made another <a target="_blank" href="http://ml.typepad.com/machine_learning_thoughts/2006/04/extracting_info.html">post</a> saying extracting knowledge from experts is <em>as important as</em> extracting it from data. Indeed when focussing to a particular class of problem, the preliminary knowledge is in experts minds.
# Comments


---
- author: **Olivier Bousquet**
- date: 2006-04-24 17:58:02

Hi Pierre,

Interestingly you saw exactly where I was heading to!
I agree hundred percent with you: the key is in the prior knowledge.
And the Bayesian approach makes this prior knowledge somewhat explicit. I say 'somewhat' because the prior distribution usually does not completely reflects the prior knowledge, for many different reasons (the knowledge cannot be easily expressed as a probability distribution, using a Gaussian approximation makes things easier, the knowledge is not explicit and thus a standard prior distribution is used...).
So now comes the question: what should we spend our efforts for? designing better algorithms or providing new ways to formalize and incorporate knowledge into algorithms?
And for me the answer is clear (especially because designing better algorithms does not make much sense except in a very restricted and properly defined framework).