---
layout: post
title:  "Övning 11.1.a"
subtitle: "Logga in 1"
permalink: /chapter111/assignment1a/
categories: "Kapitel11"
tags: "answer"
---
Ett mycket enkelt formulär. Vi har utelämnat attributet `action="serverfil.php"` i form-elementet eftersom vi inte har någon server som kan ta emot det vi skickar. I stället för att använda `<label>` har vi skrivit in `value=` direkt i inmatningsfälten.

1: När attributet `method="get"` används skickas det man lagt i formuläret som en del av adressen i en så kallad query-string. Det är den del av adressen som står efter frågetecknet nedan.
<div><img src="{{ site.url | append:site.baseurl}}/assets/images/query.PNG" alt="Adressen som visar informationen som skickats." style="width:50rem;"/></div>
Efter frågetecknet kommer informationen. I detta fall har jag anget "kl85B" som användarnamn och "qwe123" som lösenord.

2: När attributet `method="post"` används blir det fel. Med metoden `post` packas informationen in i paketet som sedan skickas till servern. Det blir fel här eftersom vi inte har någon server att skicka till.

```HTML
<form method="get">
  <input name="username" value="Användarnamn">
  <input type="password" name="password" value="lösen">
  <input type="submit" value="Logga in">
</form>
```
