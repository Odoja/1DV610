import './components/calculator.js'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  const calculator = document.querySelector('my-calculator')
  const body = document.querySelector('body')

  calculator.classList.add('hidden')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nameInput = form.querySelector('input[name="name"]')
    const name = nameInput.value.trim()

    if (name) {
      form.classList.add('hidden')
      calculator.classList.remove('hidden')

      const welcomeMessage = document.createElement('h1')
      welcomeMessage.textContent = `Välkommen till Miniräknaren, ${name}! \n Kan du hitta de magiska ekvationerna?`
      
      body.insertBefore(welcomeMessage, calculator)
    }
  })
})