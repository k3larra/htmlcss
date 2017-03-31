---
layout: post
title:  "Uppgift 3.3"
subtitle: "Validering och indentering"
permalink: /chapter103/assignment3/
categories: "Kapitel3"
tags: "answer"
---
Indentering med hjälp av plugin. Nedan syns filen index.html före och efter det att Atom-paketet "beautify" har körts. Du hittar pluginen från menyn Packages>Atom Beautify>Beautify om du kör Atom. Finns inte det alternativet i menyn så behöver du installera det.
```html
<html lang="sv">
  <head>
<title>En liten affär</title>
    <meta charset="utf-8">
  </head>
  <body>
<h1>Varugrupper</h1>
<h2><a href="articles-dairy-products.html">Mejeriprodukter</a></h2>
      <h2><a href="articles-fruits.html">Frukt</a></h2>
      <a href="articles-vegetables.html"><h2>Grönsaker</h2></a>
  </body>
</html>
```
<figcaption>Indentering görs enbart för att öka läsbarheten och har inget med funktionen att göra. Ovan syns filen index.html med mindre snygg indentering.</figcaption>
```html
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>En liten affär</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>Varugrupper</h1>
    <h2>
      <a href="articles-dairy-products.html">Mejeriprodukter</a>
    </h2>
    <h2>
      <a href="articles-fruits.html">Frukt</a>
    </h2>
    <a href="articles-vegetables.html">
      <h2>Grönsaker</h2>
    </a>
  </body>
</html>
```
<figcaption>Ovan syns filen index.html med snyggare indentering. Visa delar av indentering är en smaksak men det är enklare att anpassa sig till en standard än att driva en egen linje. En del inställningr för indenteringsregler kan du göra i den plugin du använder.</figcaption>
<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter3-assignment3.PNG" alt="W3C-validering" style="width:  42rem;"/>
<figcaption>Tag alltid för vana att validera koden enligt W3C. I ovanstående exempel använder vi paketet W3C-validation i Atom. I exemplet ovan är sluttaggen på title-elementet felaktig vilket skapar de felmeddelanden du ser under koden i rött. Ibland är meddelandena lite kryptiska, i detta fall är det nedersta felet klart uttryckt medan det översta är ett följdfel (I och med att title-taggen inte är avslutad så kan hela texten uppfattas som en del av title-taggen).</figcaption>
