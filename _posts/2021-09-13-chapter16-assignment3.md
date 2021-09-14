---
layout: post
title:  "Övning 16.3"
subtitle: "Float"
permalink: /chapter116/assignment3/
categories: "Kapitel16"
tags: "answer"
---
I CSS koden nedan har vi använt barnselektorer får att nå elementen inuti `<article>` elementen. Vi behöver då inte skapa så många CSS klasser.

De två första raderna i CSS koden är centrala, den första `display: inline-block;` anger att så många `<article>` element som får plats skall placeras på samma rad. Den andra raden `vertical-align: top;` anger att blocken skall anpassas mot överkant (prova att ta bort raden).

Resten av CSS raderna är justeringar för att få innehållet att se någotsånär snyggt ut, detta kan göras på flera sätt.

{%highlight html linenos%}
<!-- Inside section -->
<article class="article-properties">
  <h3>Ost</h3>
  <img src="../images/dairy-cheese-etc-th.jpg" alt="Ost">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</article>
<!-- the rest of the articles inside the section element -->
{%endhighlight%}
<figcaption>HTML: Ett av article elementen i ett section-element.</figcaption>
{%highlight css linenos%}
/* Ange att alla element skall inkludera padding och kantlinje för dimensioner */
* {
  box-sizing: border-box;
}

body {
  background-color: lightgray;
  color: black;
}

.article-properties {
  display: inline-block; /* Placera det antal element som får plats på en rad */
  vertical-align: top; /* Anpassa mot överkant*/
  width: 16rem;
  height: 16rem;
  padding: 0.5rem 0.5rem 0.5rem 0.7rem;
  margin: 0.25rem;
  border: 1px solid black;
  border-radius: 2px;
  background-color: WhiteSmoke;
}

.article-properties>img {
  width: 64px;
  height: 42px;
  float: left;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}

.article-properties>h3 {
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0.5rem;
}

.article-properties>p {
  margin-top: 0px;
}
{%endhighlight%}
<figcaption>CSS för bilder och article</figcaption>
