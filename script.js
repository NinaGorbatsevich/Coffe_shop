let burger = document.querySelector('#burger')
let nav = document.querySelector('#nav')
burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger_active')
  nav.classList.toggle('navigation__active')
})

let submit = document.querySelector('#submit') 
let success = document.querySelector('#success')
let error = document.querySelector('#error')
let inputName = document.querySelector('#name')
let inputEmail = document.querySelector('#email')
let message = document.querySelector('#message')

submit.addEventListener('click', (e) => {
  e.preventDefault()

  if (inputName.value === '' || inputEmail.value === '' || message.value === ''){
    error.classList.add('form__fields-error_active')
  } else {
    success.classList.add('wrapper-success_active')
    error.classList.remove('form__fields-error_active')

    setTimeout(() => {
      success.classList.remove('wrapper-success_active')
      inputName.value = ''
      inputEmail.value = '' 
      message.value = ''
    }, 3000)
  }
})