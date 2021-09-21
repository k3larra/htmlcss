---
layout: post
title:  "Övning 21.1"
subtitle: "Indentering"
permalink: /chapter121/assignment1/
categories: "Kapitel21"
tags: "answer"
---
I denna övning anges att alla stycken <p> utom det första skall ha ett indrag. Lägg
märke till hur vi, via CSS, väljer ut det andra <p>-elementet av de som följer på varandra. Genom att vara specifika när vi väljer ut vilka p som skall påverkas av detta undviker vi förhoppningsvis att regeln tillämpas på andra delar av webbplatsen.   
{%highlight html linenos%}
<!--Mer HTML ovanför-->
<article class="article-display">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum eu justo ac
tincidunt. Donec eget pretium lectus. Vestibulum nisl est, consectetur rhoncus
ex sed, aliquam convallis mauris. Mauris tristique condimentum leo, quis faucibus
purus rhoncus sed. Aliquam venenatis a leo a posuere. Donec at pharetra lacus.
Pellentesque eu lorem dictum, vulputate dolor non, consectetur massa. Mauris
viverra ante id egestas porta. Pellentesque at elit semper, ullamcorper justo
eu, ornare risus.</p>

<p>Donec
<!-- Och så vidare fyra stycken....-->
{%endhighlight%}
<figcaption>Rudimentär testsida.</figcaption>
{%highlight css linenos%}
/*importera en serif-font från google*/
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
/*Sätt font samt standardfärger*/
*{
  font-family: 'Playfair Display', serif;
  color: #F9C8DC;
  background-color: #8E0039;
}
.article-display>p{
  margin-bottom:0px;
  margin-top: 0px;
}
/*För att undvika att alla <p> får detta beteende har jag lagt dem i ett article element
med ett unikt klassnamn här väljs bara de paragrafer som följer direkt på en annan paragraf,
dvs för den första paragrafen av många gäller inte denna regel.*/
.article-display>p+p{
  text-indent : 1.5rem;
}
{%endhighlight%}
<figcaption>CSS-kod</figcaption>
