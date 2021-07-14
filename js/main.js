var burger = document.querySelector(".hamburger");
var navItems = document.querySelector(".nav-items");

burger.addEventListener('click', function(){
    navItems.classList.toggle('open');
    burger.classList.toggle('isactive');
})