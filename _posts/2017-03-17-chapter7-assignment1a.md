---
layout: post
title:  "Övning 7.1.a"
subtitle: "Länka ihop sidor"
permalink: /chapter107/assignment1a/
categories: "Kapitel7"
tags: "answer"
---
Nedanstående länkar binder ihop startsidan (index.html) med projektsidorna. Vi använder här relativa länkar som utgår från var den aktuella filen ligger. Relativa länkar har den egenskapen att man kan flytta webbsidorna så länge relationen behålls. Du kan alltså flytta hela mappen assignment1 till en annan plats i mappstrukturen. Om href-attributet inleds med ett snedstreck / så utgår länken från webbroten dvs det som anges efter webbadressen. Hade du till exempel haft webbadressen www.minakattbilder.se och länkat så här
```html
<h2><a href="/myprojects/project2.html">Projekt 2</a></h2>
```
Så skulle ditt projekt2 ligga in en undermapp med adressen
www.minakattbilder.se/myprojects/project2.html
medan filen med länken
```html
<h2><a href="myprojects/project2.html">Projekt 2</a></h2>
```
måste ligga som en undermapp till den filen (index.html i detta fall) som du länkar från.

*Hur man gör är delvis en smaksak men använd relativa länkar om du är osäker för de fungerar alltid på samma sätt lokalt på din dator som när du laddar upp dem på ett webbhotell.*


```html
<body>
    <h1>Mina projekt</h1>
    <a href="myprojects/project1.html"><h2>Projekt 1</h2></a>
    <h2><a href="myprojects/project2.html">Projekt 2</a></h2>
    <h2><a href="myprojects/project3.html">Projekt 3</a></h2>
</body>
```
<figcaption>Här visas bodydelen av startsidan lägg märke till att det inte spelar någon roll här om a-taggen ligger runt h2-taggen eller ej. Det går att lägga a-taggen runt flera element som en bild och en bildtext.</figcaption>
<p></p>

```html
<h2><a href="../index.html">Startsidan</a></h2>
<h2><a href="project2.html">Nästa projekt</a></h2>
```
<figcaption>Här visas navigationsdelen delen av sidan project1.html ../ betyder att nästa sida finns ett steg upp i mappstrukturen och filen som skall visas heter index.html. project2.html ligger i samma mapp.</figcaption>
<p></p>

```html
<h2><a href="../">Startsidan</a></h2>
<h2><a href="project1.html">Föregående projekt</a></h2>
<h2><a href="project3.html">Nästa projekt</a></h2>
```
<figcaption>Här visas navigationsdelen delen av sidan project2.html. I den första länken till startsidan betyder. ./ att nästa sida finns ett steg upp i hierarkien. Vi har inte angett något filnamn då kommer webbservern att leta efter en fil som heter index.html. Man kan på webbservern ställa in vilka standardnamn som är tillåtna. index.html, index.htm default.html, default.htm fungerar i princip alltid som standardnamn. Ändelser som index.aspx eller index.php betyder att det är sidor som genereras av en webbserver och sidorna skräddarsyr ett innehåll anpassat till dig, till exempel ditt Twitter-flöde.</figcaption>
<p></p>

```html
<h2><a href="../index.html">Startsidan</a></h2>
<h2><a href="project2.html">Föregående projekt</a></h2>
```
<figcaption>Här visas navigationsdelen delen av sidan project3.html</figcaption>
