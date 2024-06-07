window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var text = document.getElementById("im");
var index = 0;
var dse = document.createElement("p")

dse.innerHTML = "&#128073"
// List with professions
var e = dse.innerHTML
list = [e+"-Data Scientist-" +"&#128202;", e+"-Fullstack Developer-" +"&#128241;", e+"-Software Engineer-"+"&#128187;"];
text.innerHTML = list[0]


/* Image Card Animation*/
var bee_img = document.getElementById("hover-bee");
var bee_list_img = ["bee_far.jpg","bee_close.jpg"];
var increment = 0;

function changeImage(){
  console.log(bee_list_img[increment]);
  console.log(bee_list_img.length);
  console.log(increment);


  bee_img.setAttribute("src","img/"+ bee_list_img[increment]);
  increment++;
  if(increment>bee_list_img.length-1){
    increment = 0;
  }
}
var load =document.getElementById("load");
function loading(){

  load.setAttribute('class','spinner-grow');
}
function removeLoading(){
  load.removeAttribute('class','spinner-grow');1
}

/* Navigation bar*/
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


// This function deals with the triggering event and timeout innerHTML for page1
var titleChange = function changeTitle() {
  if (index <= list.length-1) {
    text.innerHTML = list[index];
    setTimeout(changeTitle, 1000);
    index++;
  } else {
    index = 0;
    setTimeout(changeTitle,1000);
  }
};
titleChange();