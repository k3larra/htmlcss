---
layout: post
title:  "Övning 19.1"
subtitle: "Schack"
permalink: /chapter118/assignment1b/
categories: "Kapitel18"
tags: "answer"
---
Delar av koden för schackspelet. Vi använder id-selektorer för de element som det bara får finnas ett av, devs spelplan samt de olika pjäserna. Vi samlar då egenskaper i class selektorer så vi undviker att upprepa kod eftersom det försvårar felsökning samt kan ge svårfunna fel.


{%highlight html linenos%}
<!--Mer HTML ovan.-->
<body>
  <!-- Innehåll som ska visas i en webbläsare anges här -->
  <div id="chess">
  <div class="piece" id="black-king">&#9818;</div>
  <div class="piece" id="white-queen">&#9813;</div>
  <div class="piece" id="white-pawn1">&#9817;</div>
  <div class="piece" id="black-pawn1">&#9823;</div>
  <!--all other pieces-->
  </div>
</body>
<!--kod för resten av sidan-->
{%endhighlight%}
<figcaption>En loginruta för inloggning.</figcaption>
{%highlight css linenos%}
body {
  background-color: lightgray;
  color: black;
  background-image : url('images/grass.png ');
  background-repeat:repeat;
}
/*Chess board*/
#chess{
  background-image : url('images/chess-board.png ');
  position:absolute; /*SPelplanen lyfts ur det normala flödet och placeras centrlt på sidan.
  Detta genom att margin:auto anges, det medför, eftersom storleken på spelplanen är angiven exakt och
  top, bottom,right och left är 0, att marginalen, för att hitta en kompromiss placerar spelplanen i mitten*/
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 512px;
  height: 512px;
  background-color: gray;
}
/*shared CSS-classes for the pieces*/
.piece{
  position: absolute; /*lyft ur alla spelpjäser fårn det normala flödet*/
  box-sizing: border-box; /*Anger vi detta ingär marginalen i width o height,
  vilket gör det enklare att positionera se avsnitt 16.5)*/
  width:66px;
  height:66px;
  padding-top: 0.40rem;
  padding-left: 1rem;
  padding-right:0;
  font-size: 2rem;
}
.piece:hover{
  opacity:0.6;
  font-size: 2.2rem;
}

/*Chess pieces and their positions*/
#black-king{
  left:256px; /*Här anger vi positionen exakt med pixlar, dvs övre västra hörnet för en pjäsens container*/
  top:0px;
}
#white-queen{
  /*För att förenkla det hela kan den "inbyggda" räknaren calc() användas.
  På så sätt behöver bara ett heltal ändras som motsvarar rutan räknat från övre vänstra hörnan
  (använd siffrorna 0-7) */
  left:calc(7*64px);
  top:calc(7*64px);;
}
#white-pawn1{
  left:calc(5*64px);
  top:calc(6*64px);;
}
#black-pawn1{
  left:calc(0*64px);
  top:calc(0*64px);;
}
/*And all other pieces. Codes here: https://en.wikipedia.org/wiki/Chess_symbols_in_Unicode */
{%endhighlight%}
<figcaption>CSS-kod för schackspel;</figcaption>
