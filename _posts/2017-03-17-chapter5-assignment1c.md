---
layout: post
title:  "Övning 5.1.c"
subtitle: "Block-element 2"
permalink: /chapter105/assignment1c/
categories: "Kapitel5"
tags: "answer"
---
`<header>`, `<section>`och `<footer>` elementen fylls helt med p-element, det blir ett avstånd mellan elementen på grund av att <p>-taggen som standard har marginal före och efter.
<p data-height="265" data-theme-id="light" data-slug-hash="dvQMBb" data-default-tab="html,result" data-user="k3lara" data-embed-version="2" data-pen-title="Övning 5.1.c" class="codepen">See the Pen <a href="http://codepen.io/k3lara/pen/dvQMBb/">Övning 5.1.c</a> by Lars Holmberg (<a href="http://codepen.io/k3lara">@k3lara</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
Bakgrundsfärgen grå i sektionerna kommer att synas eftersom det kommer en genomskinlig marginal mellan <p>-taggarna. Den sista <p>-taggen i <section> skapar mellanrum till nästa element som är en annan <section> eller en <footer>. Dessutom är det så att om horisontella marginaler överlappar varandra syns bara den bredaste. Det blir alltså inte dubbla horisontella marginaler (vertikala adderas dock).
[Collapsande marginaler](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
