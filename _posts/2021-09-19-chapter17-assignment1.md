---
layout: post
title:  "Övning 17.1"
subtitle: "Gridmall"
permalink: /chapter117/assignment1/
categories: "Kapitel17"
tags: "answer"
---
Mall för Gridlayout som fyller ut hela sidan. Vi har i koden även lagt in ett `nav` element i `header`.

{%highlight html linenos%}
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="Mall">
    <meta name="author" content="fnamn enamn">
    <link rel="stylesheet" href="style.css">
    <title>Template Grid</title>
  </head>
  <body>
    <header>
      Sidhuvud
      <nav>Navigation</nav>
    </header>
    <aside>Sidoinnehåll</aside>
    <main>Huvudinnehåll</main>
    <footer>Sidfot</footer>
  </body>
</html>
{%endhighlight%}
<figcaption>HTML: Struktur för sidan, här har vi även lagt ett nav element i header.</figcaption>
{%highlight css linenos%}
/*Sidmall gridlayout*/
body {
  height:100vh;
  display:grid;
  grid-template-rows: 1fr 3fr 1fr; /*sidan delas på tre delar, första tar 20% av höjden nästa 60% den sista 20% (femtedelar)*/
  grid-template-columns: 1fr 2fr; /*Den första columnen dubbelt så stor som den andra. (tredjedelar)*/
  gap:1rem; /*Lite avstånd mellan delarna på sidan*/
  background-color: lightgray;
  color: black;
}
/*navigation*/
header{
  background-color: gainsboro;
  color: black;
  grid-row: 1 / 2; /*Första delen, dvs slutar innan område 2 börjar*/
  grid-column: 1 / 3; /* Innehäller alla delar slutar där område 3 skulle börja om det fanns*/
}

 aside{
   background-color: darkgray;
   color: black;
   grid-row: 2 / 3;
   grid-column: 1 / 2;
 }

 main{
   background-color: silver;
   color: black;
   grid-row: 2 / 3;
   grid-column: 2 /3;
 }

 footer{
   background-color:ghostwhite;
   color: black;
   grid-row: 3 / 4;
   grid-column: 1 /3;
 }
{%endhighlight%}
<figcaption>CSS för Gridmall</figcaption>
