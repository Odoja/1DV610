import './review-component/index.js'

// ----------------------------------------------------------------------------
// Handles the "active" class on the navigation links.
//
document.addEventListener('DOMContentLoaded', () => {
  // Make all currently active items inactive.
  document.querySelectorAll('a.nav-link.active').forEach((a) => {
    a.classList.remove('active')
    a.attributes.removeNamedItem('aria-current')
  })

  // Find the link to the current page and make it active.
  document.querySelectorAll(`a[href$="${location.pathname}"].nav-link`).forEach((a) => {
    a.classList.add('active')
    a.setAttribute('aria-current', 'page')
  })
})

// ----------------------------------------------------------------------------
// Handles the Update button on the Mypost page.
//

const updateButtons = document.querySelectorAll('.update-button')
const updatePopup = document.getElementById('updatePopup')
const updateForm = document.getElementById('updateForm')
const updateInput = document.getElementById('updateInput')

updateButtons.forEach(button => {
  button.addEventListener('click', function () {
    const postId = this.getAttribute('data-post-id')
    const postRow = this.closest('.post-box')
    const postDescription = postRow.querySelector('.post-description').textContent.trim()

    if (postId) {
      updateInput.value = postDescription
      updateForm.setAttribute('action', `./posts/${postId}/update`)
      updatePopup.style.display = 'block'
    } else {
      console.error('Post ID is missing.')
    }
  })
})

// ----------------------------------------------------------------------------
// Handles the Delete button on the Mypost page.
//
const deleteButtons = document.querySelectorAll('.delete-button')
const deletePopup = document.getElementById('deletePopup')
const deleteForm = document.getElementById('deleteForm')

deleteButtons.forEach(button => {
  button.addEventListener('click', function () {
    const postId = this.getAttribute('data-post-id')
    if (postId) {
      const action = `./posts/${postId}/delete`
      deleteForm.setAttribute('action', action)
      deletePopup.style.display = 'block'
    } else {
      console.error('Post ID is missing.')
    }
  })
})

// ----------------------------------------------------------------------------
// Handles the Cancel button on the Mypost page.
//
const cancelButtons = document.querySelectorAll('.cancel-button')

cancelButtons.forEach(button => {
  button.addEventListener('click', () => {
    deletePopup.style.display = 'none'
    updatePopup.style.display = 'none'
  })
})
