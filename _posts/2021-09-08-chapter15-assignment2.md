---
layout: post
title:  "Övning 15.2"
subtitle: "Typsnitt"
permalink: /chapter115/assignment2/
categories: "Kapitel15"
tags: "answer"
---
I nedanstående kod använder vi rem som enhet för att relatera storleken till standardstorleken för text på sidan. Använder du em så är storleken relativt föräldra-elementet och då blir det lite mer att räkna på.

För typselektorer använder vi syntax för barnselektorer ___ul ul li___ det vill säga: ett li-element inuti ett ul-element som i sin tur ligger i ett ul-element. Denna regel har då högre specificitet än ___li___ och därför gäller den. I den nedre listan, den med klasselektorer, är dessa regler mer specifika än typselektorer, och därför gäller dessa. Titta gärna på detta i inspektera-verktyget i din webbläsare.

Ett val mellan typselektorer och klasselektorer är delvis en smaksak, vill göra ändringar som gäller, till exempel, alla listor är klass-selektorer bra. Det kan vara så att att du alltid vill rendera inre listor på ett annat sätt än yttre. Då behöver du inte komma ihåg ett klassnamn utan det fungerar direkt.

{%highlight html linenos%}
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="utf-8">
  <meta name="description" content="Mall">
  <meta name="author" content="fnamn enamn">
  <link rel="stylesheet" href="style.css">
  <title>Uppgift 14.1.a</title>
</head>
<body>
  <main>
    <h3>Med typ-selektorer</h3>
    <ul>
      <li>Frukt<ul>
        <li>Apelsin</li>
        <li>Äpple</li>
        <li>Päron</li>
      </ul>
    </li>
      <li>Grönsaker
      <ul>
        <li>Purjolök</li>
        <li>Lök</li>
        <li>Blomkål</li>
      </ul>
    </ul>
<h3>Med klass-selektorer</h3>
    <ul>
      <li class=li-prop-main>Frukt
        <ul>
          <li class=li-prop-inner>Apelsin</li>
          <li class=li-prop-inner>Äpple</li>
          <li class=li-prop-inner>Päron</li>
        </ul>
      </li>
      <li class=li-prop-main>Grönsaker
      <ul>
        <li class=li-prop-inner>Purjolök</li>
        <li class=li-prop-inner>Lök</li>
        <li class=li-prop-inner>Blomkål</li>
      </ul>
      </li>
    </ul>
  </main>
</body>
</html>
{%endhighlight%}
<figcaption>De två listorna, den ena med klass-selektorer.</figcaption>
{%highlight css linenos%}
ul ul li{
  font-size: 0.5rem;
}
li{
    font-size: 1.5rem;
}

.li-prop-main{
  font-size: 1.5rem;
}
.li-prop-inner{
   font-size: 0.5rem;
}
{%endhighlight%}
<figcaption>CSS regel kopplade till klass respektive typ</figcaption>
