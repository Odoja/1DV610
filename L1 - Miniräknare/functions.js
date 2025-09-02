document.addEventListener('DOMContentLoaded', () => {

  const display = document.getElementById('display')

  function updateDisplay(value) {
    if (display.value === '0') {
      display.value = value
    } else {
      display.value += value
    }
  }

  function clearDisplay() {

  }

  function backspace() {
    
  }

  function addition(num1, num2) {
    return num1 + num2
  }

  function subtraction(num1, num2) {
    return num1 - num2
  }

  function multiplication(num1, num2) {
    return num1 * num2
  }

  function division(num1, num2) {
    return num1 / num2
  }

  function calculateResult() {

  }

  document.getElementById('zero').addEventListener('click', () => updateDisplay('0'))
  document.getElementById('one').addEventListener('click', () => updateDisplay('1'))

}) 
