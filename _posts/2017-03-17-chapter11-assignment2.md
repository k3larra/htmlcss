---
layout: post
title:  "Övning 11.2"
subtitle: "Logga in 2"
permalink: /chapter111/assignment2/
categories: "Kapitel11"
tags: "answer"
---
Formulär där
<p class="codepen" data-height="300" data-theme-id="28514" data-default-tab="html,result" data-user="k3lara" data-slug-hash="jOPwmZo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Övning 11.2">
  <span>See the Pen <a href="https://codepen.io/k3lara/pen/jOPwmZo">
  Övning 11.2</a> by Lars Holmberg (<a href="https://codepen.io/k3lara">@k3lara</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<figcaption>lllll.</figcaption>
```HTML
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="Beskrivning">
    <meta name="author" content="Montathar Faraon">
    <title>Template</title>
  </head>
  <body>
    <h3>Lovande unga kontnärer ställer ut på Subversiva Galleriet</h3>
    <form method="get">
      <fieldset>
        <legend>Specialvisning</legend>
        <div>
          <input type="checkbox" name="artist" value="ca" id="ca">
          <label for="ca">Chris Alvarez
          </label >
          <input type="checkbox" name="artist" value="en" id="en">
          <label for="en">Edvard Nilsson</label >
        </div>
        <div>
          <input type="checkbox" name="artist" value="sj" id="sj">
          <label for="sj">Sara Jakobsson</label >
          <input type="checkbox" name="artist" value="fs" id="fs">
          <label for="fs">Fahed Sahli</label >
        </div>
      </fieldset>
      <fieldset>
        <legend>Kontaktuppgifter</legend>
        <p>
          <label for="firstname">Förnamn</label>
          <input id="firstname" name="firstname" type="text">
          &nbsp;&nbsp;
          <label for="lastname">Efternamn</label>
          <input id="lastname" name="lastname" type="text">
        </p>
        <p>
          <label for="phone">Telefonummer</label>
          <input id="phone" name="phone" type="tel">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label for="email">E-postadress</label>
          <input id="email" name="email" type="email">
        </p>
      </fieldset>
      <fieldset>
        <legend>Kostönskemål</legend>
        <p>
          <label for="diet">Kost</label >
          <select id="diet" name="diet">
            <option value="no">----</option >
            <option value="veget">Vegetarian</option >
            <option value="vegan">Vegansk</option>
          </select>
        </p>
        <p>
          <label for="other_diet">Övriga kostönskemål</label>
          <br>
          <textarea id="other_diet" rows="3" cols="80" name="other_diet"></textarea >
        </p>
      </fieldset>
      <br>
      <input type="submit" name="register" value="Skicka">
    </form>
  </html>
```