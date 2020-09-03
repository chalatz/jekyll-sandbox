---
layout: page
title: 'Dates!'
items:
- date: 2020-05-03
  title: Title 1
- date: 2020-04-23
  title: Title 2
- date: 2020-04-03
  title: Title 3
---

{%- assign the_items = page.items | sort: 'date' -%}

{%- assign arr = page.items -%}

{%- for arr_item in arr -%}
  {%- assign arr_item.timestamp = 5000 -%}
{%- endfor -%}

{{ arr[0] }}

<hr>

{%- for item in the_items reversed -%}
    <p>
        Date: {{ item.date | date: '%b %d, %Y' }}, Title: {{ item.title }}
    </p>
{%- endfor -%}