---
layout: post
title:  "Övning 14.2.c"
subtitle: "Inspektera storleken på element"
permalink: /chapter114/assignment2c/
categories: "Kapitel14"
tags: "answer"
---
CSS som färglägger bakgrunden så storleken på elementen syns. Detta kan även göras genom att inspektera sidan med verktyget för detta i din browser. Men det blir extra tydligt när man gör som i nedanstående exempel.

{%highlight css linenos%}
img {
  width: 200px;
  height: 175px;
  background-color: gray;
}
article {
  /*width: 280px;*/
  background-color: red;
}
main {
  background-color: green;
}
h3 {
  background-color: silver;
  text-align: center;
}
figure {
  width: 200px;
  background-color: gold;
}
figcaption {
  background-color: yellow;
}
{%endhighlight%}

<figcaption>CSS regler som färglägger bakgrunden på element så att storleken blir tydlig. I exemplet är bredden på article elementet bortkommenterad.</figcaption>
