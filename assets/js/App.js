// query selector

const select = (element) => {
    return document.querySelector(element);
}

let menuToggler = select('.menu-toggle');
let body = select('body');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
})

