---
layout: post
title:  "Övning 12.4"
subtitle: "Pdf"
permalink: /chapter112/assignment4/
categories: "Kapitel12"
tags: "answer"
---
I många webbläsare finns det stöd för att visa PDF-filer. Du kan konvertera dina presentationer, textdokument etc. till pdf från de flesta program. PDF är ett bra filformat eftersom det är lite svårare att ändra materialet än om du lämnar ut ditt dokument direkt, det är även ett praktiskt format eftersom det är skapat för att kunna visas på alla plattformar och alla webbläsare.

{%highlight html linenos%}
<object data="media/lecture.pdf" type="application/pdf" width="600" height="800">
  <p>
    Din webbläsare stödjer inte inbäddade pdf-filer.<br >
    Ladda ner filen:
    <a href="media/lecture.pdf">test.pdf</a>
  </p>
</object >
{%endhighlight%}
<figcaption>Kod för att bädda in en pdf-fil direkt på en sida. PDF visaren ger ofta möjlighet att ladda ner filen, man behöver altså inte lägga till någon nedladdnignslänk.</figcaption>
