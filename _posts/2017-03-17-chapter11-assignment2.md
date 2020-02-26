---
layout: post
title:  "Övning 11.2"
subtitle: "Logga in 2"
permalink: /chapter111/assignment2/
categories: "Kapitel11"
tags: "answer"
---
Formulär där

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
