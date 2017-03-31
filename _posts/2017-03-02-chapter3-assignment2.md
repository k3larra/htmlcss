---
layout: post
title:  "Uppgift 3.2"
subtitle: "Frukt och grönt"
permalink: /chapter103/assignment2/
categories: "Kapitel3"
tags: "answer"
---
De fyra sidorna sammanlänkade så att det går att navigera mellan dem.
{% highlight html linenos%}
<!DOCTYPE html>
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
{% endhighlight%}
<figcaption>Filen index.html. Länkarna har i det sista fallet a-taggen runt h2-taggen. det har i detta fall egentligen ingen hetydelse hur du anger dem.</figcaption>
{% highlight html linenos%}
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Grönsaker</title>
    <meta charset="utf-8">
  </head>
  <body>
    <section >
      <h1>Artiklar om grönsaker</h1>
      <article>
        <h2>Morötter</h2 >
          <p><img src="images/vegetables-carrot-etc.jpg" alt="Morot"></p>
          <p>Lite beska men ändå goda</p>
      </article>
      <article>
        <h2>Potatis</h2 >
        <p><img src="images/vegetables-potato.jpg" alt="Potatis"></p>
        <p>Jordig och mjölig</p>
      </article>
    </section>
    <p><a href="index.html">Back</a></p>
  </body>
</html>
{% endhighlight%}
<figcaption>Filen articles-vegetables.html</figcaption>
{% highlight html linenos%}
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Frukt</title>
    <meta charset="utf-8">
  </head >
  <body>
    <section >
      <h1>Frukt</h1>
      <article>
        <h2>Citron</h2>
        <p><img src="images/fruit-lemon.jpg" alt="Citron"></p>
        <p>Sur o fin</p>
      </article>
      <article>
        <h2>Apelsin</h2>
        <p><img src="images/fruit-orange.jpg" alt="Apelsin"></p>
        <p>Söta apelsiner med skal och kärnor</p>
      </article>
    </section>
    <p><a href="index.html">Back</a></p>
  </body>
</html>
{% endhighlight%}
<figcaption>Filen articles-fruits.html</figcaption>
{% highlight html linenos%}
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Mejeriprodukter</title>
    <meta charset="utf-8">
  </head >
  <body>
    <section >
      <h1>Mejeriprodukter</h1>
      <article>
        <h2>Ost</h2>
        <p><img src="images/dairy-cheese-etc.jpg" alt="Ost med mera"></p>
        <p>Ostbricka</p>
      </article>
      <article>
        <h2>Mjölk</h2>
        <p><img src="images/dairy-milk.jpg" alt="Mjölk"></p>
        <p>Härlig mjölk att lapa.</p>
      </article>
    </section>
    <p><a href="index.html">Back</a></p>
  <body>
</html>
{% endhighlight%}
<figcaption>Filen articles-dairy-products.html</figcaption>
