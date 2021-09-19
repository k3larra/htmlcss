---
layout: post
title:  "Övning 17.2.c"
subtitle: "Navigation till sidhuvud"
permalink: /chapter117/assignment2c/
categories: "Kapitel17"
tags: "answer"
---
Navigering tillbaka överst på sidan. Vi har här använt tecknet för en pil uppåt, snyggare skulle ju vara en bild i stället. Vår design ger ju långa sidor att scrolla i.
Ett alternativ skulle kunna vara att göra `<main>` skrollbar. Scroll kan adderas via [CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior).

{%highlight html linenos%}
<!--Mer HTML ovan.-->
<!--Div för navigation som flyter ovanpå. Den kan placeras var som helst i koden eftersom den lyfts ur det vanliga flödet (&#8593; är kod för en pil, använd hellre en bild.)-->
<div id="toppnav"><a href="#top">&#8593;</a></div>
<!--kod för resten av sidan-->
{%endhighlight%}
<figcaption>Div för ett element med pil som alltid skall vara synlig.</figcaption>
{%highlight css linenos%}
/*Mer CSS-kod ovan*/
#toppnav {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  background-color: darkgray;
  color: black;
}
/*Mer CSS-kod efter*/
{%endhighlight%}
<figcaption>Här anger vi med position:fixed att pilen skall visas i relation till sidan, 1 rem från botten och 1rem från vänstersidan.</figcaption>
