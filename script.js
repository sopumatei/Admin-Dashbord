const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('side-bar');
const margin = '-40vw';
let open = false;

menuBtn.addEventListener('click', () => {
    if(!open) {
        open = true
        menu.style.marginLeft = 0;
    }
    else {
        open = false;
        menu.style.marginLeft = margin;
    }
})