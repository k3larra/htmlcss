---
layout: post
title:  "Uppgift 3.1.b"
subtitle: "Hyperlänkar"
permalink: /chapter3/assignment1b/
categories: "Kapitel3"
---
Hyperlänkar eller anchor-taggar kan leda dels till den egna sidan eller till en annan sida. I nedanstående exempel leder de till en ny sida som öppnas i en ny tab i webbläsaren. Att det är ett nytt fönster anges av attributet `target="_blank"` du kan även ange `_self` så öppnas länken i samma fönster.
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
<figcaption>Webbsida med en bild samt två länkar, dessa öppnas i en ny tab. </figcaption>
<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter3-assignment1b.PNG" alt="Chrome med inspect element" style="width:  42rem;"/>
<figcaption>Här syns slutresultatet, utvecklarverktyget i Chrome visar koden bakom sidan. Eftersom både img-taggen och a-taggen är inline element, det vill säge de är tänkta att visas i löptext så syns de på samma rad.</figcaption>
