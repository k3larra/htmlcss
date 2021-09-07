---
layout: post
title:  "Övning 14.3.b"
subtitle: "Klass-selektorer och typselektorer"
permalink: /chapter114/assignment3b/
categories: "Kapitel14"
tags: "answer"
---
I övningen använder vi klass-selektorer i stället för typ-selektorer. Du bör använda klass-selektorer som standard eftersom de kan kopplas dynamiskt till valfritt element. Att använda typselektorer, som i föregående uppgift, är praktiskt i vissa fall, till exempel när du felsöker för att snabbt se ett resultat.

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
<figcaption>CSS regler kopplade till article-elementet i uppgift 14.3.b.</figcaption>

<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter14_assignment3b.PNG" alt="Chrome med inspect element"/>
<figcaption>Klass-selektorer högre specificitet än typ-selektorer och de därmed slår de igenom. I detta fall har jag lagt till två klassregler för &#60;article&#62;-elementet: product_article samt product_article_2. Det är då den regel som läses in sist som bestämmer (Se CSS koden ovan). I inspektera-verktyget går det att avgör vilken regel som gäller samt vilka regler som är överskuggade av regler med högre specificitet (genomstruken text).</figcaption>
