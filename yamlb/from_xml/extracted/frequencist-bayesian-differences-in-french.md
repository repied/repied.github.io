---
title: Frequencist/bayesian differences in french
---

|*Original link*| http://yamlb.wordpress.com/2006/04/12/frequencistbayesian-differences-in-french/|
|*Date*| 2006-04-12|
|*Status*| publish|

This is my reply following some posts on the <a href="http://math-et-physique.over-blog.com/article-2295006-6.html#anchorComment">Mathéphysique french blog</a> of Fabien Besnard. It shows that the difference between bayesian and frequencist interpretation of probabilities <strong>is definitely leading to</strong> differences on pratical case.
<br>
<br> <em>The problem is the following: You are in front of an urn with an unkown number of labelled balls. You pick the ball number 2. How many balls are in the urn ? Is 10 more likely than 1000 ?
<br> The same problem arise when you try to guess the number of Taxis in an unknown city after seeing the number of one of them</em> (see <a href="http://research.microsoft.com/%7Eminka/papers/uniform.html">Minka paper</a>).
<br><br> In short, frequencists proposes several estimators, bayesians propose to use the Pareto as conjugate distribution of the uniform one. With prior knowledge (K!=0), bayesian posterior (or even point representation of the posterior) permits better prediction, better generalisation, and avoids overfitting.
<br> 

