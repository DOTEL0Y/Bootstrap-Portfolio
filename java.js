window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var text = document.getElementById("im");
var index = 0;
var dse = document.createElement("p")

dse.innerHTML = "&#128073"

var e = dse.innerHTML
list = [e+"-Data Scientist-" +"&#128202;", e+"-Fullstack Developer-" +"&#128241;", e+"-Software Engineer-"+"&#128187;"];
text.innerHTML = list[0]

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



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