const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./css/components/calculatorStyle.css">
<h1>Välkommen till Miniräknaren</h1>
  <div class="calculator-container">
    <div class="number-display">
      <input type="text" id="display" readonly placeholder="0">
    </div>
    <div class="button-display">
      <button class="clear-button" id="clear">C</button>
      <button class="clear-button" id="backspace">←</button>

      <button class="number-button" id="seven">7</button>
      <button class="number-button" id="eight">8</button>
      <button class="number-button" id="nine">9</button>
      <button class="function-button" id="division">/</button>

      <button class="number-button" id="four">4</button>
      <button class="number-button" id="five">5</button>
      <button class="number-button" id="six">6</button>
      <button class="function-button" id="multiplication">x</button>

      <button class="number-button" id="one">1</button>
      <button class="number-button" id="two">2</button>
      <button class="number-button" id="three">3</button>
      <button class="function-button" id="subtraction">-</button>

      <button class="number-button" id="zero">0</button>
      <button class="number-button" id="dot">.</button>
      <button class="function-button" id="addition">+</button>

      <button class="equals-button" id="equals">=</button>
    </div>
  </div>
`
customElements.define('my-calculator',
  /**
   * A custom web component representing a calculator.
   */
  class extends HTMLElement {
    /**
     * Creates an instance.
     */
    constructor() {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
      this.display = this.shadowRoot.getElementById('display')
      this.text = false
    }

    /**
     * Sets up event listeners when the element is connected to the DOM.
     */
    connectedCallback() {
      this.setupEventListner()
    }

    disconnectedCallback() {

    }

    /**
     * Updates the display with the given value.
     * 
     * @param {*} value - The value to be added to the display.
     */
    updateDisplay(value) {
      if (this.text || this.display.value === '0') {
        this.display.value = value
        this.text = false
      } else {
        this.display.value += value
      }
    }

    /**
     * Clears the display.
     * 
     * @returns
     */
    clearDisplay() {
      return this.display.value = ''
    }

    /**
     * Removes the last character from the display.
     * 
     * @returns
     */
    backspace() {
      return this.display.value = this.display.value.slice(0, -1)
    }

    /**
     * Handles the calculation of the result based on the current input in the display.
     */
    calculateResult() {
      const calculation = this.display.value

      if (calculation === '6+9') {
        this.display.value = '69 Noice 😏'
        this.text = true
      } else if (calculation === '4+20' || calculation === '42+0' || calculation === '4+2+0') {
        const answers = ['420 Blaze it dude 🔥', 'Getting Lit in here 💨', 'Smoke weed erryday']
        this.display.value = answers[Math.floor(Math.random() * answers.length)]
        this.text = true
      } else if (calculation === '13+37' || calculation === '1+3+3+7' || calculation === '13+3+7' || calculation === '1+33+7' || calculation === '1+3+37') {
        this.display.value = 'LEET 😎'
        this.text = true
      } else {
        this.display.value = eval(calculation)
        this.text = false
      }
    }

    /**
     * Sets up all event listners for calculator buttons.
     */
    setupEventListner() {
      this.shadowRoot.getElementById('clear').addEventListener('click', () => this.clearDisplay())
      this.shadowRoot.getElementById('backspace').addEventListener('click', () => this.backspace())
      this.shadowRoot.getElementById('equals').addEventListener('click', () => this.calculateResult())

      this.shadowRoot.getElementById('zero').addEventListener('click', () => this.updateDisplay('0'))
      this.shadowRoot.getElementById('one').addEventListener('click', () => this.updateDisplay('1'))
      this.shadowRoot.getElementById('two').addEventListener('click', () => this.updateDisplay('2'))
      this.shadowRoot.getElementById('three').addEventListener('click', () => this.updateDisplay('3'))
      this.shadowRoot.getElementById('four').addEventListener('click', () => this.updateDisplay('4'))
      this.shadowRoot.getElementById('five').addEventListener('click', () => this.updateDisplay('5'))
      this.shadowRoot.getElementById('six').addEventListener('click', () => this.updateDisplay('6'))
      this.shadowRoot.getElementById('seven').addEventListener('click', () => this.updateDisplay('7'))
      this.shadowRoot.getElementById('eight').addEventListener('click', () => this.updateDisplay('8'))
      this.shadowRoot.getElementById('nine').addEventListener('click', () => this.updateDisplay('9'))
      this.shadowRoot.getElementById('dot').addEventListener('click', () => this.updateDisplay('.'))

      this.shadowRoot.getElementById('division').addEventListener('click', () => {
        if (this.display.value === '' || this.display.value === '0') {
          return
        } else {
          this.updateDisplay('/')
        }
      })

      this.shadowRoot.getElementById('multiplication').addEventListener('click', () => {
        if (this.display.value === '' || this.display.value === '0') {
          return
        } else {
          this.updateDisplay('*')
        }
      })

      this.shadowRoot.getElementById('addition').addEventListener('click', () => {
        if (this.display.value === '+') {
          return
        } else {
          this.updateDisplay('+')
        }
      })

      this.shadowRoot.getElementById('subtraction').addEventListener('click', () => {
        if (this.display.value === '-') {
          return
        } else {
          this.updateDisplay('-')
        }
      })
    }
  }
)
