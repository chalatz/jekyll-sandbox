---
layout: page
title: 'Dates Strings'
items:
  - date:
      year: '2020'
      month: '12'
      day: '03'
    text: 3 Dec 2020
  - date:
      year: '2020'
      month: '12'
      day: '18'
    text: 18 Dec 2020
  - date:
      year: '2020'
      month: '12'
      day: '20'
    text: 20 Dec 2020
  - date:
      year: '2019'
      month: '10'
      day: '15'
    text: 15 Oct 2019
  - date:
      year: '2019'
      month: '12'
      day: '15'
    text: 12 Oct 2019
  - date:
      year: '2020'
      month: '05'
      day: '11'
    text: 10 May 2020
---

{%- assign years_group = page.items | group_by: 'date.year' -%}
{%- assign sorted_years = years_group | sort: 'name' -%}

{%- for y_group in sorted_years reversed -%}
  {%- assign months_group = y_group.items | group_by: 'date.month' -%}
  {%- assign sorted_months = months_group | sort: 'name' -%}
  
  {%- for y in sorted_months reversed -%}
    {%- assign days_group = y.items | group_by: 'date.day' -%}
    {%- assign sorted_days = days_group | sort: 'name' -%}
    {%- for day in sorted_days reversed -%}
      {%- for d in day.items -%}
        <p>
          {{d.text}}
        </p>
      {%- endfor -%}
    {%- endfor -%}
  {%- endfor -%}
{%- endfor -%}