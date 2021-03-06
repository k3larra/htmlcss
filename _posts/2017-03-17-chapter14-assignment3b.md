---
layout: post
title:  "Övning 14.3.b"
subtitle: "Klass-selektorer och typselektorer"
permalink: /chapter114/assignment3b/
categories: "Kapitel14"
tags: "answer"
---
I övningen använder vi klasselektorer i stället för typselektorer. Du bör använda klasselektorer som standard eftersom de kan kopplas dynamiskt till vilka element du vill. Att använda typselektorer direkt är praktiskt i vissa fall, till exempel när du felsöker eller om du, av någon anledning, inte vill ändra i html-filen.

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
<figcaption>Css regler kopplade till article-elementet i uppgift 14.3.b.</figcaption>

<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter14_assignment3b.PNG" alt="Chrome med inspect element"/>
<figcaption>Med ovanstående regler så har klassselektorer högre specificitet än klasselektorer och de därmed slår de igenom. I detta fall har jag lagt till två klassregler för <article>-elementet: product_article samt product_article_2. Det är då den som läses in sist som bestämmer (Se CSS koden ovan). </figcaption>
