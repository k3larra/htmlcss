---
layout: post
title:  "Övning 16.2"
subtitle: "Inline, block och inline-block"
permalink: /chapter116/assignment2/
categories: "Kapitel16"
tags: "answer"
---
Använder du inline så blir höjden på `article` mindre än bilden. I äldre versioner av html fanns bara inline och block, de är inte anpassade för modern responsiv design. Inline-block har skapats för att möta detta behov.

Vid inline-block kollapsar inte marginaler därför anges 0.25rem för att ge totalt 0.5 rem mellan två `<article`.  

{%highlight css linenos%}
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

/*Display: inline-block; innebär att elementen hamnar på samma rad*/
.article-properties{
  display: inline-block;
  width:5.125rem;
  padding:0.5rem;
  margin:0.25rem;
  border:1px solid black;
  border-radius: 2px;
  background-color: WhiteSmoke;
}
{%endhighlight%}
<figcaption>CSS där display för article är inline-block</figcaption>  
