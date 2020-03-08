---
layout: post
title:  "Övning 14.1"
subtitle: "Ny mall"
permalink: /chapter114/assignment1/
categories: "Kapitel14"
tags: "answer"
---
Nedan finns mallfiler för index.html och style.css som du kan kopiera och utgå från i kommande övningar.

{%highlight css%}
/* Startkod så att du kan se att kopplingen mellan html-fil och stilmall fungerar.*/
body {
  background-color: lightgray;
  color: black;
}
{%endhighlight%}
<figcaption>Extern mallfil för stilmall placera koden i en fil som du kallar style.css.</figcaption>

{%highlight html%}
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
    <!-- Innehåll som ska visas i en webbläsare anges här -->
    <p>Template</p>
  </body>
</html>
{%endhighlight%}
<figcaption>Mallfil för filen index.html. Denna fil är hopkopplad med style.css.</figcaption>
