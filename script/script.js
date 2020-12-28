window.addEventListener( "DOMContentLoaded", () =>  {
    const menu = document.querySelector(".menu");
    let menuItem = document.querySelector(".menuItem");
    let burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
        burger.classList.toggle("burger_active");
        menu.classList.toggle("menu_active")
    });
    menuItem.forEach(item => {
        item.addEventListener("click" , () => {
            burger.classList.toggle("burger_active");
            menu.classList.toggle("menu_active")
        })
    })
});
$(document).ready(function(){
    document.querySelectorAll('button[data-modal=consultation]').forEach(el=>el.addEventListener('click',() =>{
        document.querySelectorAll('.overlay, #consultation').forEach(el=>el.style.display='block')
    }));
    Array.from(document.querySelectorAll('.modal_close')).forEach(el=>el.addEventListener('click', () =>{
        const modal = ['.overlay', '#thanks', '#consultation'];
        modal.map(el => document.querySelector(el).style.display='none')
    }));
    document.querySelectorAll('.modal_btn').forEach(el=>el.addEventListener( 'click', () =>{
        document.querySelectorAll('.overlay, #thanks').forEach(el=>el.style.display='block');
        document.querySelectorAll('#order, #consultation').forEach(el=>el.style.display='none')
    }));
    $(window) .scroll(function () {
        if ($(this).scrollTop() > 1000){
            $('.pageup').fadeIn()
        }else{
            $('.pageup').fadeOut()
        }

    });

});

