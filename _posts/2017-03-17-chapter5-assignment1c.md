---
layout: post
title:  "Assignment 5.1.c"
subtitle: "Block-element 2"
permalink: /chapter5/assignment1c/
categories: "Chapter5"
---
`<header>`, `<section>`och `<footer>` elementen fylls helt med p-element, det blir ett avstånd mellan elementen på grund av att <p>-taggen som standard har marginal före och efter.

Bakgrundsfärgen grå i sektionerna kommer att synas eftersom det kommer en genomskinlig marginal mellan <p>-taggarna. Den sista <p>-taggen i <section> skapar mellanrum till nästa element som är en annan <section> eller en <footer>. Dessutom är det så att om horisontella marginaler överlappar varandra syns bara den bredaste. Det blir alltså inte dubbla horisontella marginaler (vertikala adderas dock).
[Collapsande marginaler](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
