---
layout: post
title:  "Övning 22.1"
subtitle: "Navigation"
permalink: /chapter122/assignment1/
categories: "Kapitel22"
tags: "answer"
---
Nedan visas CSS för ett förslag på hur detta kan göras. Lägg märke till att a:visited reagerar olika för ankarlänkar internt på sidan samt expterna länkar. Dessutom skall hover ligga efter link och visited eftersom de har högre prioritet. a:visited är även begränsar för vilka egenskaper som kan kopplas till [den](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)

{%highlight css linenos%}
a:link{
  color:black;
  text-decoration: none;
}
a:visited{
  /*color:red*/
}
a:hover{
  font-weight: bolder;
  text-transform :uppercase;
}
a:active{
  text-decoration: line-through;
}
{%endhighlight%}
<figcaption>CSS-kod för de tre rubriknivåerna.</figcaption>
