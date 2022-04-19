const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')

const API_URL = `https://api.lyrics.ovh`

form.addEventListener('submit', event => {
    event.preventDefault()

    const searchTerm = searchInput.value.trim()

    if(!searchTerm) {
    songsContainer.innerHTML = `<li class="warning-message">Por favor, digite um termo valido</li>`
    }
    
    console.log(searchTerm)
})