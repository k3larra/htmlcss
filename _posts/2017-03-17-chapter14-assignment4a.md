---
layout: post
title:  "Övning 14.4.a"
subtitle: "ID-selektorer"
permalink: /chapter114/assignment4a/
categories: "Kapitel14"
tags: "answer"
---
.  ID selektorn har högre specificitet än class-selektorer. Den används till exempel för att hitta en speciell plats på en sida men det är inget som hindrar, även om det inte är så användbart, att du använder ID-selektorer för stilsättning.

{%highlight html linenos%}

{%endhighlight%}
<figcaption>article-elemetet med inline CSS kopplat till style-attributet</figcaption>

{%highlight css linenos%}

{%endhighlight%}
<figcaption>Css regler kopplade till article-elementet</figcaption>

<img src="{{ site.url | append:site.baseurl}}/assets/images/chapter14_assignment3c.PNG" alt="Chrome med inspect element"/>
<figcaption>Inline CSS har högst prioritet, i bilden ovan så överskuggar style-attributet både typselektorn och klass-selektorn. </figcaption>
