fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
.then(resp => resp.json())
.then(data => {
    
})

// First thing -> player types in name
const grab = document.querySelector('#form')
grab.addEventListener('submit', e => {
    e.preventDefault();
    const grabValue = document.querySelector('#name')
    const grabPlayer = document.querySelector('#nameInput')
    const grabBttn = document.querySelector('#bttn')
    grabPlayer.textContent=grabValue.value
})

//populate cards



// const getName = document.querySelector('#bttn')
// const getNameValue = document.querySelector('#name')
// const putNameHere = document.querySelector('#nameInput')
// getName.addEventListener('submit', event => {
//     event.preventDefault()
// })

// have cards populate
//create click event that 'deals' cards