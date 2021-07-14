var burger = document.querySelector(".hamburger");
var navItems = document.querySelector(".nav-items");
var overlay = document.querySelector(".overlay");
var bannerLg = document.querySelector('.mobile-image');

burger.addEventListener('click', function(){
    navItems.classList.toggle('open');
    burger.classList.toggle('isactive');
    overlay.classList.toggle('opacity');
    document.body.classList.toggle('nav-open');
    bannerLg.classList.toggle('opacity-1');
})