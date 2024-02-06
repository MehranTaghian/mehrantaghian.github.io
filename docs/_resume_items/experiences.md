---
title: Experiences
---

{% for exp in site.data.experiences %}
## {{ exp.role }}
<h2 class="company-name"><img src="{{ '/' | relative_url }}public/{{ exp.logo.name }}" alt="Logo" style="width: {{ exp.logo.width }};"/>{{ exp.company }}</h2>
<p class="post-date"> {{ exp.from }} - {{ exp.to }}</p>
<ul style='text-align: justify;'>
    {% for resp in exp.responsibilities %}
    <li> 
        {{ resp }}
    </li>
    {% endfor %}
</ul>
{% endfor %}