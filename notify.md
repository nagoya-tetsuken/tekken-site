---
layout: default
title: お知らせ
---

<article class="content-body">
  <h1>お知らせ</h1>

  {% assign posts = site.notices | where: 'published', true | sort: 'date' | reverse %}
  {% if posts.size > 0 %}
    {% for post in posts %}
    <div class="post-card">
      {% if post.cover %}
      <img src="{{ post.cover | relative_url }}" alt="{{ post.title }}" class="post-thumb">
      {% endif %}
      <p class="post-date">{{ post.date | date: "%Y/%m/%d" }}</p>
      <h2 class="post-title">{{ post.title }}</h2>
      {% if post.excerpt %}<p class="post-excerpt">{{ post.excerpt }}</p>{% endif %}
      <a href="{{ post.url | relative_url }}" class="read-more">続きを読む</a>
    </div>
    {% endfor %}
  {% else %}
    <div class="empty-state">
      <p>現在、公開されているお知らせはありません。</p>
      <p>お知らせを追加すると、ここに自動で表示されます。</p>
    </div>
  {% endif %}

  <p style="margin-top: 2rem;"><a href="https://x.com/nakoutetsuken" target="_blank" rel="noopener">X（旧Twitter）の公式アカウントはこちら</a></p>
</article>
