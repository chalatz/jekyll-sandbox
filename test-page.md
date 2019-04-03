---
layout: page
title: Test page
date: 2018-04-10 11:26:53 +0000
group: {}
object:
  text_1: Κείμενο 1
  text_2: Κείμενο 2
  text_3: Κείμενο 3
choose_from_object:
- text_1
- text_3

---

{% for post in site.posts limit: 1 %}
{{ post.content | split: '<p>' }}
{% endfor %}

<ul>
  {%- for option in page.choose_from_object -%}
    <li>{{- page.object[option] -}}</li>    
  {%- endfor -%}
</ul>

<ul>
  {%- for item in page.object -%}
    <li>key: {{ item[0] }}, value: {{ item[1] }}</li>    
  {%- endfor -%}
</ul>