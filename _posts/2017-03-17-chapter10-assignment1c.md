---
layout: post
title:  "Övning 10.1.c"
subtitle: "Sammanslagning av rader"
permalink: /chapter110/assignment1c/
categories: "Kapitel10"
tags: "answer"
---
Del av lösning på övningen. Här visas de två första raderna i en tabell där vi slagit ihop två rader lodrätt så att "Mejeriprodukter" bara förekommer en gång för båda raderna. Lägg märke till att det därför endast finns två tabellceller `<td>` i den andra tabellraden eftersom den sista cellen `<td>` är ihopslagen med raden ovanför.

```HTML
<table>
  <!--Caption och tabellhuvud-->
  <tr>
    <td>
      <a href="https://sv.wikipedia.org/wiki/Ost" target="_blank">Cheese</a>
    </td>
    <td><img src="images/dairy-cheese-etc-th.jpg" alt="Olika ostar på ett fat"></td>
    <td rowspan="2">Mejeriprodukt</td>
  </tr>
  <tr>
    <td>
      <a href="https://sv.wikipedia.org/wiki/Mj%C3%B6lk" target="_blank">Mjölk</a>
    </td>
    <td><img src="images/dairy-milk-th.jpg" alt="Glas med mjölk"></td>
  </tr>
  <!--Resten av raderna och tabellfot-->
</table>
```
<figcaption>Tabell med rader sammanslagna.</figcaption>
