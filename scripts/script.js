const hambar = document.querySelector('.hamburger');
const mob_menu = document.querySelector('.mob-menu');
hambar.addEventListener('click',()=>{
    hambar.classList.toggle('active');
    mob_menu.classList.toggle('active');
    
    // overflow toggle
    if(document.body.style.overflow != 'hidden'){
        document.body.style.overflow = 'hidden';
    }else {
        document.body.style.overflow = 'auto';
    }
})