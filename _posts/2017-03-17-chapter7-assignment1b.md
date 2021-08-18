---
layout: post
title:  "Övning 7.1.b"
subtitle: "Target"
permalink: /chapter107/assignment1b/
categories: "Kapitel7"
tags: "answer"
---
Attributet target för a-taggar. target="_self" är standard och behöver inte anges, detta använde vi i föregående övning. Alternativet target="_blank" öppnar i ny flik och brukar användas när du lämnar en webbplats eller visar ett innehåll som du tror användaren vill se parallellt med din andra sida. Detta kan till exempel vara en manual. _parent och _top används inte direkt längre utan är en kvarleva från gamla tider och HTML taggen `<frame>`. De beter sig som '_self' om du inte har ramar.

```html
<h1>Mina projekt</h1>
<a href="myprojects/project1.html" target="_self"><h2>Projekt 1</h2></a>
<h2><a href="myprojects/project1.html" target="_blank">Projekt 2</a></h2>
<h2><a href="myprojects/project3.html">Projekt 3</a></h2>
```
<figcaption>Navigationsdelen med det två alternativ på target för en a-tagg som används.</figcaption>
