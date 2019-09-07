---
layout: post
title:  "Övning 8.1.e"
subtitle: "Figurtext"
permalink: /chapter108/assignment1e/
categories: "Kapitel8"
tags: "answer"
---
Du bör tänka som så att det som står i `alt` attributet syns när man rör musen eller fingret över en bild eller att det för en person med synnedsättning skall förklara beskriva bilens innehåll. Det vill säga de båda texterna skall komplettera.
Enligt W3C så är bilden och dess beskrivning en enhet så att bilder samt deras beskrivning håller ihop som en helhet. Nedan finns ett förslag på hur det kan se ut för en av dina bilder.

```html
<article>
  <figure>
    <img src="images/forrest2.jpg" alt="Foto av solbelyst bokskog i skåne." width="200" height="400">
    <figcaption>
      <b>Figure 2: </b><i>I denna solglänta vandrade Linnè den 31 maj 1749. Enligt lokal hörsägen sägs att han vilade samt svalkade sina fötter i bäcken.</i></figcaption>
  </figure>
</article>
```
