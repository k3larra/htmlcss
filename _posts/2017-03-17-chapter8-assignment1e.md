---
layout: post
title:  "Övning 8.1.e"
subtitle: "Figurtext"
permalink: /chapter108/assignment1e/
categories: "Kapitel8"
tags: "answer"
---
Du bör tänka som så att det som står i `alt` attributet syns när man rör musen (hovrar) över en bild men även att det för en person med synnedsättning skall beskriva bilden. Det vill säga de båda texterna skall komplettera varandra. Nedan finns ett förslag på hur det kan se ut för en av dina bilder.

```html
<article>
  <figure>
    <img src="images/forrest2.jpg" alt="Foto av en bäckravin med solbelyst bokskog i Skåne." width="200" height="400">
    <figcaption>
      <b>Figure 2: </b><i>I denna solglänta vandrade Linnè den 31 maj 1749. Enligt hörsägen vilade han på slänten och svalkade sina fötter i bäcken.</i></figcaption>
  </figure>
</article>
```
<figcaption>Ett figure-element med bild där alt-attributet beskriver det som syns på bilden och där figcaption-elementet kopplar bilden till ett sammanhang.</figcaption>
