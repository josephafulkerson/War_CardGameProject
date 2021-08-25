fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
.then(resp => resp.json())
.then(data =>console.log(data))

// First thing -> player types in name
e.preventDefault()

grabValue.addEventListener('submit', e => {
    const grabPlayer = document.querySelector('#nameInput')
    const grabValue = document.querySelector('#name')
    //const grabBttn = document.querySelector('#bttn')
    grabPlayer.innerHTML = grabValue
})



// const getName = document.querySelector('#bttn')
// const getNameValue = document.querySelector('#name')
// const putNameHere = document.querySelector('#nameInput')
// getName.addEventListener('submit', event => {
//     event.preventDefault()


// })
