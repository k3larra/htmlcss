---
layout: post
title:  "Uppgift 3.1.d"
subtitle: "Länkar till andra sidor på samma webbplats"
permalink: /chapter3/assignment1d/
categories: "Kapitel3"
---
Nedan visas den delen av koden som skapar länkarna mellan sidorna.
```html
<h3>Interna länkar</h3>
<p>
  <a href="a.html">A</a>
</p>
<p>
  <a href="b.html">B</a>
</p>
```
<figcaption>Sidan index.html har denna koddel för navigationen. Lägg märke till att a-tsggarna är omslutna av p-taggar så att de hamnar på olika rader. Lägg även märke till indenteringen dvs att a-taggarna är inskjutna lite för att visa att de ligger inuti p-tagggen.</figcaption>
```html
<h3>Interna länkar</h3>
<p>
  <a href="index.html">Startsida</a>
</p>
<p>
  <a href="a.html">A</a>
</p>
```
<figcaption>Sidan b.html har denna koddel för navigationen, länkarna leder till de andra sidorna a.html samt index.html</figcaption>
```html
<h3>Interna länkar</h3>
<p>
  <a href="index.html">Startsida</a>
</p>
<p>
  <a href="b.html">B</a>
</p>
```
<figcaption>Sidan c.html har denna koddel för navigationen, länkarna leder till de andra sidorna b.html samt index.html</figcaption>
