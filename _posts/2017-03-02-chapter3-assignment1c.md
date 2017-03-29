---
layout: post
title:  "Uppgift 3.1.c"
subtitle: "Snygga till med p-taggar och h-taggar"
permalink: /chapter103/assignment1c/
categories: "Kapitel3"
---
Användning av block-element som omsluter inline elementen a och img.
{% highlight html linenos%}
<!DOCTYPE html>
<html>
  <head>
    <title>Svar Uppgift 3</title>
    <meta charset="utf-8">
  </head>
  <body>
      <h1>HTML CSS</h1>
      <h3>Bild</h3>
      <p><img src="fruit-apple.jpg" alt="Green apple"></p>
      <h3>Externa länkar</h3>
      <p><a href="http://www.google.com" target ="_blank">Google</a></p>
      <p><a href="http://www.se" target ="_blank">Sverige</a></p>
  </body>
</html>
{% endhighlight%}
<figcaption></figcaption>
<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter3-assignment1c.PNG" alt="Chrome med inspect element" style="width:  42rem;"/>
<figcaption>Här syns slutresultatet, utvecklarverktyget i Chrome visar koden bakom sidan. I och med att a-taggarna är inom p-taggar visas de på olika rader. Paragraph (p-taggen) representerar ett textstycke och är ett block-element som visas på egen rad med avstånd före och efter.</figcaption>
