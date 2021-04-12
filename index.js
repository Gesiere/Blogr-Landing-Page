const body = document.querySelector('body')
const drop_btn = document.querySelectorAll('.nav-links');
const close_btn = document.querySelector('.closebtn');
const hamburger_btn = document.querySelector('.openbtn');
const mobile_menu = document.querySelector('.mobile-menu');
const header_mobile = document.querySelector('.header-mobile');
const dropdown_content = document.querySelectorAll('.dropdown-content');








drop_btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        
    })
});




function openHamburger() {
    if (!header_mobile.classList.contains('active')) {

    header_mobile.classList.toggle('active');
     hamburger_btn.classList.add('hidden');
    close_btn.classList.remove('hidden');
    }
        
    }
   


function closeHamburger() {
    if (header_mobile.classList.contains('active')) {
        header_mobile.classList.toggle('active');
        hamburger_btn.classList.remove('hidden');
    close_btn.classList.add('hidden');
    body.classList.remove('noscroll');
    }
    
}
