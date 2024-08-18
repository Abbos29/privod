const burger = document.querySelector('.nav__burger')
const menu = document.querySelector('.nav__menu')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
})


const overlay = document.querySelector('.overlay')
const modalClose = document.querySelector('.modal__close')
const modalOpenButtons = document.querySelectorAll('.modal__open') 


modalOpenButtons.forEach(button => {
    button.addEventListener('click', () => {
        overlay.classList.add('active')
    })
})

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.classList.remove('active')
    }
})


modalClose.addEventListener('click', () => {
    overlay.classList.remove('active')
})