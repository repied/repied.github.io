---
title: "GIF files"
---

<ul>
{% for file in site.static_files %}
    {% assign path_without_dir = file.path | remove_first: page.dir %}
    {% unless path_without_dir contains '/' %}
      <li><a href="{{ file.path | relative_url }}">{{ file.name }}</a></li>
    {% endunless %}
{% endfor %}
</ul>
