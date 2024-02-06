---
title: About Mehran
---

<ul style='text-align: justify;'>
    {% for sum in site.data.summary %}
    <li> 
        {{ sum }}
    </li>
    {% endfor %}
</ul>

<!-- <img src="{{ '/' | relative_url }}public/skills.jpg">  -->