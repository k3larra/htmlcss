---
layout: post
title:  "Övning 18.1.a"
subtitle: "Inloggning"
permalink: /chapter118/assignment1a/
categories: "Kapitel18"
tags: "answer"
---
Detta kan göras på flera bra sätt. Lösningen nedan bygger på att om `margin:auto;` så kommer marginalen att anpassa sig. I vårt fall anger top, bottom, right och left till 0, dvs att vår <div> skall gå ånda ut i hörnorna, samtidigt anger vi storleken till ett fast mått. Då måste marinalen anpassa sig och rutn hamnar i mitten.

Vi anger även z-index till 1 så att rutan hamnar ovanför sidan som ligger på z-index:0. Formulär-rutorna organiserar vi ovanför varandra med display:flex; och i kolumn samt centrerade.

{%highlight html linenos%}
<!--Mer HTML ovan.-->
<div id="form">
    <h3>Login Matvaru AB</h3>
    <input name="username" value="Användarnamn">
    <input type="password" name="password" value="lösenord">
    <input type="submit" value="Logga in">
</div>
<!--kod för resten av sidan-->
{%endhighlight%}
<figcaption>Div för ett element med pil som alltid skall vara synlig.</figcaption>
{%highlight css linenos%}
/*Mer CSS-kod ovan*/
#form{
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 20rem;
  height: 10rem;
  border-radius: 1rem;
  background-color: gray;
  z-index: 1;
  padding: 2rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#form input{
  margin-bottom: 1rem;
  width:12rem;
}
/*Mer CSS-kod efter*/
{%endhighlight%}
<figcaption>Här anger vi med position:fixed att pilen skall visas i relation till sidan, 1 rem från botten och 1rem från vänstersidan.</figcaption>
