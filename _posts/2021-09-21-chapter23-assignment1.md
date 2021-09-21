---
layout: post
title:  "Övning 23.1"
subtitle: "Lista"
permalink: /chapter123/assignment1/
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
    <ul>
      <li>Däggdjur
        <ul>
          <li>Mård</li>
          <li>ekorre</li>
          <li>skogselefant</li>
        </ul>
      </li>
      <li>Fåglar
        <ul>
          <li>nötskrika</li>
          <li>nötväcka</li>
          <li>Gröngöling</li>
        </ul>
      </li>
      <li>Reptiler
        <ul>
          <li>Ätlig groda</li>
          <li>Grönfäckig padda</li>
          <li>Långbensgroda</li>
        </ul>
      </li>
    </ul>
  </body>
</html>
{%endhighlight%}
<figcaption>Nestlad lista.</figcaption>
{%highlight css linenos%}
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100;1,400&display=swap');
/* Startkod så att du kan se att kopplingen mellan html-fil och stilmall fungerar.*/
body{
  background-color: lightgray;
  color: black;
}

.image-properties{
  /*width:33vw;*/
}

ul{
  list-style-image : url("red2.png");
  text-transform: capitalize;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 0.8rem;
  list-style-position: inside;
}

ul ul{
  list-style-image : url("green.png");
  text-transform: capitalize;
  font-family: 'Roboto', sans-serif;
  font-style:italic;
  font-size: 0.6rem;
  padding-left: 0.8rem;
  list-style-position: inside;
}
{%endhighlight%}
<figcaption>CSS-kod för de tre rubriknivåerna.</figcaption>
