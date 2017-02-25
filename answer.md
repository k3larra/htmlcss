# Block element 2
a:  `<header>`, <section> och <footer> elementen fylls helt med p-elementet, det blir ett avstånd mellan elementen på grund av att <p>-taggen har marginal före och efter.
b:Då kommer bakgrundsfärgen grå i sektionerna att synas eftersom det kommer en genomskinlig marginal mellan <p>-taggarna. Den sista <p>-taggen i <section> skapar mellanrum till nästa element som är en annan <section> eller en <footer>. Dessutom är det så att om horisontella marginaler överlappar varandra syns bara den bredaste. Det blir alltså inte dubbla horisontella marginaler (vertikala adderas dock).
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
code it `var again=3`
```javascript
//Wait till all content is loaded, could be external fonts scripts from other servers etc....
if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

// Page is loaded! Now event can be wired-up
function onDocumentReady() {
  console.log('Document ready.');
}
```
```html
    <p><a href="exercises/chapter1/exercise6">Uppgift 1.6 Webbsida med fel</a></p>
    <p><a href="exercises/chapter2/exercise4/images.zip">Zip with images for assignment 2.4</a><p>
    <p><a href="exercises/chapter3/exercise5/assignment3-5.zip">Zip with files for assignment 3.5</a><p>
    <p><a href="exercises/chapter5/startpackage.zip">Zip-fil med startpaket för kapitel 5</a><p>
```

```html
<p><a href="https://gist.github.com/k3larra/6fa7da6819533a6e76c0176e9004ece7">Eller som gist</a></p>
<p><a href="exercises/chapter3/exercise5/assignment3-5.zip">Zip with files for assignment 3.5</a><p>
```
