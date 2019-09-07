---
layout: post
title:  "Övning 8.1.d"
subtitle: "E-postlänkar"
permalink: /chapter108/assignment1d/
categories: "Kapitel8"
tags: "answer"
---
Du bör tänka som så att det som står i `alt` attributet syns när man rör musen eller fingret över en bild eller att det är det en person med synnedsättning för uppläst. Det vill säga de båda texterna skall komplettera varandra och `alt`beskriva bilden.
Enligt W3C så skall bilden och dess beskrivning vara en enhet vilket är rimligt så att bilder samt deras beskrivning håller ihop som en helhet. Nedan finns ett förslag på hur det kan se ut för en av dina bilder. 

```html
<article>
  <figure>
    <img src="images/forrest2.jpg" alt="Foto av solbelyst bokskog i skåne." width="200" height="400">
    <figcaption>
      <b>Figure 2: </b><i>I denna solglänta vandrade Linnè den 31 maj 1749. Enligt lokal hörsägen sägs att han vilade samt tog svalkade sina fötter i bäcken.</i></figcaption>
  </figure>
</article>
```
