---
layout: post
title:  "Övning 16.1.a"
subtitle: "Utfyllnad, marginal och kantlinje."
permalink: /chapter116/assignment1a/
categories: "Kapitel16"
tags: "answer"
---
Nedan har vi använt CSS-klasser för att tilldela egenskaper (i detta begränsade exempel går det lika bra att tilldela egenskaper direkt till typselektorer). Vi anger bildstorleken i px för att skalningen skall ske till jämna pixlar, samma sak gäller för kantlinjen. Det går även att ange detta i rem, eftersom 1 rem som standard är 16 px så skulle bildbredden bli 4rem för att motsvara 64px. Detta förklarar i sin tur varför vi angett bredden på article till 4rem, som motsvarar bredden på innehållet i standard boxmodellen (Se avsnitt 16.5).
Höjden 42px på bilderna har vi angett för att bilderna inte skall förvrängas så mycket, trots att de har lite olika storlek.

Som du ser är det samma avstånd ovanför det första article elementet som mellan de följande, trots att det egentligen är två marginaler, en för article ovanför och en för article nedanför. Att det inte blir så beror på så kallade kollapsande marginaler, där ett designbeslut är taget som innebär att man oftast vill ha samma avstånd ovanför det första elementet som mellan elementen. Du kan läsa mer om det här [Collapsing margins](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing).  

{%highlight html linenos%}
<!--More HTML code above-->
<section>
  <article class="article-properties">
    <img class="image-properties" src="images/dairy-cheese-etc-th.jpg" alt="Ost">
  </article>
  <article class="article-properties">
    <img class="image-properties" src="images/dairy-milk-th.jpg" alt="Mjölk">
  </article>
<!--More HTML code below-->
{%endhighlight%}
<figcaption>HTML: två av article elementen i ett section-element.</figcaption>
{%highlight css linenos%}
.article-properties{
  background-color: lightseagreen;
}

body {
  background-color: lightgray;
  color: black;
}

.image-properties{
  width:64px;
  height:42px;
}

.article-properties{
  width:4rem;
  padding:0.5rem;
  margin:1rem;
  border:1px solid black;
  border-radius: 2px;
  background-color: WhiteSmoke;
}
{%endhighlight%}
<figcaption>CSS för bilder och article</figcaption>

<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter16-assignment1a.PNG" alt="Inspektera verktyget"/>
<figcaption>Dimensionerna på article elementet i inspektera verktyget i Chrome</figcaption>
