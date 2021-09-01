---
layout: post
title:  "Övning 14.2.a"
subtitle: "Semantisk uppmärkning igen"
permalink: /chapter114/assignment2a/
categories: "Kapitel14"
tags: "answer"
---
Nedan finns html sidan som vi skall stilsätta. Sidan använder de semantiska elementen `<main>` och `<article>`.

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
    <main>
      <article>
        <h3>Äpple</h3>
        <figure>
        <img src="images/fruit-apple.jpg" alt="Äpple">
        <figcaption>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
        </figcaption>
        </figure>
      </article>
      <article>
        <h3>Citron</h3>
        <figure>
        <img src="images/fruit-lemon.jpg" alt="Citron">
        <figcaption>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
        </figcaption>
        </figure>
      </article>
      <article>
        <h3>Apelsin</h3>
        <figure>
        <img src="images/fruit-orange.jpg" alt="Apelsin">
        <figcaption>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
        </figcaption>
        </figure>
      </article>
    </main>
  </body>
</html>
{%endhighlight%}
<figcaption>HTML koden i index.html.</figcaption>
