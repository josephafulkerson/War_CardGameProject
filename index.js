fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
.then(resp => resp.json())
.then(data =>console.log(data))

const getName = document.querySelector('#bttn')
const getNameValue = document.querySelector('#name')
const putNameHere = document.querySelector('#nameInput')
getName.addEventListener('submit', event => {
    event.preventDefault()


})
