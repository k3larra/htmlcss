---
layout: post
title:  "Övning 17.2.b"
subtitle: "Huvudinnehåll"
permalink: /chapter117/assignment2b/
categories: "Kapitel17"
tags: "answer"
---
Navigering från meny till huvudinnehåll.

{%highlight html linenos%}
<!--Mer HTML ovan.-->
<!--Navigation-->
<a href="#cheese">
  <article class="article-properties">
    <p>Ost</p>
    <img class="image-properties" src="../images/dairy-cheese-etc-th.jpg" alt="Ost">
  </article>
</a>
<!--Mer HTML ovan.-->
<main>
  <section>
    <article class="article-detail" id="cheese">
      <h1>Ost</h1>
      <img src="../images/dairy-cheese-etc.jpg" alt="Ost">
      <p>
        Lorem ipsum text
      </p>
    </article>
    <article class="article-detail" id="milk">
      <h1>Mjölk</h1>
      <img src="../images/dairy-milk.jpg" alt="Mjölk">
      <p>
        Lorem ipsum text
      </p>
<!--kod för resten av sidan-->
{%endhighlight%}
<figcaption>HTML: Struktur för sidan, här har vi även lagt ett nav element i header.</figcaption>
{%highlight css linenos%}
/*Mer CSS-kod ovan*/
.article-detail {
  padding: 0.5rem;
  margin: 0.25rem;
  border: 1px solid black;
  border-radius: 2px;
  background-color: WhiteSmoke;
}

.article-detail>img {
  width: 50%;
  height: 12rem;
  float: left;
  padding-right: 1rem;
}

.article-detail>h1 {
  text-align: center;
}

/*Ta bort att besökta länkar ändrar färg etc.*/
a {
  text-decoration: none;
  color: black;
}
/*Mer CSS-kod efter*/
{%endhighlight%}
<figcaption>CSS för Gridmall</figcaption>
