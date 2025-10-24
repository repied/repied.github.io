---
title: Which “Bayesian” are you ?
---

|*Original link*| http://yamlb.wordpress.com/2006/03/14/which-bayesian-are-you/|
|*Date*| 2006-03-14|
|*Status*| publish|

Nowadays, it seems to be very fashionable to be <strong>a bayesian</strong>, and it would certainly be interesting to compare <em>P(accepted) </em>and <em>P(accepted|"bayesian blabla" in the title)</em> for the same article across different computer science-related communities.
But what exactly people mean when they apply to themselves the adjective "bayesian"? Here is a proposal, based on the (small) knowledge I have on a (small) sample of communities:
<ul>
	<li><em>I'm a bayesian if </em> I use the word "<strong>probability</strong>".</li>
	<li><em>I'm a bayesian if </em> I use the word "<strong>conditional </strong>probability".</li>
	<li><em>I'm a bayesian if </em> I use <strong>Bayes' rule</strong>.</li>
	<li><em>I'm a bayesian if </em> I use Bayes' rule in order to make <strong>inference</strong>.</li>
	<li><em>I'm a bayesian if </em> I think that probabilities represent <strong>states of knowledge.</strong></li>
        <li><em>I'm a bayesian if </em> I think that probabilities represent states of knowledge and I <strong>also  </strong> consider my parameters as random variables. </li>
	<li><em>I'm a bayesian if </em> I think that probabilities represent states of knowledge and I use <strong>priors </strong>(no MaxLikelihood). </li>
	<li><em>I'm a bayesian if </em> I think that probabilities represent states of knowledge and I use priors and I use <strong>priors on priors</strong> (hierarchical models).</li>
	<li><em>I'm a bayesian if </em> I think that probabilities represent states of knowledge and I use <strong>subjective </strong>priors.</li>
        <li><em>I'm a bayesian if </em> I think that probabilities represent states of knowledge and I use priors and I never use <a href="http://emotion.inrialpes.fr/~dangauthier/blog/2006/02/15/map-is-bad/">MAP</a>.</li>
</ul>

Theses categories are not ordered neither incompatible for some of them. Other ideas ?
# Comments


---
- author: **Yaroslav Bulatov**
- date: 2006-03-14 22:50:38

I think the key aspect that distinguishes Bayesians from other probabilistic camps is the idea that our prior knowledge is specified in the form of real-valued function over belief states. By contrast, for MaxEnt and minimax camps, prior knowledge is specified as constraints on the space of models

MAP may sound more like MDL, but it's sometimes motivated as a crude approximation to the full BMA integral.

---
- author: **hal**
- date: 2006-03-16 16:37:42

In my mind, anything but the first five on your list (and maybe the 5th, but that's borderline) are reasonable (this agrees with Yaroslav's comment above).  Note that you don't really need to <i>believe</i> these things: you just need to behave as if you do.

---
- author: **Pierre**
- date: 2006-03-20 15:23:07

Hal: Do you want to stress a kind of insincerity among the "bayesian" community ? ;-) .
I understood your comment as "to be a bayesian, just behave as if you believe that porbabilities are...", was it the meaning of your comment ?

---
- author: **hal**
- date: 2006-03-21 02:31:37

Pierre: I didn't mean to imply Bayesians are insincere.  But I don't think it's bad to use something you don't believe (entirely) in either.  When people posit a model for a problem, almost by definition they don't believe this model is true.  But this model can still be useful.  For instance, several people I know use GPs to solve certain classification problems, but I have no idea if any of them actually believe in the Bayesian paradigm.

---
- author: **Yaroslav Bulatov**
- date: 2006-03-22 04:25:12

Bayesians who don't believe in their priors=Objective Bayesians. Like Wasserman and Bernardo. So here, the view is that Bayesian approach provides a good averaging technique, rather than being "the most logical thing to do"

I find it surprising that anybody actually believe their priors represent their knowledge. Even for something as simple as coin tossing, Bayesian prior is a function over reals, so it specifies a degree of belief for uncountably many points. Do we really believe that at each point, there's a corresponding "internal belief state" that matches exactly what the prior specifies? 

There are other ways in which priors we pick may not correspond to our beliefs, ie, there's non-invariance to reparametrization and Bertrand's paradox.

Another example of the strangeness -- one tosses a coin, and they have a belief that coin is *not* fair. So they want the inference procedure to favour the tails, and so they guess that this knowledge can be represented by using Bayesian approach with Beta(0,0) prior since Beta(0,0) concentrates the mass towards the tails. But using Bayesian Model Averaging with this prior is equivalent to Maximum Likelihood which does not favour the tails, so the guess was wrong. 

(*Technically Beta(0,0) is improper, but you can do BMA in the limit as a,b-&#38;gt;0)

---
- author: **Pierre**
- date: 2006-03-22 20:31:43

Bernardo proposes some "reference priors", ie priors of reference, priors you can use when you don't know how to define a subjective prior. Those priors are defined in the way that they are the most "weak", the  "less informative" priors you can find. Then I gess that he can still think that "bayesian is the most logical thing to do".

I'm also confused by the meaning of "probability density", of "belief density" for the continuous case. As I remember, Jaynes advice to stay on the finite cases, and then to check if passing to the limit is valid.

For the non-invariance discussion, I agree that picking a prior without enough care often lead to priors not matching our belief. The problem is even more difficult in high dimensional, or topologically strange spaces. How to check a prior ?

---
- author: **Julien**
- date: 2006-04-25 12:21:09

Just a little anecdote. I gave part of a talk at a "Bayesian Cognition" workshop last fall. It was a three day workshop, with speakers from communities as varied as robotics, neuroscience, experimental psychology. 

My talk was on the first day. The first speaker of the second day was a philosopher, and he introduced his speech by a summary of how much the first day had been un-Bayesian. He listed the talks of the previous day, mentionning at each time how the subject treated or model proposed was not Bayesian. As for my talk, he said something along those lines, as far as memory serves :

"The first model presented, by Julien D., concerned human navigation. After his talk, I went to him and asked him what exactly was Bayesian about his model. He answered, quite honestly I think, that his model was not *really* Bayesian. He said : "You know, for us engineers, Bayesian roughly means "using probabilities""".

I'm actually rather proud of the "quite honestly I think" in the above comment. :D

In other words, and to go back to the topic, defining "Bayesian" is difficult. It gets much easier when you specify which community you're referring to. In robotics nowaydays, for instance, Bayesian often refers to work using probabilities (as opposed to, say, fuzzy logic). In cognitive neuroscience, it's more demanding, because people there are more used to the distinction between MLE and Bayesian estimations. 

As for the "picky" vocabulary and distinction in the above commentaries between Objective Bayesians, subjective freqentists, etc, I learned them today, reading this site. As long as the definition is clear, I don't mind using the same word for yet another meaning. 

You just have ot be sure the one you're talking to uses roughly the same meaning. :D

My 2c
Julien

---
- author: **Pierre**
- date: 2006-04-25 13:44:13

Hi Julien, nice to read you here.
Concerning your anecdote, it was actually the inspiration of this post ;-)
I totaly agree with you, this is a problem of vocabulary.
But even in robotics engeenering, beeing "more" bayesian could (and do) serve.