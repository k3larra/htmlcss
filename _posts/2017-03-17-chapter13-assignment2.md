---
layout: post
title:  "Övning 13.2"
subtitle: "Intern CSS fil"
permalink: /chapter113/assignment2/
categories: "Kapitel13"
tags: "answer"
---
I denna övning använder vi dels en extern stilmall "style.css" och dels stilsättning av samma element i ett `<style>` element i `<head>` elementet. På detta sätt kan du överskugga stilsättning i en extern stilmall när du vill ändra i bara en fil eller prova ändringar. För att se vilken CSS-regel som gäller är utvecklarverktyget som finns i din webbläsare oumbärligt.

När det gäller konflikter mellan interna css-regler och regler i externa css filer är det den sist inlästa regeln som gäller. Reglerna läses i den ordning de står i `<head>` elementet. Experimentera gärna lite med detta, eftersom det ofta är denna typ av konflikter som kan vara svåra att hitta om du inte är förtrogen med utvecklarverktyget. Om du, i utvecklarverktyget, hovrar med muspekaren över en regel som är aktiv kan du inaktivera den och på det sättet inspektera hur reglerna inaktiveras och aktiveras.

{%highlight css linenos%}
p {
  background-color: lightgray;
  color: gray;
}
h2 {
  background-color: black;
  color: green;
}
{%endhighlight%}
<figcaption>En extern stilmall "style.css" som anger bakgrundsfärg samt förgrundsfärg för paragraf-element och rubriknivå två.</figcaption>

{%highlight html linenos%}
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Introduktion till HTML och CSS</title>
    <link rel="stylesheet" href="style.css">
    <style>
      p {
        background-color: blue;
        color: red;
      }
      h2 {
        background-color: red;
        color: cyan;
      }
    </style>
    <meta charset="utf-8">
  </head>
  <body>
    <article>
        <h2>Äpple</h2>
        <p>Gravensteiner</p>
    </article>
  </body>
</html>
{%endhighlight%}
<figcaption>HTML-fil med länk till en extern stilmall och med interna css regler i style-elementet.</figcaption>



<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter13-assignment2.PNG" alt="Chrome med inspect element"/>
<figcaption>För att se vilken regel som gäller använder du ett utvecklarverktyg, i detta fall är det webbläsaren Chromes verktyg. I denna bild är h2 elementet i fokus. Till höger ser du att reglerna för background-color och color i den externa filen "style.css" är överskuggade av regler för samma element internt i "index.html". Observera att i detta fall är det den regel som läses in sist som gäller.</figcaption>
