---
layout: post
title:  "Assignment 5.1.g"
subtitle: "Inline element 3"
permalink: /chapter105/assignment1g/
categories: "Kapitel5"
---
Nedan kan du se a-taggar som omsluter tre img-taggar med kattbilder två av dem ligger lokalt den tredje hämtas från nätet. a-taggarna gör att bilderna blir klickbara. I och med att attributet “target” har värdet “_blank” så kommer wikipediasidor med information om katter på olika språk att öppnas i en ny flik i webbläsaren.
```html
<a href="https://sv.wikipedia.org/wiki/Katt" target="_blank"><img src="images/katt.jpg" alt="katt"></a>
<a href="https://en.wikipedia.org/wiki/Cat" target="_blank"><img src="images/katt.jpg"  alt="katt"></a>
<a href="https://eo.wikipedia.org/wiki/Hejma_kato" target="_blank"><img src="http://www.triggerphoto.se/common/getimage.php?size=256&grp=_public_&id=22757"  alt="katt"></a>
```
