---
layout: post
title:  "Assignment 7.1.b"
subtitle: "Länka ihop sidor"
permalink: /chapter107/assignment1b/
categories: "Kapitel7"
tags: "answer"
---
Attributet target för a-taggar. target="_self" är standard och behöver inte anges. Detta använde vi i föregående uppgift. Alternativet target="_blank" öppnar i ny flik och brukar användas när du lämnar en webbplats eller visar ett innehäll som du tror användaren vill se parallellt med din andra sida. Detta kan till exempel vara en manual. _parent och _top används inte direkt längre utan är en kvarleva från HTML taggen `<frame>` och tilhör standarden html 4.01. De beter sig som '_self' om du inte har ramar.
```html
<h1>Mina projekt</h1>
<a href="myprojects/project1.html" target="_self"><h2>Projekt 1</h2></a>
<h2><a href="myprojects/project1.html" target="_blank">Projekt 2</a></h2>
<h2><a href="myprojects/project2.html">Projekt 2</a></h2>
<h2><a href="myprojects/project3.html">Projekt 3</a></h2>
```
<figcaption>Navigationsdelen där jag lagt till en extra sida för att visa alla alternativ på target som en a-tagg kan ha.</figcaption>
