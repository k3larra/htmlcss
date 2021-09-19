---
layout: post
title:  "Övning 17.2.d"
subtitle: "Sidfot"
permalink: /chapter117/assignment2d/
categories: "Kapitel17"
tags: "answer"
---
Nedan visas kod för sidfoten. Vi låter en `section` #filler vara den som expanderar så att de andra delarna har samma storlek. Med hjälp av `flex-wrap:nowrap`
ser vi till att alla delar i sidfoten är på en rad. Genom att ange `flex-direction: column;` för `#social-media` ser vi till att ikonerna hamna ovanför varandra.
Vi fixar även med ett litet avstånd som finns efter `<a>` med en litet [trick](https://www.geeksforgeeks.org/how-to-remove-the-space-between-inline-block-elements/) .


{%highlight html linenos%}
<!--Mer HTML ovan.-->
<footer>
  <section class="adress">
  <p>Livsmedel AB<br>
  Tel: 0754 999 333<br>
  Epost: info@Livsmedel.se</p>
  </section>
  <section class="adress">
  <p>Livsmedel AB<br>
  Östervägen 17<br>
  225 30 Malmö<br>
  Sweden</p>
  </section>
  <section id="filler"></section>
  <section id="social-media">
    <a href="http://facebook.com" target="_blank"><img src=../images/f.PNG alt="face"></a>
    <a href="http://linkedin.com" target="_blank"><img src=../images/l.PNG alt="link"></a>
    <a href="http://twitter.com" target="_blank"><img src=../images/t.PNG alt="tw"></a>
  </section>
</footer>
<!--kod för resten av sidan-->
{%endhighlight%}
<figcaption>HTML kod för sidfoten.</figcaption>
{%highlight css linenos%}
/*Mer CSS-kod ovan*/
footer{
  display:flex;
  flex-wrap: nowrap;
}
.adress{
  padding-left: 1rem;
  width:10rem;
  height: 6rem;
  background-color: white;
}
#filler{
  flex-grow : 1;
  background-color: white;
}
#social-media{
  width:2rem;
  height: 6rem;
  background-color: white;
  display: flex;
  flex-direction: column;
}
#social-media img{
  width:2rem;
  height:2rem;
}
#social-media a{
  font-size:0; /*trick som tar bort litet avstånd för a tagg, avståndet beror på radmellanrum.*/
}
/*Mer CSS-kod efter*/
{%endhighlight%}
<figcaption>CSS kod för sidfot.</figcaption>
