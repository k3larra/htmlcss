---
layout: post
title:  "Övning 12.2"
subtitle: "Egen film"
permalink: /chapter112/assignment2/
categories: "Kapitel12"
tags: "answer"
---
När du visar innehåll från samma server som din webbsida finns kan `<video>` elementet användas. Du har då full kontroll över materialet och kan göra mer som du vill med det. I nedanstående exempel har vi ställt in storleken på videofönstret samt att vi använt attributet autoplay för att ange att filmen skall börja spela direkt. Andra attribut kan du hitta på <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" target="_blank">MDN video</a> 

{%highlight html linenos%}
<figure>
  <h1>Lokal film</h1>
  <video width="450" height="250" autoplay loop>
    <source src="media/bee.mp4" type ="video/mp4">
  </video>
  <figcaption>Film about bees.</figcaption>
</figure>
{%endhighlight%}
<figcaption>Den del av koden som refererar till filen i media-mappen. Vi har lagt video-elementet i ett `<figure>` element för att kunna lägga till beskrivning på ett snyggt sätt.</figcaption>
