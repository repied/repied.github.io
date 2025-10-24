---
title: MLWG Session 3  Filtre de Kalman
---

Par Christopher Tay, le mercredi 25 mai 2005 en salle C208 à 15h30.

## Introduction 

Le filtre de kalman est souvent utilise dans le domaine de tracking. Mais on peut le poser aussi comme une forme d'inference dans le monde dynamique. Une notion intuitive de filtre de kalman, est la relation avec le filtre de bayes sera presentée. Vu que le filtre de kalman n'est pas parfait, les alternatives sont egalement presentée en bref.

Voici un petit text de Wikipedia qui introduit le filtre de kalman:

The Kalman filter is an efficient recursive filter which estimates the state of a dynamic system from a series of incomplete and noisy measurements. An example of an application would be to provide accurate continuously-updated information about the position and velocity of an object given only a sequence of observations about its position, each of which includes some error. It is used in a wide range of engineering applications from radar to computer vision. Kalman filtering is an important topic in control theory and control systems engineering.

The filter is named after its inventor, Rudolf E. Kalman, though Peter Swerling actually developed a similar algorithm earlier. Stanley Schmidt is generally credited with developing the first implementation of a Kalman filter. It was during a visit of Kalman to the NASA Ames Research Center that he saw the applicability of his ideas to the problem of trajectory estimation for the Apollo program, leading to its incorporation in the Apollo navigation computer. The filter was developed in papers by Swerling (1958), Kalman (1960) and Kalman and Bucy (1961).

## Documents 

Et la dérivation des équations matricielles du filtre à partir de l'expression en tant que filtre bayésien : en attachment en haut a droite de cette page [ ou first.ps http://ocean/wiki/plugin/attachments/KalmanMLWGSessionTrois/first.ps]


## Références 

[Repositoire](http://www.cs.unc.edu/~welch/kalman/) de beaucoup des papiers sur le filtre de kalman. 

[Wikipedia](http://en.wikipedia.org/wiki/Kalman_filter) introduction
