---
layout: post
title:  "Övning 5.1.a"
subtitle: "CSS för att få lite färg på sidan"
permalink: /chapter105/assignment1a/
categories: "Kapitel5"
tags: "answer"
---
Raden `<link rel="stylesheet" href="css/style.css"/>` gör att din sida hittar en CSS-fil som ligger i mappen css och heter style.css. Filen style.css ser ut som nedan. Observera att CSS-regler har en syntax som skiljer sig från HTML-syntax. I denna CSS anger vi bakgrundsfärger till de olika HTML-elementen.
```css
body {
  background-color: lightgray;
}

header {
  background-color: darkorange;
}

nav {
  background-color: steelblue;
}

main {
  background-color: deeppink;
}

section {
  background-color: gray;
}

footer {
  background-color: darkslategray;
}

aside {
  background-color: limegreen;
}

p {
  background-color: white;
}

h1 {
  background-color: floralwhite;
}
```
<figcaption>I CSS kopplar du utseende till HTML-taggar. "kryllparateser" används för att ange när en regel börjar och när den slutar. I exemplet ovan har vi angett en bakgrundsfärg för några element.</figcaption>
