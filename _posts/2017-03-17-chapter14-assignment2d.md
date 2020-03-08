---
layout: post
title:  "Övning 14.2.d"
subtitle: "Storlek på element"
permalink: /chapter114/assignment2d/
categories: "Kapitel14"
tags: "answer"
---
Kommenterad CSS kod för denna övning. Resultatet är inte så snyggt eftersom vi inte styrt till exempel avståndet ovanför Äpple och under texten för att skapa rumd. Vi återkommer till det i senare uppgifter. Att skala bilderna på det sätt vi gör här är inte heller så bra. Det kan innebära att en mycket stor bild skalas ner och blir liten, detta påverkar tiden det tar att ladda en sida. Det är bätre att skapa exakt de storlekar som behövs.

{%highlight css linenos%}
/*För att se till att alla bilder blir lika stora oberoende av ursprunglig storlek anger vi storleken här*/
img {
  width: 200px;
  height: 175px;
}
/*Vi ger article elementen samma bredd så att det är ungefär like stor ram runt dem.*/
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
<figcaption>Css regler.</figcaption>