> Il y a beaucoup de chose dans votre message, et beaucoup de chose que j ai envie de commenter, mais je vais essayer de me focaliser sur quelques points. D'abord il peut être intéressant de faire la distinction entre théorie des probabilités (modelé mathématique rigoureux et non (peu) discuté) et son application au vrai monde, c'est a dire une théorie physique, qui s'appelle les statistiques. En théorie des probabilités (axiomatique de Kolmogorov, théorie de la mesure) on a pas besoin d'interprétation et il n y a donc pas débat freq/bay. On a des variables aléatoires avec des propriétés mathématiques, comme la loi des grands nombres. Cette dernière est un théorème issu des axiomes, et ne confirme en rien une interprétation ou l autre. Par contre, des que j'étudie le monde, le débat émerge, car selon ma position, je ne ferai pas les mêmes calculs sur mes données. Vous parlez d'estimateurs, un concept typiquement frequenciste qui n a pas vraiment de sens en bayesien. C est la dépendance des estimateurs sur des donnes non observées qui pose pb.
> <br> 
> <br> <strong>L'interprétation des probas a pour conséquence une approche statistique différente, c est comme ça,</strong> le débat n est pas la, si vous n étés pas d accord,et bien vous vous trompez ;-). Un bayesien ne calculera jamais un "estimateur sans biais" ni un intervalle de confiance et un frequenciste ne calculera jamais une densité a posteriori, ni de proba sur les paramètres d un modèle.
> <br> 
> <br> Pour ce qui est de votre exemple, on peut comparer les deux approches, mais faut aller rigoureusement jusqu au bout pour voir que ça ne donnera pas les même résultats.
> <br> 
> <br> <em>Le PB est : moi, expérimentateur, j ai une urne devant moi dont je ne vois pas la taille, mais de laquelle j ai tiré un 2. Et je veux dire si il est plus "probable" qu' il y ait 10 ou 1000 boules.</em>
> <br> 
> <br> Pour les deux approches, soit k le nb de boules au total, alors k appartient a IN. <strong>Notre espace des possibles est IN.</strong>
> <br> 
> <br> <strong>* Approche frequenciste:</strong> Déjà on a un PB, car comme il n y a qu' une seule et unique urne, k est fixe et non de nature aléatoire, k a une certaine valeur, a la limite et par convention on peut dire que c est une var. aléatoire constante, de proba 0 partout et 1 dans sa vraie valeur. Alors la question de savoir si il est plus probable k=10 ou k=1000 n a pas de sens du tout. La question qui a un sens est de construire un estimateur de cette valeur k a partir des données. Un estimateur k^ (le chapeau est sur le k) est une heuristique ayant de "bonnes" propriétés, y en a autant qu' on peut avoir de définition de "bonne". Il est courant de prendre l estimateur de max. de vraisemblance k^=ArgMax_k P(Donne; si le parm. est k). Ici on a 1 donnée, et il est raisonnable de modéliser P(D;k)=unif(1..k). Alors k^=ArgMax (1/k si k=&gt;2, 0 sinon)=2. L'estimateur de maxVraiss est k^=2, c est comme ça, bien qu il soit peut intuitif. Cet estimateur k^=D n'as pas la bonne propriété d'être sans biais car E[k^]=E[D]=k/2 != k. On peut alors proposer comme autre estimateur k^^ = 2D, qui est sans biais. Bref, il a plein d d'estimateurs, en choisir un a qq chose de subjectif, non ? Et on a pas répondu a la question, car on dit des fois que k=4, et des fois que k=2, ... Mais aucune procédure frequenciste ne permet de trancher objectivement entre 10 et 1000.
> <br> 
> <br> <strong>* Approche bayesienne:</strong> Ce qui manque a l approche frequenciste, c est de pouvoir dire qu on aime mieux les petites urnes. Sans ça, on ne peut rien dire de plus que k&gt;=2. (Cette impossibilité de dire plus de choses se traduit par l impossibilité de préférer un estimateur a un autre).
> <br> Ici on a un PB réel, un PB physique qu on veut résoudre. Et on sait des choses sur le monde physique, comme par exemple que l urne ne peut pas être arbitrairement grande. C'est ce que le philosophe pensait intuitivement, il apportait des connaissances autres que le strict énoncé. Dans le vrai monde, les petits nb de boules sont plus fréquent que les grands, donc un observateur a une plus grande CROYANCE que l urne soit petite que grande. Cette croyance depend de plein de choses, elles est subjective, elle depend de l experience passée de l'observateur (jamais vu d urne de la taille de la terre) mais aussi de conseils qu on a recu (ma mere ma dit qu'il n existait pas plus de 1000 boules sur la terre), et aussi de modele physique (cette urne de 1m3 ne peut contenir plus de 20000 de boules)... Cette Croyance est difficile a colecter, a formaliser ( c est un GROS point faible du bayesien), mais en admettant qu on l ait formalisee sous forme d un fonction de IN entre 0 et 1, alors on va faire les raisonnement "optimaux".
> <br> Dans l'exemple, comme la proba est une mesure de croyance, je peux mettre des probas sur les evenements k=1, k=2 ..., je peux considerer k comme une variable aleatoire (le terme aleatoire est historique, car en bayesien je peux parler de proba meme si il n y a pas d'exp.aleatoire, si tout est determiné. D'ailleurs il est diffcile de definir le hasard, de savoir si le monde est deterministe ou pas. Tout ceci est flou, en tout cas pour moi). Bref, j ai une urne, j ai tiré un D=2 et je me pose la question parfaitement definie P(k=10 | D=2) &gt;?&lt; P(k=10000 | D=2). Pour cela je peut faire le rapport et je dois utliser Bayes : P(10|2)/P(1000|2) =  P(2|10)/ P(2|1000)  *  P(10)/ P(1000). On a toujours la vraissemblance  P(D|k)=unif(1..k) ce qui donne au premier terme la valeur 100, le pb est le 2eme, le prior.
> <br> Pour choisir ce prior P(k), y a plusieurs ecoles, et une biblio de these a faire. Il faut integrer la contrainte de normalisation (Summ P(k) = 1) et aussi notre a priori de decroissance, voir de nullité apres un seuil. C'est un boulot de modelisation de ses connaissances. D'autre part gens se posent des pb d'ecoles comme : et si on sait rien ? Et si on sait juste que E[k]=1500 ? et si on veut que notre prior influence le moins possible ? et si on veut que le resultat ne depende pas d'un certaine transofrmation sur k ? et si on veut que les calculs soient faciles ?
> <br> Une option courrante est de pendre un prior parametrique conjugé, c est a dire facile a manipuler et suffisamment souple pour representer notre croyance. Ici on veut surtout la decroissance en k, d'une force reglable f. Le prior qui va bien est celui de Pareto de parametre (1,f). Sans renter dans les details, on arrive au final sur P(10)/ P(1000)=(100)^(f+1). Donc dans le rapport des posteriors on voit que les donnee donnee 100 fois plus de confiance en la valeur 10, et que notre a priori lui donne une confiance (100)^(f+1) fois plus grande. Tant que f&gt;0 (ie decroissance), 10 est bien plus "probable" que 1000. Une anlyse mathematique plus fine montre qu au pire si on prend un "prior plat" (mm si il n est pas normalisé), on a un rapport de 100^2. Dans ce cas, le mode du posterior est egale a l estimateur de maxVrai frequenciste, et sa mediane a l estimateur sans biais. Mais ce ne justifie pas l approche frequenciste, c'est une "coincidence".
> <br> 
> <br> <strong>Donc, en definite les frequencistes, ne voulant pas utiliser de prior sur k, ne peuvent pas dire plus que ce qu ils disen</strong>t. Les bayesiens galerent pour formaliser leurs priors pour un pb donné, mais une fois que c est fait, ces infos permettent de dire plus de choses sur le pb, forcement. Il est vrai qu'en freq, on aurrait pu considerer un double exp aleat. imaginaire, on aurrait pu considerer que l urne elle meme etait tiree et donc que k etait une V.A. Mais dans ce cas il faut definir cette population imaginaire d urnes, ce qui revinent exactement a donner un prior sur k, et dans un cadre vachement plus boiteux que le bayesien (exp. imaginaire mal definie peut entrainer des paradoxes (Bertarnd)).
> <br> 
> <br> Le frequencisme c est mal quand on l applique sans comprendre, c est mal quand on refuse de prendre des infos qu on a pourtant, c est mal quand on interprete mal ses resultats (pvalues), c'est mal car faut toujours d inventer de nouvelles techniques (estimateurs) pour chaque pb, <strong>mais surtout c est mal quand on croit que c est un methode objective</strong>. On ne peut pas avoir des conclusions sans faire d'hypothese, avoir des priors ca fait chier, mais c'est necessaire. Sinon, on se voile la face, on cache ses hypotheses dans des procédures obscures.
> <br> 
> <br> En résumé :
> <br> <em>&gt; il n'y a pas de différence calculatoire entre bayésien et fréquentiste,</em>
> <br> Si ! il y en a. On n'utilise pas les meme informations, on ne calcule pas les meme quantités, on ne fait pas les memes predictions. Et meme si dans certains cas on fait numeriquement le meme calcul, ca ne veut absolument pas dire qu'on en tire les meme conclusions.


# Comments


---
- author: **Fabien Besnard**
- date: 2006-04-13 09:46:24

Un bayesien ne calculera jamais un “estimateur sans biais" ni un intervalle de confiance et un frequenciste ne calculera jamais une densité a posteriori, ni de proba sur les paramètres d un modèle.

C'est vraiment très manichéen non ? On a l'impression que selon toi on est bayésien par définition quand on applique certaines méthodes. Mais cela revient à changer la définition de ce terme qui pour moi renvoi avant tout à une interpréation la théorie des probabilités. Si ce que vous dites était vrai cela reviendrait à remettre en cause l'unité de la science. On aurait deux camps qui ne pourraient pas se parler, ni comparer leurs résultats. Je soutiens, mais peut-être me trompe-je, qu'au contraire on peut avoir une attitude positiviste, s'en remettant aux prédictions de la théorie et à ses vérifications expérimentales. Ce qui ne signifie pas que les interprétations n'aient aucun intérêt, j'ai d'ailleurs écrit que celles-ci inspiraient une méthode plutôt qu'une autre.
Je lis la suite.

---
- author: **Fabien Besnard**
- date: 2006-04-13 10:11:15

Bien, j'ai lu et je n'ai rien vu de différent que ce que j'ai déjà écrit sur mon blog. Vous confondez, c'est probablement une déformation professionnelle, la méthodologie et l'interprétation. Il est clair que les deux méthodologies que vous décrivez sont inspirées chacune par un "camp", mais je peux parfaitement interpréter vos "prior" bayésiennes d'un point de vue fréquentiste. Et in fine c'est ce qu'il faudra faire si on veut comparer nos résultats avec une expérience. En effet, vous avez parfaitement résumé le point de vue fréquentiste, a priori on ne peut rien dire sur k. C'est un point de vue philosophique si l'on veut, mais il correspond parfaitement à la situation idéalisée telle qu'elle est décrite : il manque une information, et dans le monde étheré des mathématiques on ne peut rien faire sans cette information. Ce que vous faite dire ensuite au baysésien c'est qu'on peut deviner d'une certaine manière cette information manquante. Mais vous changer subrepticement de monde, vous passer d'un énoncé idéalisé à un énoncé sur le monde réel. Et tout fréquentiste qu'on soit, on peut parfaitement admettre que dans le monde réel k a été choisi d'une certaine manière. Si on ne connait pas la loi de k (car si on la connait on passe alors à un exo de proba, et exit la dichotomie méthodologique) on va faire appel à différentes heuristiques qui ont peut-être été inspirées par les bayésiens mais que je peux parfaitement reprendre à mon compte de façon pragmatique, quel que soit mon point de vue sur la question (j'ai aussi le droit d'être agnostique ou de manger à tous les rateliers). In fine, le fréquentiste dira quelle que chose du genre "en faisant l'hypothèse supplémentaire que la loi de k est ... alors P(k=10\|D=2)=..." et le baysésien "en utilisant la prior bidule on trouve P(k=10\|D=2)=...", ce qui revient exactement au même !

---
- author: **Yaroslav Bulatov**
- date: 2006-04-16 03:00:13

In principle, nothing stops a frequentist from using an estimator that is identical to the Bayes estimator with Pareto Prior, (motivated by practical performance). Similarly, there's nothing restricting Bayesians to Pareto prior. 

I think the key difference between Bayesian and frequentist is how they communicate the inductive bias underlying their estimators. Bayesians use "Bayesian prior", whereas frequentists use labels like sufficiency, minimaxity, or simply "good performance on datasets A,B,C".

So the Bayesian vs. frequentist debate IMHO is about which language to use to encode our prior knowledge. The language affects the way we think, so that's why I think in practice Bayesians and frequentist end up coming up with different estimating methods.

---
- author: **Mich blum from michigan**
- date: 2006-07-06 21:51:01

Hye Pierre,

I am glad to see that your blog is still active. Your toy exemple (the taxi problem from Minka) is nice but is not of practical purposes in the real world. I think that the big difference between frequentist and bayesian approaches comes from the operational algorithm used to adress a specific problem. Basically frequentists use maximization algorithms (such as EM) whereas bayesians use algorithms that perform integration (MCMC, Gibbs...). Let me give you a concrete exemple that comes from population genetics. Populations geneticists want to perform clustering of individuals based on genetic data. But more than that, they want to know the admixture proportions for each individual. For instance, assume that there are 2 populations (France-Italy), they want to know for each individual, the proportion of the genome that is Italian and the proportion of the genome that is French. So assuming K (usually around 5) populations and n (between 50 and 1000) individuals, there are at least n^K parameters to infer which is enormous. For sure, the likelihood landscape is complicated and an optimization algorithm will be stuck in a local optima. Be bayesian, use MCMC and to know the answer, just wait 48 hours looking at the screen of your computer.

---
- author: **Pierre**
- date: 2006-07-10 13:31:32

Hye Mich blum from michigan !

I just partly agree with your statement. That's true that frequentists estimates are often point estimations, but, in a way, one could see confidence intervals as a kind of "integration" of estimations.

On the other hand, bayesian posteriors (possibly approximated with MCMC) are real "integration", but a lot of methods rely on MAP, which is a point estimation.

In this view, bayesianism is better because you <strong>know</strong> that the best answer is the <strong>hole</strong> posterior distribution, even is you sometimes take a point representation of this function for computational reasons.

Anyway, by representing a infinite dimensional (the posterior, or the likelihood) object with just a point, you surely loose a lot of its information. That's why this decision should be done the latter possible in your inference process.

By the way, for youy example, I think you mean K^n instead of n^K for the number of parameters.

Cheers,
Pierre dang from Cambridge.
