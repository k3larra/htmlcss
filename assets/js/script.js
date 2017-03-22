if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

function onDocumentReady() {
  console.log("lOADED!");
  var nav = document.getElementById('nav-main').addEventListener("click",navigation);
}

function navigation(e){
  //console.log(e.target.parentNode);
  var element = e.target.parentNode;
  //console.log(element.nextElementSibling.nodeName);
  if(element.nextElementSibling!==null&&element.nextElementSibling.nodeName=="UL"){
      console.log("JEpp");
    if (element.nextElementSibling.style.display===""||element.nextElementSibling.style.display==="none"){
      element.nextElementSibling.style.display="block";
    }else{
      element.nextElementSibling.style.display="none";
    }
  }
}
