const nav = document.querySelector("#head");
let userScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (userScrollY < window.scrollY) {
        nav.classList.add("navHidden");
    } else {
        nav.classList.remove("navHidden");
    }
    userScrollY = window.scrollY;
});