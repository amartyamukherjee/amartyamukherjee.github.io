{% assign talks = site.talks | sort: 'date' | reverse %}
{% for talk in talks %}
<article class="entry">
  <div class="entry-meta">{{ talk.date | date: '%B %Y' }}</div>
  <h3>{{ talk.title }}</h3>
  {{ talk.content | markdownify }}
</article>
{% endfor %}
