---
title: MLWG Session 2 Apprentissage bayésien
---

Par Pierre Dangauthier, mercredi 18 mai 2005 en C 207 à 16 heures

## Introduction 

L'apprentissage bayésien tente d'apporter une théorie mathématique solide pour guider nos construction de programmes apprenants. Il s'agit ici d'utiliser les notions mathématiques de probabilités et des notions de statistique dans le but d'apprendre des modèles à partir de données, puis d'utiliser ces modèles afin d'établir des prédictions.

Dans la communauté des statisticiens, deux écoles se distinguent, les fréquencistes et les bayésiens (voir [wikipedia](http://en.wikipedia.org/wiki/Bayesian_probability) pour plus d'info). 

Beaucoup de techniques d'apprentissage peuvent se reformuler en tant qu'approximations, restrictions de la solution bayésienne.

La suite vient de http://hunch.net/ :

Bayesian learning is a simple process of:
* Specify a prior over world models.
* Integrate using Bayes law with respect to all observed information to compute a posterior over world models.
* Predict according to the posterior

Bayesian learning has many advantages over other learning programs:

* *Interpolation* Bayesian learning methods interpolate all the way to pure engineering. When faced with any learning problem, there is a choice of how much time and effort a human vs. a computer puts in.  When creating an engineered system, you build a model of the world and then find a good controller in that model. Bayesian methods interpolate to this extreme because the Bayesian prior can be a delta function on one model of the world. What this means is that a recipe of *think harder* (about specifying a prior over world models) and *compute harder* (to calculate a posterior) will eventually succeed. Many other machine learning approaches don't have this guarantee.
* *Language* Bayesian and near-Bayesian methods have an associated language for specifying priors and posteriors. This is significantly helpful when working on the *think harder* part of a solution.
* *Intuitions* Bayesian learning involves specifying a prior and integration, two activities which seem to be universally useful.

With all of these advantages, Bayesian learning is a strong program. However, there are also some very significant disadvantages.

* *Information theoretically infeasible* It turns out that specifying a prior is extremely difficult. 
* *Computationally infeasible* Let's suppose I could accurately specify a prior over every air molecule in a room. Even then, computing a posterior may be extremely difficult. This difficulty implies that computational approximation is required.
* *Unautomatic The *think harder* part of the Bayesian research program is (in some sense) a *Bayesian employment* act. It guarantees that as long as new learning problems exist, there will be a need for Bayesian engineers to solve them. (Zoubin likes to counter that a superprior over all priors can be employed for automation, but this seems to add to the other disadvantages.)

*Integration In Bayesian learning*, the posterior is computed by an integral, and the optimal thing to do is to predict according to this integral. This phenomena seems to be far more general. *Bagging, Boosting, Svm, and Neural Networks* all take advantage of this idea to some extent. The phenomena is more general: you can average over many different classification predictors to improve performance. Sources: Zoubin, Caruana



## Références 
[Un chapitre par Zoubin Ghahramani sur l'apprentissage non supervisé](http://emotion.inrialpes.fr/~dangauthier/MLWGStuff/ChapitreUnsupervisedLearningZoubin.pdf)


[Information Theory, Inference, and Learning Algorithms](http://www.inference.phy.cam.ac.uk/mackay/itila/book.html), livre en ligne de David Mackay.
