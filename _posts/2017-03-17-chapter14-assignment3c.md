---
layout: post
title:  "Övning 14.3.c"
subtitle: "Klass-selektorer och typselektorer"
permalink: /chapter114/assignment3c/
categories: "Kapitel14"
tags: "answer"
---
I denna uppgift visar vi specificitet för typ-selektorer, klass-selektorer och style-attribut. Genom inspektion med ett utvecklarverktyg kan du se vilka regler som slår igenom.

{%highlight html linenos%}
<article style="background-color: gold" class="product_article product_article_2" >
  <h3 class="product_h3">Äpple</h3>
  <figure class="product_figure">
  <img  class ="product_img" src="images/fruit-apple.jpg" alt="Äpple">
  <figcaption>
    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
  </figcaption>
  </figure>
</article>
{%endhighlight%}
<figcaption>article-elemetet med inline CSS kopplat till style-attributet</figcaption>

{%highlight css linenos%}
.product_article {
  width: 280px;
  background-color: lightgray;
}
article {
  width: 280px;
  background-color: black;
}
.product_article_2 {
  width: 280px;
  background-color: lightblue;
}
{%endhighlight%}
<figcaption>Css regler kopplade till article-elementet</figcaption>

<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter14_assignment3c.PNG" alt="Chrome med inspect element"/>
<figcaption>Inline CSS har högst prioritet, i bilden ovan så överskuggar style-attributet både typ-selektorn och klass-selektorn. </figcaption>
