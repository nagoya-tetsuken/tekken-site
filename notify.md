---
layout: default
title: お知らせ
---

<article class="content-body notice-page">
  <h1>お知らせ</h1>

  {% assign posts = site.notices | where: 'published', true | sort: 'date' | reverse %}
  {% if posts.size > 0 %}
    <div class="notice-list">
      {% for post in posts %}
      <article class="notice-item">
        <div class="notice-header">
          <time class="notice-date" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%Y/%m/%d" }}</time>
          <h2 class="notice-title">{{ post.title }}</h2>
        </div>
        {% if post.cover %}
        <img src="{{ post.cover | relative_url }}" alt="{{ post.title }}" class="notice-image">
        {% endif %}
        <div class="notice-body">
          {{ post.content }}
        </div>
      </article>
      {% endfor %}
    </div>
  {% else %}
    <div class="empty-state">
      <p>現在、公開されているお知らせはありません。</p>
    </div>
  {% endif %}

  <p class="x-link"><a href="https://x.com/nakoutetsuken" target="_blank" rel="noopener">X（旧Twitter）の公式アカウントはこちら</a></p>
</article>
