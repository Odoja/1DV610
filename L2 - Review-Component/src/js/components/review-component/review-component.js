const template = document.createElement('template')
template.innerHTML = `
  <link rel="stylesheet" href="./css/components/review-component.css">
  <div class="container">
    <h1>Review</h1>
    <form id="review-form" method="post" action="./fill-in-endpoint"> <!-- fill in endpoint later-->
      <div id="top-section">
        <input type="text" id="username" name="username" placeholder="Name" required>
        <textarea name="review-section" placeholder="Write you're review here"></textarea>
      </div>
      <div id="bottom-section">
        <div id="star-rating">
          <span>Rating:</span>
          <input type="hidden" name="rating" id="rating" value="0">
          <svg class="star" data-value="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25 L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <svg class="star" data-value="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25 L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <svg class="star" data-value="3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25 L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <svg class="star" data-value="4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25 L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <svg class="star" data-value="5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25 L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <button type="submit" id="review-btn">Send</button>
      </div>
    </form>
    <div id="comment-section"> 
    <!-- <div> 
      <select name="" id="">
        <option value="Newest">Newest Reviews</option>
        <option value="Oldest">Oldest Reviews</option>
        <option value="Top-rated">Highest Score</option>
        <option value="Lowest-rated">Lowest Score</option>
      </select>
      </div> -->
  </div>
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
      this.currentRating = 0
      this.stars = this.shadowRoot.querySelectorAll('.star')
    }

    /**
     * Sets up event listeners when the element is connected to the DOM.
     */
    connectedCallback () {
      this.ratingSetup()
      this.showReviews()
    }

    /**
     * Setups the event listeners for the rating method.
     */
    ratingSetup () {
      this.stars.forEach((star) => {
        star.addEventListener('click', (star) => {
          const rating = star.currentTarget.getAttribute('data-value')
          this.setRating(rating)
        })

        star.addEventListener('mouseenter', (star) => {
          const currentStar = star.currentTarget.getAttribute('data-value')
          this.ratingDisplay(currentStar) // Stars are filled to the star the cursor is on.
        })

        star.addEventListener('mouseleave', () => {
          this.ratingDisplay(this.currentRating) // Stars filled returned to the one that was selected.
        })
      })
    }

    /**
     * Takes the rating obtained from param and gives the input value/the current rating the same.
     *
     * @param {*} rating - data value from stars.
     */
    setRating (rating) {
      const ratingInput = this.shadowRoot.querySelector('#rating')
      this.currentRating = rating
      ratingInput.value = rating
      this.ratingDisplay(rating)
    }

    /**
     * Updates the star color depending on the selected amount of stars.
     *
     * @param {*} rating - the amount of stars to be displayed.
     */
    ratingDisplay (rating) {
      this.stars.forEach((star) => {
        const starValue = star.getAttribute('data-value')

        if (starValue <= rating) {
          star.classList.add('filled')
        } else {
          star.classList.remove('filled')
        }
      })
    }

    /**
     * Fetches the reviews from the database and displays them.
     */
    async showReviews () {
      try {
        const res = await fetch('/review/all') // fill-in-your own route
        const reviews = await res.json()

        const commentSection = this.shadowRoot.getElementById('comment-section')

        reviews.forEach(review => {
          const container = document.createElement('div')
          container.classList.add('comment-container')

          const username = document.createElement('h4')
          username.textContent = review.username

          const text = document.createElement('p')
          text.textContent = review.review

          const rating = document.createElement('span')
          rating.textContent = `Rating: ${review.rating}/5`

          container.appendChild(username)
          container.appendChild(text)
          container.appendChild(rating)

          commentSection.appendChild(container)
        })
      } catch (err) {
        console.error(err)
      }
    }

    /**
     * Handles form data and sends it to a database through a POST request.
     */
    formLogic () {
      const form = this.shadowRoot.getElementById('review-form')

      form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const formData = new FormData(form)

        try {
          await fetch('/review/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: formData.get('username'),
              review: formData.get('review'),
              rating: formData.get('rating')
            })
          })

          form.reset()
          this.ratingInput.value = 0
          this.ratingDisplay(0)
        } catch (error) {
          console.log(error)
        }
      })
    }
  }
)
