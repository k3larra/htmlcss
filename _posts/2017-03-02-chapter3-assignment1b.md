---
layout: post
title:  "Uppgift 3.1.b"
subtitle: "Hyperlänkar"
permalink: /chapter103/assignment1b/
categories: "Kapitel3"
tags: "answer"
---
Hyperlänkar eller anchor-taggar kan öppna den nya sidan i aktuell flik eller i en ny flik. I nedanstående exempel öppnas de i en ny flik i webbläsaren. Att det är en ny flik anges av attributet `target="_blank"` du kan även ange `_self` så öppnas länken i aktuell flik.
{% highlight html linenos%}
<!DOCTYPE html>
<html>
  <head>
    <title>Images</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>HTML CSS</h1>
    <img src="fruit-apple.jpg" alt="Green apple">
    <a href="http://www.google.com" target="_blank">Google</a>
    <a href="http://www.se" target="_blank">Sverige</a>
  </body>
</html>
{% endhighlight%}
<figcaption>Webbsida med en bild samt två länkar, dessa öppnas i en ny flik i webbläsaren. </figcaption>
<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter3-assignment1b.PNG" alt="Chrome med inspect element" style="width:  42rem;"/>
<figcaption>Här syns slutresultatet, utvecklarverktyget i Chrome visar koden bakom sidan. Eftersom både img-taggen och a-taggen är inline element, det vill säge de är tänkta att visas i löptext så syns de på samma rad.</figcaption>
