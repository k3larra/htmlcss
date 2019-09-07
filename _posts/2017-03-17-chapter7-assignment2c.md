---
layout: post
title:  "Övning 7.2.c"
subtitle: "Bildlänkar"
permalink: /chapter107/assignment2c/
categories: "Kapitel7"
tags: "answer"
---
Nedan finns ett förslag på hur koden för indexsidan kan se ut i sin helhet. Under den finns koden för hur ett av projekten kan se ut.

```html
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Mina projekt</title>
    <meta charset="utf-8">
  </head>
  <body>
    <header>
      <h1 id="topOfPage">Mina projekt</h1>
    </header>
    <nav>
      <p>
        <a href="#project1">Projekt 1</a>
      </p>
      <p>
        <a href="#project2">Projekt 2</a>
      </p>
      <p>
        <a href="#project3">Projekt 3</a>
      </p>
    </nav>
    <main>
      <article id="project1">
        <h1>Projekt 1</h1>
        <a href="myprojects/project1.html"><img src="images/dairy-milk-th.jpg" alt="Milk thumbnail"></a>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.?
        </p>
        <p>
          <a href="#topOfPage">Tillbaka</a>
        </p>
      </article>
      <article id="project2">
        <h1>Projekt 2</h1>
        <a href="myprojects/project2.html"><img src="images/fruit-apple-th.png" alt="Apple thumbnail"></a>
        <p>Sed quia consequuntur magni dolores eos qui ratione voluptatem.
        </p>
        <p>
          <a href="#topOfPage">Tillbaka</a>
        </p>
      </article>
      <article id="project3">
        <h1>Projekt 3</h1>
        <a href="myprojects/project2.html"><img src="images/fruit-lemon-th.jpg" alt="Lemmon thumbnail"></a>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
        <p>
          <a href="#topOfPage">Tillbaka</a>
        </p>
      </article>
    </main>
    <footer>
      <a href="mailto:montathar.faraon@gmail.com">Skicka mail</a>
    </footer>
  </body>
</html>
```
<figcaption>Den kompletta indexsidan så som vi skrivit den.</figcaption>
```html
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Projekt 1</title>
    <meta charset="utf-8">
  </head>
  <body>
  <header>
    <h1>Projekt 1</h1>
  </header>
  <main>
    <p><img src="../images/dairy-milk.jpg" alt="Milk">
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
      voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
      tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
      ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <h2><a href="../index.html#project1">Startsidan</a></h2>
  </main>
    <footer>
      <a href =" mailto:montathar.faraon@gmail.com">Skicka mail</a>
    </footer>
  </body>
</html>
```
<figcaption>En av tre projektsidor.</figcaption>
