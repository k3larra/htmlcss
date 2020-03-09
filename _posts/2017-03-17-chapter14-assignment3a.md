---
layout: post
title:  "Övning 14.3.a"
subtitle: "Klasselektorer"
permalink: /chapter114/assignment3a/
categories: "Kapitel14"
tags: "answer"
---
I övningen använder vi klasselektorer i stället för typselektorer. Du bör använda klasselektorer som standard eftersom de kan kopplas dynamiskt till vilka element du vill. Att använda typselektorer direkt är praktiskt i vissa fall, till exempel när du felsöker eller om du, av någon anledning, inte vill ändra i html-filen.  

{%highlight css linenos%}
/*För att se till att alla produktbilder blir lika stora oberoende av
ursprunglig storlek anger vi storleken här*/
.product_img {
  width: 200px;
  height: 175px;
}
/*Vi ger article elementen samma bredd så att det är ungefär like stor ram
runt dem.*/
.product_article {
  width: 280px;
  background-color: lightgray;
}
.product_h3 {
  text-align: center;
}
.product_figure {
  width: 200px;
}
{%endhighlight%}
<figcaption>Css regler för uppgift 14.3.a.</figcaption>

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
      <article class="product_article">
        <h3 class="product_h3">Äpple</h3>
        <figure class="product_figure">
        <img  class ="product_img" src="images/fruit-apple.jpg" alt="Äpple">
        <figcaption>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
        </figcaption>
        </figure>
      </article>
      <article class="product_article">
        <h3 class="product_h3">Citron</h3>
        <figure>
        <img class="product_img" src="images/fruit-lemon.jpg" alt="Citron">
        <figcaption>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
        </figcaption>
        </figure>
      </article>
      <article class="product_article">
        <h3 class="product_h3">Apelsin</h3>
        <figure>
        <img class="product_img" src="images/fruit-orange.jpg" alt="Apelsin">
        <figcaption>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
        </figcaption>
        </figure>
      </article>
    </main>
  </body>
</html>
{%endhighlight%}
<figcaption>index.html för uppgift 14.3.a</figcaption>
