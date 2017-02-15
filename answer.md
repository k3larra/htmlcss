# Block element 2
a: <header>, <section> och <footer> elementen fylls helt med p-elementet, det blir ett avstånd mellan elementen på grund av att <p>-taggen har marginal före och efter.
b: Då kommer bakgrundsfärgen grå i sektionerna att synas eftersom det kommer en genomskinlig marginal mellan <p>-taggarna. Den sista <p>-taggen i <section> skapar mellanrum till nästa element som är en annan <section> eller en <footer>. Dessutom är det så att om horisontella marginaler överlappar varandra syns bara den bredaste. Det blir alltså inte dubbla horisontella marginaler (vertikala adderas dock). 
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
