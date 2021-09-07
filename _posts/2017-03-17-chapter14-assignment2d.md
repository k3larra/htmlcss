---
layout: post
title:  "Övning 14.2.d"
subtitle: "Storlek på element"
permalink: /chapter114/assignment2d/
categories: "Kapitel14"
tags: "answer"
---
Kommenterad CSS kod för denna övning. Resultatet är inte så snyggt eftersom vi inte styrt, till exempel, avståndet ovanför Äpple och under texten för att skapa utrymme. Vi återkommer till det i senare uppgifter. Att skala bilderna på det sätt vi gör här är inte heller så bra eftersom det kan innebära att en mycket stor bild skalas ner och blir liten, dels utnyttjas inte hela bildens upplösning men vad som är värre är att det påverkar tiden det tar att ladda en sida. Det är bättre att skapa exakt de storlekar som behövs om tiden att ladda en sida  är prioriterad.

{%highlight css linenos%}
/*För att se till att alla bilder visas i samma storlek, oberoende av ursprunglig storlek, anger vi visningsstorleken här*/
img {
  width: 200px;
  height: 175px;
}
/*Vi ger article elementen samma bredd så att det blir lika stor ram runt dem.*/
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
<figcaption>CSS regler.</figcaption>
