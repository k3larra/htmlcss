---
layout: post
title:  "Övning 17.2.a"
subtitle: "Navigation"
permalink: /chapter117/assignment2a/
categories: "Kapitel17"
tags: "answer"
---
Mall för Gridlayout som fyller ut hela sidan. Vi har i koden även lagt in ett `nav` element i header. Nedan visas de centrala delarna för att skapa en meny där alltid samtliga menyval finns med oberoende hur bred sidan är. Prova hur navigationen ser ut när du gör webbläsarfönstret smalare och hur det ser ut på en mobil.

{%highlight html linenos%}
<!--Mer HTML ovan.-->
<header>
  <h1>Livsmedel o sånt</h1>
    <nav id="thumb-nav">
          <article class="article-properties">
            <p>Ost</p>
            <img class="image-properties" src="../images/dairy-cheese-etc-th.jpg" alt="Ost">
          </article>
          <article class="article-properties">
            <p>Mjölk</p>
            <img class="image-properties" src="../images/dairy-milk-th.jpg" alt="Mjölk">
          </article>
        <!--Resten av bilderna i <article>-element, bortklippta för att göra förslaget tydligare.-->
    </nav>
</header>
<!--kod för resten av sidan-->
{%endhighlight%}
<figcaption>HTML: Struktur för sidan, här har vi även lagt ett nav element i header.</figcaption>
{%highlight css linenos%}
/*Mer CSS-kod ovan*/
/*För nav använder vi id eftersom det bara skall finnas en tumnagelnavigation på sidan.*/
/*<article> skall placera sig horisontellt, alltid ha samma storlek samt hoppa ner på ny rad om de inte får plats. På det sättet skapar vi en meny som fungerar för många artiklar*/
#thumb-nav {
  display: flex;
  flex-wrap: wrap;
}

.article-properties {
  width: 4rem;
  height: 4rem;
  padding: 0.5rem 0.5rem 0.5rem 0.7rem;
  margin: 0.25rem;
  border: 1px solid black;
  border-radius: 2px;
  background-color: WhiteSmoke;
  color: black;
}

.article-properties>img {
  width: 64px;
  height: 42px;
}

.article-properties>p {
  text-decoration: none;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0px;
}
/*Mer CSS-kod efter*/
{%endhighlight%}
<figcaption>CSS för Gridmall</figcaption>
