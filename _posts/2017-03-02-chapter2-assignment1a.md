---
layout: post
title:  "Övning 2.1.a"
subtitle: "Filstruktur"
permalink: /chapter102/assignment1a/
categories: "Kapitel2"
tags: "answer"
---
I Övningerna arbetar vi med nedastående filstruktur, det går såklart att organisera filerna på andra sätt men för att komma igång så följer vi ett ganska strikt arbetssätt.

<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter2-assignment1a.PNG" alt="Atom skärmklipp som visar filstrukturen" style="width: 20rem;"/>

Att vi döper filen till index.html är en standard. Med denna standard slipper du skriva www.twitch.tv/index.html när du besöker sidan www.twitch.tv  eftersom webbläsaren letar efter en fil det namnet om du inte har skrivit ett filnamn. Det finns ett antal andra standardnamn till exempel default.html, default.htm default.php samt andra alternativ som var och en säger lite om vilken typ av webbserver som du besöker samt vilken teknik den använder. Detta är inget som du behöver hålla reda på men kan vara bra att veta. Döp den som skall vara standard till index.html så fungerar det.

{% highlight html linenos%}
<!DOCTYPE html>
<html lang="sv">
  <head>
    <title>Kommentarer i HTML</title>
    <meta charset="utf-8">
  </head>
  <body>
      <!--Here is a header 1 that is the highest order in the header hierarky-->
      <h1>Jag testar HTML och CSS</h1>
  </body>
</html>
{% endhighlight %}

I koden ovan är det bara det som finns inuti body-taggen som syns. Inom taggarna `<!-- -->` finns en kommentar som inte syns på sidan. Kommentarer är även användbara om du har fel i koden och inte kan hitta felet, kommentera då bort delar och ta sedan bort kommentaren på en del i taget till du hittar felet.
Om du inte är van vid att hitta filerna i din dators filsystem kan du i din editor (Atom) högerklicka på en fil och välja "Show in explorer" eller liknande så öppnas den mappen där filen ligger.
