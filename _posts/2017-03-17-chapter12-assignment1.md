---
layout: post
title:  "Övning 12.1"
subtitle: "Film från Youtube"
permalink: /chapter112/assignment1/
categories: "Kapitel12"
tags: "answer"
---
Det finns ett antal sidor på nätet där du kan hämta innehåll genom att använda ett <video> element. Om man hämtar filer från inte betrodda källor kan dessa innehålla virus eller så kan innehållet bytas ut av den som sköter servern till något man absolut inte vill visa på sin sida. De som distribuerar material mer seriöst vill ha bättre kontroll över innehållet tillåter endast visning via deras egen uppspelningsenhet. Nedan visas hur material från YouTube bäddas in i sidan.

På YouTube högerklickar man på filmen och väljer kopiera inbäddningskod för att få tillgång till koden nedan.

{%highlight html linenos%}
<figure>
  <h1>Inbäddad film från YouTube</h1>
  <iframe width="1045" height="588" src="https://www.youtube.com/embed/drnBMAEA3AM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
  <figcaption>The sound of music(1965)</figcaption>
</figure>
{%endhighlight%}
<figcaption>Den del av sidan som visar vår inbäddningskod för en film från YouTube.</figcaption>
