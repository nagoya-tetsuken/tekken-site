---
layout: default
title: お知らせ
twitter_username: nakoutetsuken
---

<article class="content-body">
  <h1>{{ page.title }}</h1>
  <div class="twitter-container">
    <a class="twitter-timeline"
       data-width="800"
       data-height="600"
       data-dnt="true"
       data-theme="light"
       href="https://x.com/{{ page.twitter_username }}">
      @{{ page.twitter_username }} の投稿
    </a>
  </div>
</article>

<script>
(function () {
  function renderTimeline() {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(document.querySelector('.twitter-container'));
    }
  }

  if (window.twttr && window.twttr.widgets) {
    renderTimeline();
    return;
  }

  var script = document.createElement('script');
  script.src = 'https://platform.twitter.com/widgets.js';
  script.async = true;
  script.charset = 'utf-8';
  script.onload = renderTimeline;
  document.head.appendChild(script);
})();
</script>
