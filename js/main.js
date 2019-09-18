$(document).ready(function(){
  $('.slider').owlCarousel({
      items: 1,
      loop: false,
      nav: true,
      URLhashListener: true
  });
});

//Nav Scroll
var navLinks = document.querySelectorAll('.header-nav li a');
for(let i=0; i<=navLinks.length-1;i++){
    navLinks[i].addEventListener('click',function(event){
        event.preventDefault();
        let hashVal = navLinks[i].getAttribute('href').slice(1);
        let hashLoc = document.getElementById(hashVal);
        hashLoc.scrollIntoView({
            behavior: "smooth", 
            block: "start"
        });
    });
}

//To Top
function toTop(){
    window.scroll({
        left:0,
        top:0,
        behavior: 'smooth'
    })
}

//Next Section
function nextSec(){
    window.scroll({
        left:0,
        top: 750,
        behavior: 'smooth'
    })
}


//Sticky Nav
window.addEventListener('scroll',stickyNav);
function stickyNav(){
    let nav = document.getElementsByTagName('header');
    if(window.scrollY > 150){
        nav[0].classList.add('sticky');
    }else{
        nav[0].classList.remove('sticky');
    }
}

//Mobile Nav
var navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click',function(event){
    event.preventDefault();
    let header = document.getElementsByTagName('header');
    header[0].classList.toggle('menu-expanded');
});