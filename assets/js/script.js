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
  console.log(e.target);
  var navElements = document.getElementsByClassName('nav-element');
  for (var i = 0; i < navElements.length; ++i) {
    var item = navElements[i];
    item.classList.remove("active");
  }
  var navCategories = document.getElementsByClassName('nav-category');
  for (var i = 0; i < navCategories.length; ++i) {
    var item = navCategories[i]; 
    item.classList.remove("active");
  }
  e.target.classList.add("active");
  var element = e.target.parentNode;
  //console.log(element.nextElementSibling.nodeName);
  if(element.nextElementSibling!==null&&element.nextElementSibling.nodeName=="UL"){  //Check if it is sub
      console.log("JEpp");
    if (element.nextElementSibling.style.display===""||element.nextElementSibling.style.display==="none"){
      element.nextElementSibling.style.display="block";
    }else{
      element.nextElementSibling.style.display="none";
    }
  }
}
