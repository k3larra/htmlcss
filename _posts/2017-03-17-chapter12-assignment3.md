---
layout: post
title:  "Övning 12.3"
subtitle: "Ljudfil"
permalink: /chapter112/assignment3/
categories: "Kapitel12"
tags: "answer"
---
När du visar innehåll från samma server som din webbsida finns kan `<audio>` elementet användas. Här använder vi attributen "controls" och "loop" så att kontrollknapparna visas och att ljudet loopas när det väl börjat spelas. Vi har lagt audio-elementet i ett `<figure>` element för att kunna lägga till beskrivning på ett snyggt sätt.

{%highlight html linenos%}
<figure>
  <h1>Lokalt ljud</h1>
  <audio controls loop>
    <source src="media/news.mp3" type ="audio/mp3">
  </audio>
  <figcaption>Ljud från omgivningen.</figcaption>
</figure>
{%endhighlight%}
<figcaption>Den del av koden som refererar till filen i media-mappen.</figcaption>
