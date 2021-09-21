---
layout: post
title:  "Övning 21.6"
subtitle: "Justering av text"
permalink: /chapter121/assignment6/
categories: "Kapitel21"
tags: "answer"
---
Nedan visas CSS för ett förslag på hur detta kan göras.  

{%highlight css linenos%}
h2::before{
  content: "\26D3";
  color:red;
}
h3{
  font-family: 'Open Sans', sans-serif; /*applicera seriffonten*/
  color: #DA7AA1;
  text-transform : capitalize;
  margin-bottom: 0px;
  text-indent : 0.1rem;
}
{%endhighlight%}
<figcaption>CSS-kod för de tre rubriknivåerna.</figcaption>
