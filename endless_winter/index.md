# Bienvenue sur le wiki de Powder Never Ends

Ici, c'est le wiki, c'est-à-dire qu'on peut tous y mettre nos informations. Chaque page est modifiable par tout le monde en cliquant sur le bouton "Editer cette page" en haut à gauche. Comme ça, le Khone pourra corriger les fautes d'orthographe. Pour plus d'informations concernant le fonctionnement du wiki, voir la page [Aide Wiki](wiki:aideWiki).

Paloma tenait à montrer son appréciation de notre projet... j'y travaille à mort... sur le projet, pas la péruvienne... enfin pas trop. Je passe le mic' à la belle :

> **Hola a todos! Me gusta mucho su pagina wiki aunque no entiendo lo que dice porque no hablo frances... Soy la secretaria personal de master Mathieu y como les dijo el trabajo mucho al servicio de Francia. Bueno eso es todo hasta la proxima!**  
> -Paloma-

## But du wiki

Le but c'est d'aider à l'organisation, en mettant toutes nos infos, liens internet, prix des billets, lieux, etc. en ligne. C'est facile et ça peut être très pratique.

## Plan

La page [Plan](plan) est le plan. Il faut la mettre à jour quand vous créez une nouvelle page.


## 2025: frozen wiki pages

{% for file in site.static_files %}
  {% if file.path contains 'endless_winter/' %}
  - [{{ file.name }}]({{ file.path | relative_url }})
  {% endif %}
{% endfor %}
