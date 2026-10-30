{% for post in site.posts %}
<article class="entry">
  <div class="entry-meta">{{ post.date | date: '%B %Y' }}</div>
  <h3>{{ post.title }}</h3>
  <details class="photo-journal">
    <summary>View the photo journal</summary>
    {{ post.content | markdownify }}
  </details>
</article>
{% endfor %}
