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
  //There can only be one active remove all active
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
  //IF next element is UL then it is a nav-category we clicked so lets expand
  if(element.nextElementSibling!==null&&element.nextElementSibling.nodeName=="UL"){  //Check if it is sub
      console.log("JEpp");
    if (element.nextElementSibling.style.display===""||element.nextElementSibling.style.display==="none"){
      element.nextElementSibling.style.display="block";
      e.target.classList.add("expanded");
    }else{
      element.nextElementSibling.style.display="none";
      e.target.classList.remove("expanded");
    }
  }
}
