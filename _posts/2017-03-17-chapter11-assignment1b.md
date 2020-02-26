---
layout: post
title:  "Övning 11.1.b"
subtitle: "Logga in 2"
permalink: /chapter111/assignment1b/
categories: "Kapitel11"
tags: "answer"
---
FFormulär där inmatningsfälten placerats i en tabell. Detta är ett sätt att organisera delarna i ett formulär. I boken används `<div>` taggar att lägga elementen i, det är egentligen en bättre lösning men det kräver lite CSS som gör att `<div>`-boxarna kan flyttas runt. Tabeller är en central komponent men de inte så mycket som innan HTML5 och semantisk uppmärkning (Se kapitel 5). Det beror främst på att det är svårare att göra tabeller som är responsiva så att element kan flytta runt när man surfar till exempel från en mobil.

```HTML
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="utf-8">
    <title>Logga in</title>
  </head>
  <body>
    <form method="get">
      <table>
        <caption><b>Logga in på Äpplemarknaden</b></caption>
        <tr>
          <td rowspan="3"><img src="images/fruit-apple.jpg" width="100" height="100" alt="Äpple"></td>
          <td>
            <label for="username">Användarnamn</label>
            <input id="username" name="username">
          </td>
        </tr>
        <tr>
          <td>
            <label for="password">Lösenord</label>
            <input id="password" type="password" name="password">
          </td>
        </tr>
        <tr>
          <td>
            <input type="submit" value="Logga in">
          </td>
        </tr>
      </table>
    </form>
  </body>
</html>
```
