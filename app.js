const buttonNav = document.querySelector('.bx-menu');
const Nav = document.querySelector('#nav');
const closeButton = document.querySelector('.bx-x');

buttonNav.addEventListener('click', () => {
    Nav.classList.add("navright");
})

closeButton.addEventListener('click', () => {
    Nav.classList.remove("navright");s
})