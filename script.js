let mybutton = document.getElementById("home");
window.onscroll = function() {scrollFunction()};
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo(0,0); 
  }