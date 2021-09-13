---
layout: post
title:  "Övning 16.1.b"
subtitle: "Standard och alternativ boxmodell"
permalink: /chapter116/assignment1b/
categories: "Kapitel16"
tags: "answer"
---
För den alternativa boxmodellen räknas utfyllnad och kantlinje in i bredden. Vi har då bilden som är 64px, utfyllnad 0.5rem, dvs 16px totalt, och kantlinjen som är 1px på varje sida, dvs 2px.
Totalt alltså 82px eller bättre 82/16 = 5.125rem.

{%highlight css linenos%}
/* Ange att alla element skall inkludera padding och kantlinje för dimensioner */
*{
  box-sizing: border-box;
}

body {
  background-color: lightgray;
  color: black;
}

.image-properties{
  width:64px;
  height:42px;
}

.article-properties{
  width:5.125rem;
  padding:0.5rem;
  margin:1rem;
  border:1px solid black;
  border-radius: 2px;
  background-color: WhiteSmoke;
}
{%endhighlight%}
<figcaption>CSS för bilder och article</figcaption>  
