---
title: Privatg&auml;rten
layout: default
css1: "projekte2.css"
css2: "privat.css"
css-add: "#projekte {background: #c4b3a1;} #projekte:hover {background: #c4b3a1} .button3 #privat {background: #c4b3a1;} .button3 #privat:hover {background: #c4b3a1} .button3 #privat {margin-right: 0%;} #mm {border: 1px white solid;}"
navbar: 3

---

{% for i in (1..3) %}
<div id="pre_bl_{{ i }}">
{% for item in site.data.pro-priv.docs %}
{% assign min = i | minus: 1 | times: 4 %}
{% assign max = i | times: 4 | plus: 1 %}
{% if forloop.index > min and forloop.index < max %}
{% assign number = forloop.index %}
{% if forloop.index < 10 %}
{% assign number = forloop.index | prepend: "0" | truncate: 2, "" %}
{% endif %}
<div id="blank"></div>
<a href="{{ number }}.html" class="project-button"><h3>Projekt {{forloop.index}} - {{ item.title }}</h3></a>
{% endif %}
{% endfor %}
</div>
{% endfor %}

{% comment %}
<div id="blank"></div>
<a href="{{ number }}.html"><img src="../bilder/projekt{{ number }}.png" class="link1" alt="Projekt {{item.index}} - {{ item.title }}" width="100%" height="100%"></a>
{% endcomment %}
