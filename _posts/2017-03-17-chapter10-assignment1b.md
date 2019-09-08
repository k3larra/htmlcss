---
layout: post
title:  "Övning 10.1.b"
subtitle: "Tabell fortsättning"
permalink: /chapter110/assignment1b/
categories: "Kapitel10"
tags: "answer"
---
Tabell med beskrivning, rubriker samt tabellfot.

```HTML
<table>
  <caption><h3>Frukt o grönt i affären</h3></caption >
  <thead>
  <tr>
    <th>Produkt</th>
    <th>Bild</th>
    <th>Varugrupp</th>
  </tr>
  </thead>
  <tr>
    <td><a href="https://sv.wikipedia.org/wiki/Ost" target="_blank" >Cheese</a></td>
    <td><img src=images/dairy-cheese-etc-th.jpg alt="Olika ostar på ett fat"></td>
    <td>Mejeriprodukt</td>
  </tr>
  <tr>
    <td><a href="https://sv.wikipedia.org/wiki/Mj%C3%B6lk" target="_blank" >Mjölk</a></td>
    <td><img src=images/dairy-milk-th.jpg alt="Glas med mjölk"></td>
    <td>Mejeriprodukt</td>
  </tr>
  <!--Resten av raderna-->
  <tfoot>
    <tr>
      <td><h4>Vollsjö Frukt o grönt</h4></td>
      <td><b>Tel:</b><i>0708-123456</i></td>
      <td><b>E-post:</b><i>vfg@gmail.com</i></td>
    </tr>
  </tfoot>
</table>
```
<figcaption>Lite mer utvecklad tabell</figcaption>
