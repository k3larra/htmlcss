---
layout: post
title:  "Övning 21.2"
subtitle: "Dekor"
permalink: /chapter121/assignment2/
categories: "Kapitel21"
tags: "answer"
---
Nedan visas CSS för ett förslag på hur detta kan göras.  

{%highlight css linenos%}
/*importera en serif-font och en sans serif från google*/
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,600;1,300&display=swap');
/*Sätt font samt standardfärger*/
*{
  font-family: 'Playfair Display', serif;
  color: #F9C8DC;
  background-color: #8E0039;
}
.article-display>p{
  margin-bottom:0px;
  margin-top: 0px;
}
/*välj endast de paragrafer som följer på en annan paragraf som i sin tur är ett direkt barn till article-display*/
.article-display>p+p{
  text-indent : 1.5rem;
}
h3{
  font-family: 'Open Sans', sans-serif; /*applicera seriffonten*/
  color: #DA7AA1;
  text-transform : capitalize;
  margin-bottom: 0px;
  text-indent : 0.1rem;
}
h4{
  font-family: 'Open Sans', sans-serif;
  color: #DA7AA1;
  text-transform:uppercase;
  margin-bottom: 0px;
  text-indent : 0.4rem;
}
h5{
  font-family: 'Open Sans', sans-serif;
  color: #DA7AA1;
  text-transform:lowercase;
  margin-bottom: 0px;
  text-indent : 1rem;
}
{%endhighlight%}
<figcaption>CSS-kod för de tre rubriknivåerna.</figcaption>
