---
title: Experiences
---

{% for exp in site.data.experiences %}
## {{ exp.role }}
<h2 class="company-name">{{ exp.company }}</h2>
<ul style='text-align: justify;'>
    {% for resp in exp.responsibilities %}
    <li> 
        {{ resp }}
    </li>
    {% endfor %}
</ul>
{% endfor %}