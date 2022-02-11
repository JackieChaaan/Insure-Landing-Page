let  menu = document.getElementById("menu");
let menubar = document.getElementById("mobile-nav");
let close = document.getElementById("close");

menu.addEventListener('click',function(){
    menubar.style.display = 'block';
    menu.style.display = 'none';
    close.style.display = 'block';
});

close.addEventListener('click',function(){
    menubar.style.display = 'none';
    menu.style.display = 'block';
    close.style.display = 'none';
});

