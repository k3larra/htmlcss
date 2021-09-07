---
layout: post
title:  "Övning 14.4.b"
subtitle: "ID-selektorer"
permalink: /chapter114/assignment4b/
categories: "Kapitel14"
tags: "answer"
---
ID attribut används för att hitta en specifik plats på en sida. Ett specifikt attribut får bara finnas på en plats på sidan, en modern editor påpekar detta men det blir inget fel på sidan när den vissas i en browser. Att ha dubblett-ID bör du undvika eftersom de kan ge upphov till svårfunna fel. Testa gärna vad som händer om du har samma ID på flera platser.  

{%highlight html linenos%}
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="Mall">
    <meta name="author" content="fnamn enamn">
    <link rel="stylesheet" href="style.css">
    <title>Template</title>
  </head>
  <body>
    <nav>
      <ul>
      <li>Startsida</li>
      <li> <a href="#apple">Äpple</a></li>
      <li> <a href="#lemon">Lemon</a></li>
      <li> <a href="#orange">Orange</a></li>
      </ul>
    </nav>
    <main>
      <article style="background-color: gold" class="product_article product_article_2" id="apple">
        <h3 class="product_h3" >Äpple</h3>
        <figure class="product_figure">
          <img class="product_img" src="images/fruit-apple.jpg" alt="Äpple">
          <figcaption>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
          </figcaption>
        </figure>
      </article>
      <article class="product_article" id="lemon">
        <h3 class="product_h3">Citron</h3>
        <figure>
          <img class="product_img" src="images/fruit-lemon.jpg" alt="Citron">
          <figcaption>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
          </figcaption>
        </figure>
      </article>
      <article class="product_article" id="orange">
        <h3 class="product_h3" >Apelsin</h3>
        <figure>
          <img class="product_img" src="images/fruit-orange.jpg" alt="Apelsin">
          <figcaption>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
          </figcaption>
        </figure>
      </article>
    </main>
  </body>
</html>
{%endhighlight%}
<figcaption>Nav-element sammankopplat med ankare via ID attribut.</figcaption>
