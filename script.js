const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('side-bar');
const margin = '-60vw';
const closeBtn = document.querySelector('.closeBtn');
let open = false;

menuBtn.addEventListener('click', () => {
    menu.style.marginLeft = 0;
})

closeBtn.addEventListener('click', () => {
    menu.style.marginLeft = margin;
})

// Custom mobile height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);