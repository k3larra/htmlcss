---
layout: post
title:  "Övning 15.1.a"
subtitle: "Enheter procent"
permalink: /chapter115/assignment1a/
categories: "Kapitel15"
tags: "answer"
---
Nedan visas koden för hela sidan. <article> fyller ut hela bredden på visningsytan (Viewport), det kan du se i inspektera verktyget där det anges display: block;. Om du i stället anger display:inline; för article blir <article> ett inline element. Skalar du bilderna så att de tar mindre än 50% kommer det att få plats flera bilder än en per rad.  

Utforska gärna hur webbsidan ser ut på olika telefonmodeller i både porträtt och landskaps vy.

{%highlight html linenos%}
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="utf-8">
  <meta name="description" content="Mall">
  <meta name="author" content="fnamn enamn">
  <link rel="stylesheet" href="style.css">
  <title>Uppgift 14.1.a</title>
</head>
<body>
  <main>
    <section class="section-properties">
      <article class="article-properties">
        <img class="img-properties" src="images/fruit-apple.jpg" alt="Äpple">
      </article>
      <article class="article-properties">
        <img class="img-properties" src="images/fruit-apple-th.png" alt="Citron">
      </article>
      <article class="article-properties">
        <img class="img-properties" src="images/fruit-orange.jpg" alt="Apelsin">
      </article>
      <article class="article-properties">
        <img class="img-properties" src="images/fruit-orange-th.jpg" alt="Äpple">
      </article>
      <article class="article-properties">
        <img class="img-properties" src="images/fruit-tomatoes-th.jpg" alt="Citron">
      </article>
      <article class="article-properties">
        <img class="img-properties" src="images/fruit-tomato.jpg" alt="Tomat">
      </article>
    </section>
  </main>
</body>
</html>
{%endhighlight%}
<figcaption>Html background</figcaption>
{%highlight css linenos%}
.article-properties{
  background-color: lightseagreen;
}
/*Skala bilder till halva bredden*/
.img-properties{
    width: 50%;
}
{%endhighlight%}
<figcaption>CSS</figcaption>
<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter15-assignment1a.PNG" alt="Chrome med inspektera verktyget"/>
<figcaption>I inspektera verktyget kan vi emulera hur resultatet ser ut på en telefon, lägg märke till att den andra äpplebilden är pixlig på grund av att den inte har tillräcklig upplösning för den storlek den är skalad till (bilden är i detta fall 64x43px men behöver vara 490x321px för att visas oskarp.) </figcaption>
