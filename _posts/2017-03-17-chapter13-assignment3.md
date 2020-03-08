---
layout: post
title:  "Övning 13.3"
subtitle: "Intern CSS fil"
permalink: /chapter113/assignment3/
categories: "Kapitel13"
tags: "answer"
---
I denna övning använder vi dels en extern stilmall "style.css", intern stilsättning av samma element i ett `<style>` element i `<head>` elementet. Dessutom stilsätter vi direkt i html-koden med ett style-attribut. Att vi fördjupar oss i detta är på grund av att det är centralt att känna till hur regler tillämpas samt hur du kan felsöka med hjälp av utvecklarverktyget. In regel som använder style attributet för ett element läses in sist och gäller över alla tidigare regler.

Sträva efter att bara ha regler på ett ställe, men det är praktiskt att enkelt kunna felsöka genom att stilsätta, till exempel, bakgrunden på ett element för att se hur stor plats det tar upp på en sida. Att kombinera regler som kommer från olika källor (extern, intern, inline) är centralt och det är därför stilsättningen kallas "cascade" eftersom den så att säger rinner nedåt i en kaskad.

Som alltid finns det undantag eller möjligheter att sätta regler ur spel, det kan göras genom att ange !important efter en regeln så här:
{%highlight css linenos%}
h2 {
  background-color: red;
  color: cyan !important;
}
{%endhighlight%}
Detta skall undvikas eftersom de sätter "cascade" funktionaliteten ur spel. Detta diskuteras vidare i nästa kapitel.

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
        color: cyan !important;
      }
    </style>
    <meta charset="utf-8">
  </head>
  <body>
    <article>
      <h2 style="color: orange">Äpple</h2>
      <p style="color: gold; background-color: silver;">Gravensteiner</p>
    </article>
  </body>
</html>
{%endhighlight%}
<figcaption>html-fil med länk till en extern stilmall, interna css samt inline regler med hjälp av ett "style" attribut direkt i `<h2>` och `<p>` elementen.</figcaption>



<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter13-assignment3.PNG" alt="Chrome med inspect element"/>
<figcaption>För att se vilken regel som gäller använder du utvecklarverktyget i Chrome. I denna bild är `<p>` lementet i fokus. Till höger ser du att reglerna för background-color och color i den externa filen "style.css" är överskuggade av regler för samma element internt i "index.html". Dessa regler är i sin tur överskuggade av reglerna direkt i elementet "element.style". Observera att  det den regel som läses in sist som gäller, regeln för elementet läses alitd in sist och kan bara överskuggas genom att använda !important i slutet av en regel.</figcaption>
