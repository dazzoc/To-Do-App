// VARIABLES
const nav = document.querySelector('#head');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navList');
const links = document.querySelectorAll('.navList li');
let userScrollY = window.scrollY;


// EVENT LISTENERS
window.addEventListener('scroll', () => {
    if (userScrollY < window.scrollY) {
        nav.classList.add("navHidden");
    } else {
        nav.classList.remove("navHidden");
    }
    userScrollY = window.scrollY;
});

hamburger.addEventListener('click', () => {
    navList.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    })
});


