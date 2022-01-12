// VARIABLES
const nav = document.querySelector('#head');
let userScrollY = window.scrollY;
const openModelButton = document.querySelectorAll('#model-trash');
const closeModelButton = document.querySelectorAll('#model-close-btn');
const overlay = document.getElementById('overlay');


// EVENT LISTENERS
window.addEventListener('scroll', () => {
    if (userScrollY < window.scrollY) {
        nav.classList.add("navHidden");
    } else {
        nav.classList.remove("navHidden");
    }
    userScrollY = window.scrollY;
});

// FUNCTIONS
openModelButton.forEach(button => {
    button.addEventListener('click', () => {
        const model = document.querySelector(button.dataset.modelTarget);
        openModel(model);
    });
});

closeModelButton.forEach(button => {
    button.addEventListener('click', () => {
        const model = button.closest('.model');
        closeModel(model);
    });
});

function openModel(model) {
    if(model === null) return
    model.classList.add('active');
    overlay.classList.add('active');
};

function closeModel(model) {
    if(model === null) return
    model.classList.remove('active');
    overlay.classList.remove('active');
};
