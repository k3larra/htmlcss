---
layout: post
title:  "Övning 14.2.d"
subtitle: "Sorlek på element"
permalink: /chapter114/assignment2d/
categories: "Kapitel14"
tags: "answer"
---
Kommenterad CSS kod för denna övning. Resultatet är inte så snyggt eftersom vi inte styrt till exempel avståndet ovanför Äpple och under texten så att det vinns lite utrymme där. VI återkommer till det i senare uppgifter. Att skala bilderna på det sätt vi gör här är inte heller så bra. Det kan innebära att en mycket stor bild skalas ner och blir liten, detta påverkar tiden det tar att ladda en sida. Det är bätrre att skapa exakt de storlekar som behövs.

{%highlight css linenos%}

img {
  width: 200px;
  height: 175px;
}

article {
  width: 280px;
  background-color: lightgray;
}
h3 {
  text-align: center;
}
figure {
  width: 200px;
}
{%endhighlight%}
<figcaption>Css regler som färglägger bakgrunden på elemt så att storleken blir tydlig. I exemplet är bredden på article elementet bortkommenterat.</figcaption>
