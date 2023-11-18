import iziToast from "izitoast";
import SlimSelect from 'slim-select'
import { fetchBreeds, fetchCatByBreed } from './cat-api'
import "izitoast/dist/css/iziToast.min.css";

const selectReff = document.querySelector('.breed-select')
const loaderTextReff = document.querySelector('.loader-text')
const loaderReff = document.querySelector('.loader')
const errorReff = document.querySelector('.error')
const catInfoReff = document.querySelector('.cat-info')

errorReff.classList.add('visually-hidden')
selectReff.classList.add('visually-hidden')

fetchBreeds()
  .then((res) => {
    markupOptions(res)
    selectReff.classList.remove('visually-hidden')
    loaderTextReff.classList.add('visually-hidden')
    loaderReff.classList.add('visually-hidden')
  })
  .catch(() => {
    loaderTextReff.classList.add('visually-hidden')
    loaderReff.classList.add('visually-hidden')
    errorReff.classList.remove('visually-hidden')
    iziToast.show({
      title: 'date',
      color: 'red',
      position: 'topCenter',
      message: 'Oops! Something went wrong! Try reloading the page!'
    });
  })

function markupOptions(data) {
  // const options = data.map((item) => {
  //   const option = document.createElement('option')
  //   option.value = item.id
  //   option.textContent = item.name
  //   selectReff.appendChild(option)
  //   return option
  // })
  // selectReff.appendChild(...options)

  new SlimSelect({
    select: '#selectElement',
    data: [...data.map((item) => ({ 'text': item.name, 'value': item.id }))],
    option: {
    },
    settings: {
      searchPlaceholder: 'Search',
      hideSelected: true,
      display: false,
      hideSelected: true,
    }
  })
}

selectReff.addEventListener('change', (evt) => {
  evt.preventDefault()
  const { value } = evt.target

  fetchCatByBreed(value)
    .then((res) => createMarkup(res))
    .catch(() => {
      errorReff.classList.remove('visually-hidden')
      iziToast.show({
        title: 'date',
        color: 'red',
        position: 'topCenter',
        message: 'Oops! Something went wrong! Try reloading the page!'
      });
    })
})

const createMarkup = (data) => {
  const { url, breeds } = data[0]
  const { name, alt_names, description, temperament } = breeds[0]
  const markup = `
  <div class='imgWripper'>
    <img src=${url} width=100% height=500 alt=${alt_names}/>  
  </div>
  <div class='descriptionWripper'>
    <h2 class='title'>${name}</h2>
    <p class='description'>${description}</p>
    <h3 class='subtitle'>${temperament}</h3>
  </div>
  `
  catInfoReff.innerHTML = markup
}


