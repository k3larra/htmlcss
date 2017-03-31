---
layout: post
title:  "Uppgift 3.1.a"
subtitle: "Lägga in bilder"
permalink: /chapter103/assignment1a/
categories: "Kapitel3"
tags: "answer"
---
I denna uppgift visas en bild som ligger i samma katalog som index.html. Lägg märke till att img-taggen inte har någon sluttagg som `<p>text</p>` utan den har i stället attribut som anger vilken bild som skall visas. Detta betyder att du endast skriver `<img src="fruit-apple.jpg" alt="Green apple">`, en del utvecklare menar att du alltid skall ange en sluttagg och du kan då antingen skriva `<img src="fruit-apple.jpg" alt="Green apple"></img>` eller `<img src="fruit-apple.jpg" alt="Green apple"/>`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Images</title>
    <meta charset="utf-8">
  </head>
  <body>
      <h1>HTML CSS</h1>
      <img src="fruit-apple.jpg" alt="Green apple">
  </body>
</html>
```
<figcaption>En sida som inkluderar en bild, i detta fallet visas den i sin "naturliga storlek" så är den 500px*500px så visas den i den storleken. I och med att det bara står filnamnet i argumentet  src="filnamn" så förväntas bilden ligga i samma mapp som den html-fil som visar bilden.</figcaption>
<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter3-assignment1a.PNG" alt="Chrome med inspect element" style="width:  42rem;"/>
<figcaption>Här syns slutresultatet. Här är även utvecklarverktyget öppet så att koden som körs kan inspekteras. Sidan körs i atom med en lokal webbserver (live-server) detta kan du se dels genom att webbadressen är 127.0.0.1:3000 och att det finns kod som live-servern har lagt till på webbsidan. Utvecklarverktyget gör att du kan inspektera koden på sidan och se hur den är uppbyggd.  </figcaption>
