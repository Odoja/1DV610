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
    return display.value = ''
  }

  function backspace() {
    return display.value = display.value.slice(0, -1)
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

  document.getElementById('clear').addEventListener('click', clearDisplay)
  document.getElementById('backspace').addEventListener('click', backspace)
  document.getElementById('equals').addEventListener('click', calculateResult)

  document.getElementById('zero').addEventListener('click', () => updateDisplay('0'))
  document.getElementById('one').addEventListener('click', () => updateDisplay('1'))
  document.getElementById('two').addEventListener('click', () => updateDisplay('2'))
  document.getElementById('three').addEventListener('click', () => updateDisplay('3'))
  document.getElementById('four').addEventListener('click', () => updateDisplay('4'))
  document.getElementById('five').addEventListener('click', () => updateDisplay('5'))
  document.getElementById('six').addEventListener('click', () => updateDisplay('6'))
  document.getElementById('seven').addEventListener('click', () => updateDisplay('7'))
  document.getElementById('eight').addEventListener('click', () => updateDisplay('8'))
  document.getElementById('nine').addEventListener('click', () => updateDisplay('9'))
  document.getElementById('dot').addEventListener('click', () => updateDisplay('.'))
  
  document.getElementById('division').addEventListener('click', () => updateDisplay('/'))
  document.getElementById('multiplication').addEventListener('click', () => updateDisplay('x'))
  document.getElementById('addition').addEventListener('click', () => updateDisplay('+'))
  document.getElementById('subtraction').addEventListener('click', () => updateDisplay('-'))

}) 
