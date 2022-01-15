
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var navHeight = document.getElementById("navbar").offsetHeight,
	page = document.getElementById('page');

page.style.paddingTop = navHeight + 'px';