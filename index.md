---
title: Dig Dan Dig!
layout: base
---
<header class="site-header">
  <img src="{{ '/logo.png' | url }}" alt="Dofu Games Logo" class="logo">
  <h1>Dofu Games</h1>
</header>

<div class="game-section">
  <div class="game-content">
    <h2>Dig Dan Dig!</h2>
    <p>Dig for resources and trade them for powerful biological upgrades in this incremental mining adventure. Transform yourself beyond human limits to escape the underground!</p>
    <div class="store-links">
      <a class="store-link" href="https://store.steampowered.com/app/4934650/Dig_Dan_Dig/" target="_blank" rel="noopener">
        <img class="store-icon" src="{{ '/steam-icon.svg' | url }}" alt="Steam" eleventy:widths="56" eleventy:formats="png">
        <span>Wishlist on Steam</span>
      </a>
    </div>
    <div class="game-background">
      <img src="{{ '/dig-dan-dig-background.png' | url }}" alt="" role="presentation" eleventy:formats="jpeg">
    </div>
    <div class="subscribe-wrapper">
      <p class="subscribe-text"><a href="https://dofugames.substack.com/subscribe">Subscribe for development and demo news!</a></p>
      <div class="substack-iframe-container">
        <iframe src="https://dofugames.substack.com/embed" width="480" height="150" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </div>
</div>

<!-- <div class="posts-section"> -->
<!--   <div class="posts-grid"> -->
<!--     {%- for post in collections.posts reversed %} -->
<!--     <a href="{{ post.url }}" class="post-card-link"> -->
<!--       <article class="post-card"> -->
<!--         <h3>{{ post.data.title }}</h3> -->
<!--       </article> -->
<!--     </a> -->
<!--     {%- endfor %} -->
<!--   </div> -->
<!-- </div> -->
