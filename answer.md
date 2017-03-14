---
layout: post
title: Blogging Like a Hacker
---
# Block element 2
Detta kan variera lite men för Chrome är 1em(16px) marginal före och efter ett p-element. Det är 0.67em(21.44px) marginal före och efter ett `<h1>` element. Då kollapsar p-marginalen efersom den är mindre och det blir 21.44px ner till h1-taggen sen 21.44 till p-taggen och sen 16px till första section-taggen.
Den brandgula färgen är header taggens bakgrundsfärg.
[MDN][de810f1d]
```html
<header>
  <h1>En liten fin sida</h1>
  <p>Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. In mi nibh, egestas non sodales ac, ultrices non nisi.
    Duis non urna diam. Suspendisse eget facilisis quam. Nulla lobortis
    dictum scelerisque. Duis vel nisi odio. Nullam laoreet leo vel
    pharetra posuere. Maecenas eu hendrerit neque, nec porta erat.
    Nam at urna dui. Curabitur gravida lectus lacus,
    id feugiat dolor dapibus eget. Donec ac nulla tempus, varius massa sit
    amet, mollis massa.</p>
</header>
<section>
  <p>Sektion 1</p>
  <p>Sektion 1 del 2</p>
</section>
<section>
  <p>testar lite</p>
  <p>testar lite mer </p>
  <p>testar lite mer </p>
  <p>testar lite mer </p>
  <p>testar lite mer </p>
</section>
<footer>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi nibh, egestas non sodales ac, ultrices non nisi. Duis non urna diam. Suspendisse eget facilisis quam. Nulla lobortis dictum scelerisque. Duis vel nisi odio. Nullam laoreet leo vel
    pharetra posuere.<br>
    Maecenas eu hendrerit neque, nec porta erat. Nam at urna dui. Curabitur gravida lectus lacus, id feugiat dolor dapibus eget. Donec ac nulla tempus, varius massa sit amet, mollis massa.</p>
</footer>
```

  [de810f1d]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing "MM"
