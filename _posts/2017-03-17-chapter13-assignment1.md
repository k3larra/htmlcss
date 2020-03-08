---
layout: post
title:  "Övning 13.1"
subtitle: "Extern CSS fil"
permalink: /chapter113/assignment1/
categories: "Kapitel13"
tags: "answer"
---
I denna övning använder vi en extern stilmall "style.css". En extern mall gör det möjligt att koppla samma mall till flera sidor. Detta arbetsätt gör det även enkelt att återanvända mallen i olika projekt.

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
<figcaption>html-fil med länk till en extern stilmall med namnet "css.style".</figcaption>
