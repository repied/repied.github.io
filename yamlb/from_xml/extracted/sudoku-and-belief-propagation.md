---
title: Sudoku and Belief Propagation
---

|*Original link*| http://yamlb.wordpress.com/2006/03/06/sudoku-and-belief-propagation/|
|*Date*| 2006-03-06|
|*Status*| publish|

Last month, with <a href="http://www.inrialpes.fr/movi/people/gargallo/">Pau</a>, we tried to solve a fashionable problem with a fashionable algorithm.

We implemented loopy B.P. on the sudoku graph : one node for each bin of 
the sudoku grid, edges linking bins of the same row, column or region, 
and compatibility matrix = ones(9)-eye(9).

Our conclusions are :
<ul>
        <li>as it was predictable, this straightforward implementation isn't a 
good algorithm for solving Sudoku.</li>
	<li>LBP converged to the good solution for simple sudokus,</li>
	<li>but failed to converge or converged to a wrong solution for difficult 
sudokus.</li>
        <li>maybe a "dual" approach considering numbers as nodes could give better 
results, but we think this problem is intrinsically difficult for BP, because 
of the "you-can't-be-like-me" rule.</li>
</ul>

We recently heard of other people working on these ideas, with other results.


# Comments


---
- author: **Yaroslav Bulatov**
- date: 2006-03-07 09:13:25

might find this interesting http://blogs.zdnet.com/emergingtech/?p=177

---
- author: **Christopher**
- date: 2006-03-07 10:45:21

With regards to using BP to solve sudoku, I was wondering whether probabilistic methods are suitable for solving a "correct/wrong" problem. In the case of sudoku, the solution is either wrong or correct. Sudoku is of a different nature to problems such as the travelling salesman problem where a probabilistic methods gives approximately good solutions.

Returning to sudoku, it might be possible to put constraints on the system either explicitly or implicitly by changing the topological representation of the nodes.

---
- author: **Pierre**
- date: 2006-03-08 11:28:47

Yaroslav: Thanks for all your comments. For this particular one, I had a look on the link, it's quite difficult to understand what is exactly the "difference-map algorithm" they use. However, there exists good deterministic algorithms for sudoku (cf wikipedia), we think that BP has no chance to outperform them, but as its success in loopy random fields are not well understood, we just tried it. If it was successful (but it wasn't), it would have been an elegant solution in the sense that we didn't had to think too much about the pb, we just translated the rules in a graph+matrix and let BP run.

---
- author: **Pierre**
- date: 2006-03-08 15:41:15

Chritopher: I disagree when you say that sudoku and TSP are of different nature. I think that there exists approximate solutions to sukoku, some better that others (nb of wrong numbers, nb of unsatisfied constraints). And then it's possible to see suduku as an optimisation problem, and to apply variational approaches.
For your 2nd remark, I totaly agree. Adding redundant contraints or devising a better topology could better the convergence of BP.

---
- author: **Yaroslav Bulatov**
- date: 2006-03-10 04:22:42

The reporter made it sound like a monumental discovery, but I couldn't make much sense of the PNAS paper either, thought perhaps somebody else could

---
- author: **Yaroslav Bulatov**
- date: 2006-03-10 04:26:01

A general comment, if you are using WordPress, it would be cool to have a sidebar with all the recent comments (like on John L.'s blog)

---
- author: **Pierre**
- date: 2006-03-10 10:41:42

Done. ;-)

---
- author: **paper shredders**
- date: 2006-12-21 06:44:15

The presence of short cycles in the graph creates biases so that not every puzzle is solved by this method. However, all puzzles are at least partly solved by this method