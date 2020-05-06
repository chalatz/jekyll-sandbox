---
layout: page
title: 'Dates!'
items:
- date: 2020-05-03
- date: "2020-04-03"
- date: "2020-04-23"
---

{%- for item in page.items -%}
    <p>
        Date: {{ item.date | date: '%b %d, %Y' }}
    </p>
{%- endfor -%}