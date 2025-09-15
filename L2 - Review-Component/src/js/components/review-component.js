const template = document.createElement('template')
template.innerHTML = `
  <link rel="stylesheet" href="./css/review-component.css">
  <div></div>
`
customElements.define('review-component',
  /**
   * Represents a review-component element that can be used to create draggable popup windows.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the review-component element.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
    }

    /**
     * Sets up event listeners when the element is connected to the DOM.
     */
    connectedCallback () {
    }
  }
)
