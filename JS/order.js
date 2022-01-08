const order = document.querySelector('.order--popUp__out')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    order.classList.remove('hidden')
})
