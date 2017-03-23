---
layout: post
title:  "Uppgift 2.1.a"
subtitle: "Filstruktur"
permalink: /chapter2/assignment1a/
categories: "Chapter2"
---
I uppgifterna arbetar vi med nedastående filstruktur, det går såklart att organisera filerna på andra sätt men för att komma igång så följer vi ett ganska strikt arbetssätt.

<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter2-assignment1a.PNG" alt="Atom skärmklipp som visar filstrukturen" style="width: 20rem;"/>

Att vi döper filen till index.html är en standard. Med denna standard slipper vi skriva filnamnet när vi till exempel besöker sidan www.twitch.tv så slipper vi skriva www.twitch.tv/index.html eftersom webbläsaren letar efter en sådan fil om du inte har skrivit ett filnamn. Det finns ett antal standardnamn till exempel default.html, default.htm default.php samt en massa andra som var och en säger lite om vilken typ av webbserver som du besöker samt vilken teknik den använder. Detta är inget som du behöver hålla reda på men kan vara bra att veta.

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

I koden ovan är det bara det som finns inuti body-taggen som syns. Kommentarer är även användbara om du har fel i koden och inte kan hitta felet, kommentera då bort delar och ta sedan bort kommentaren på en del i taget till du hittar felet.
Om du inte är van vid att hitta filerna i din dator för att klicka på em kan du i din editor (Atom) högerklicka på en fil och välja "Show in explorer" eller liknande så öppnas den mappen där filen ligger.
