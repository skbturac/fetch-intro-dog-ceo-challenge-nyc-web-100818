document.addEventListener('DOMContentLoaded', function(event) {
  console.log('%c HI', 'color: firebrick')
  const dogImageContainer = document.querySelector('#dog-image-container')
  const dogBreedUl = document.querySelector('#dog-breeds')
  const dropBreedDown = document.querySelector('#breed-dropdown')
  const breedButtons = document.querySelectorAll('.breed-button')


// Challenge 1
  fetchImgURL = () => {
    fetch(`https://dog.ceo/api/breeds/image/random/4`)
      .then(response => response.json())
      .then(json => {

        json.message.forEach(function(message) {
          const dogImageContainerUl = document.querySelector('ul')
          const dogImageLi = document.createElement('li')
          dogImageLi.innerHTML = `<img src=${message} height="200" width="200" align="middle">`
          dogImageContainerUl.append(dogImageLi)
          dogImageContainer.append(dogImageContainerUl)
        })
      })
  }
  fetchImgURL()

// Challenge 2
  fetchBreedURL = () => {
    fetch(`https://dog.ceo/api/breeds/list/all`)
      .then(response => response.json())
      .then(json => {

        for (var breed in json.message ) {
          const dogBreedLi = document.createElement('li')
          dogBreedUl.append(dogBreedLi)
          const breedButton = `<button class='breed-button' value = ${breed}> ${breed}</button>`
          dogBreedLi.innerHTML = breedButton
        }
      })
  }
  fetchBreedURL()

  // Challenge 3




  // Challenge 4





})
