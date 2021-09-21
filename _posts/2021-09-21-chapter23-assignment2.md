---
layout: post
title:  "Övning 23.2"
subtitle: "Tabell"
permalink: /chapter123/assignment2/
categories: "Kapitel23"
tags: "answer"
---
Rudimentär design, punkterna börda vara runda samt centrerade framför. Detta överlämnas åt läsaren att åtgärda.
{%highlight html linenos%}
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="Mall">
    <meta name="author" content="fnamn enamn">
    <link rel="stylesheet" href="style.css">
    <title>Template</title>
  </head>
  <body>
    <main class="problem">
    <table class="and-what-about-next-generation">
      <caption>Utsläpp CO<sub>2</sub> 2018 (Tusen ton)</caption>
      <tr>
        <td>Kina</td>
        <td>10 313 460</td>
      </tr>
      <tr>
        <td>USA</td>
        <td>4 981 300</td>
      </tr>
      <tr>
        <td>Indien</td>
        <td>2 434 520</td>
      </tr>
      <tr>
        <td>Ryssland</td>
        <td>1 607 550</td>
      </tr>
      <tr>
        <td>Japan</td>
        <td>1 106 150</td>
      </tr>
      <tr>
        <td>Tyskland</td>
        <td>709 540</td>
      </tr>
      <tr>
        <td>Sydkorea</td>
        <td>630 870</td>
      </tr>
      <tr>
        <td>Iran</td>
        <td>629 290</td>
      </tr>
      <tr>
        <td>Indionesien</td>
        <td>583 110</td>
      </tr>
      <tr>
        <td>Kanada</td>
        <td>574 400</td>
      </tr>
    </table>
  </div>
  </main>
  </body>
</html>
{%endhighlight%}
<figcaption>Nestlad lista.</figcaption>
{%highlight css linenos%}
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
body {
  background-color: white;
  color: black;
}
.problem{
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 20rem;
  height: 14rem;
  font-family: 'Alfa Slab One', cursive;
}
.and-what-about-next-generation {
  width: 20rem;
  background-color: WhiteSmoke;
  color:Grey;
  border-spacing: 0px; /*Removes default distance between cells*/
  margin:auto;
}
.and-what-about-next-generation caption{
  text-transform: uppercase;
  text-align: center;
  color:Black;
}
.and-what-about-next-generation td{
  border: 0px;
  border-spacing: 0px;
  padding-left: 0.5rem;
}
.and-what-about-next-generation td+td {
  text-align: right;
}
.and-what-about-next-generation tr:nth-child(2n){
  background-color: DimGrey;
  color:snow;
}
{%endhighlight%}
<figcaption>CSS-kod för de tre rubriknivåerna.</figcaption>
