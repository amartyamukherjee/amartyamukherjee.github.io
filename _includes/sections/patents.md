{% assign patents = site.publications | where: 'category', 'patent' | sort: 'date' | reverse %}
{% for paper in patents %}
  {% include portfolio/publication-card.html paper=paper patent=true %}
{% endfor %}
