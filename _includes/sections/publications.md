{% assign papers = site.publications | where_exp: "paper", "paper.category != 'patent'" | sort: 'date' | reverse %}
<div class="search-row">
  <input id="publication-search" type="search" placeholder="Search title, topic, venue, or year…" aria-label="Search publications">
  <span class="count" id="publication-count" role="status">{{ papers.size }} papers</span>
</div>

{% for paper in papers %}
  {% include portfolio/publication-card.html paper=paper %}
{% endfor %}

<p id="no-results" class="empty" hidden>No publications match. Try a different title, topic, or year.</p>
