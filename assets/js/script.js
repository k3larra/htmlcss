if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

function onDocumentReady() {
  console.log("lOADED!");
  document.getElementById('nav-main').addEventListener("click",navigation);
  //document.getElementById("sectionStart").addEventListener("click",showAssignments);
  //document.getElementById("sectionEnd").addEventListener("click",showAssignments);
  showStart(true);
}

function navigation(e){
  //There can only be one active remove all active
  console.log(e.target.id);
  //if(e.target.id!=="navAbout"&&e.target.id!=="navStart"){
  if(e.target.id!=="navAbout"){
    showAssignments();
  }
  if((e.target.id=="main-head")||(e.target.parentElement.id=="main-head")){
    console.log(e.target);
    showStart(false);
  }
  if(e.target.id=="navAbout"){
    showAbout();
  }
  /*
  if(e.target.id=="main-end"){
    showEnd();
  }*/
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

  if (e.target.classList.contains("nav-category")||e.target.classList.contains("nav-element")){
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
}

function hideStart(){
  //document.getElementById("sectionStart").style.display = "none";
  //document.getElementById("sectionEnd").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}
function showEnd(){
  //document.getElementById("sectionEnd").style.display = "block";
  document.getElementById("mainContent").style.display = "block";
  //document.getElementById("sectionStart").style.display = "none";
}
function showStart(pageReloaded){
  if(pageReloaded&&(document.URL.indexOf("#")!==-1)){ //Page reloaded
    //document.getElementById("sectionStart").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    //document.getElementById("sectionEnd").style.display = "none";
  }else{   //clicked the menu item
    //document.getElementById("sectionStart").style.display = "block";
    showAbout();
    document.getElementById("mainContent").style.display = "block";
    //document.getElementById("sectionEnd").style.display = "none";
  }
}

function showAbout(){
  //document.getElementById("sectionStart").style.display = "none";
  document.getElementById("sectionIntro").style.display = "block";
  document.getElementById("assignments").style.display = "none";
  //document.getElementById("sectionEnd").style.display = "none";
}

function showAssignments(){
  hideStart();
  //document.getElementById("sectionStart").style.display = "none";
  document.getElementById("sectionIntro").style.display = "none";
  document.getElementById("assignments").style.display = "block";
}
