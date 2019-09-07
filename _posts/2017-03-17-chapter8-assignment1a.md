---
layout: post
title:  "Övning 8.1.a"
subtitle: "Inkludera bilder och figurer"
permalink: /chapter108/assignment1a/
categories: "Kapitel8"
tags: "answer"
---
Nedan finns ett förslag på hur koden för bildsidan kan se ut. Ett tips är att använda gemener för alla filnamn både på själva filen samt när man refererar till den i `<img>` elementet (se kapitel 2.2).

```html
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Mina Bilder 1</title>
    <meta charset="utf-8">
  </head>
  <body>
    <header>
      <h1>Skogsbilder</h1>
    </header>
    <main>
      <article>
        <img src="images/forrest1.jpg" alt="Foto som visar en gles odlad skog i norrland">
      </article>
      <article>
        <img src="images/forrest2.jpg" alt="Foto av solbelyst bokskog i skåne.">
      </article>
      <article>
        <img src="images/forrest3.png" alt="Illustration som visar ett träd.">
      </article>
      <article>
        <img src="images/forrest4.gif" alt="Animation av en man som springer i skogen.">
      </article>
    </main>
  </body>
</html>
```
<figcaption>Sida med bilder/figurer placerade i semantiska element samt img element med beskrivande alt= attribut.</figcaption>
