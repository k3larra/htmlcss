---
layout: post
title:  "Övning 10.1.d"
subtitle: "Sammanslagning av kolumner"
permalink: /chapter110/assignment1d/
categories: "Kapitel10"
tags: "answer"
---
Del av lösning på övningen. Här visas de två sista raderna i en tabell. I tabellfonten `<tfoot>` har vi slagit ihop alla tre kolumnerna till en så att informationen on affären kan utnyttja hela kolumnbredden.

```HTML
<table>
  <!--Caption tabellhuvud och rader-->
  <tr>
    <td>
      <a href="https://sv.wikipedia.org/wiki/Potatis" target="_blank">Potatis</a>
    </td>
    <td><img src="images/vegetables-potato-th.jpg" alt="Potatis"></td>
  </tr>
  <tfoot>
    <tr>
      <td colspan="3">
        <h4>Vollsjö Frukt o grönt</h4>
        <p>
          <b>Tel:</b>
          <i>0708-123456</i>
        </p>
        <p>
          <b>E-post:</b>
          <i>vfg@gmail.com</i>
        </p>
      </td>
    </tr>
  </tfoot>
</table>
```
<figcaption>Tabell med tre kolumner sammanslagna på sista raden. Att den sista raden är ett tfoot-element gör ingen skillnad sammanslagning fungera på samma sätt för vanliga tabell-rader (tr-element).</figcaption>
