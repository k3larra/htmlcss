---
layout: post
title:  "Övning 18.1.b"
subtitle: "Inloggning"
permalink: /chapter118/assignment1b/
categories: "Kapitel18"
tags: "answer"
---
Att lägga en halvgenomskinlig ruta ovanpå används i ganska många sammanhang för att inaktivera delar eller en hel sida. Nedan är en ruta anpassad så att den täcker inloggningsrutan i övning 17.a.
Genom att ange `z-index:2` hamnar den överst `opacity` ger halvgenomskinlig ruta. Genom att ändra display egenskapen mellan block och none görs rutan synlig och det går inte att mata in information.
Detta kan du prova i inspektera verktyget så som indikeras nedan

{%highlight html linenos%}
<!--Mer HTML ovan.-->
<div id="hide-form">
<!--kod för resten av sidan-->
{%endhighlight%}
<figcaption>En loginruta för inloggning.</figcaption>
{%highlight css linenos%}
/*Mer CSS-kod ovan*/
#hide-form{
  display:none;
  /*display:block;*/
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 24rem;
  height: 14rem;
  border-radius: 1rem;
  background-color: black;
  opacity:0.5;
  z-index: 2;
}
/*Mer CSS-kod efter*/
{%endhighlight%}
<figcaption>En ruta som kan inaktivera rutan, utan att helt ta bort den. Det är användbart om användaren till exempel skall godkänna cockies för att få logga in.</figcaption>
<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter18-assignment1b.PNG" alt="Chrome med inspect element"/>
<figcaption>Genom att inaktivera display:none kommer standardbeteendet för en div att användas dvs. display:block. Följden blir att den halvgenomskinlig rutan visas och formuläret inaktiveras.</figcaption>
