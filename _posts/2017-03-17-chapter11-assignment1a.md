---
layout: post
title:  "Övning 11.1.a"
subtitle: "Formulär"
permalink: /chapter111/assignment1a/
categories: "Kapitel111"
tags: "answer"
---
Ett mycket enkelt formulär. Vi har utelämnat attributet `action="serverfil.php"` i form-elementet eftersom vi inte har någon server som kan ta emot det vi skickar. I stället för att använda `<label>` har vi skrivit in `value` direkt i inmatningsfälten.

1: När attributet `method="get"` används skickas det man lagt i formuläret som den del av adressen i en del som kallas query-string. som är det som står efter frågetecknet se nedan.
<div><img src="{{ site.url | append:site.baseurl}}/assets/images/query.PNG" alt="Adressen som visar informationen som skickats." style="width:  40rem;"/></div>
Efter frågetecknet kommer informationen. I detta fall har jag anget "kl85B" som användarnamn och "qwe123" som lösenord.

2: När attributet `method="post"` används blir det fel. Med post packas informationen in i paketet som skickas till servern. Det blir fel här eftersom vi inte har någon server att skicka till.

```HTML
<form method="get">
  <input name="username" value="Användarnamn">
  <input type="password" name="password" value="pass">
  <input type="submit" value="Logga in">
</form>
</table>
```
