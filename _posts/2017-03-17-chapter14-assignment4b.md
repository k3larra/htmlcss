---
layout: post
title:  "Övning 14.4.b"
subtitle: "ID-selektorer"
permalink: /chapter114/assignment4b/
categories: "Kapitel14"
tags: "answer"
---
CSS kod kopplad till ID selektorn har högre specificitet än class-selektorer men lägre än ett style-attribut direkt i HTML-koden. ID selektorn används för att ange en speciell plats på en sida. Det är dock inget som hindrar att du använder ID-selektorer för stil-sättning, det är dock inte en strategi som du bör prioritera i relation till class-selektorer. ID selektorer används främst för att koppla ankare till för att länka till en specifik plats på en sida Uppgift 14.4.a eller, för att hitta en plats på sidan från kod i JavaScript. 

{%highlight html linenos%}
<article class="product_article" id="lemon">
  <h3 class="product_h3">Citron</h3>
  <figure>
    <img class="product_img" src="images/fruit-lemon.jpg" alt="Citron">
    <figcaption>
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
    </figcaption>
  </figure>
</article>
{%endhighlight%}
<figcaption>article-elemetet med CSS kopplat till en ID-selektor</figcaption>
{%highlight css linenos%}
/*Other CSS code*/
.product_article {
  width: 280px;
  background-color: lightgray;
}
#lemon{
    background-color: yellow;
}
/*Other CSS code*/
{%endhighlight%}
<figcaption>CSS regel kopplade via ID selektorn till article-elementet</figcaption>
<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter14-assignment4a.png" alt="Chrome med inspektera verktyget"/>
<figcaption>CSS kopplad till ID har högre prioritet än CSS kopplad till klass-selektorer, i bilden ovan illustreras detta med inspektionsverktyget i Chrome. I vertyget kan du se att element.style är tomt, det vill säga det finns ingen CSS kod direkt i html-koden.</figcaption>
