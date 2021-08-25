fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
.then(resp => resp.json())
.then(data =>  {
    // card images
    //let currentTopCard // url
    //let currentBotCard // url
    //let cards
    //cardImg[0]
    //cardImg[1]
    const cardImg = Object.values(data.cards)
    renderCards(cardImg)

function renderCards(cardImg) {
    const botCard = document.querySelector('#sqr2')
    const playerCard = document.querySelector('#sqr3')

    const dealCard = document.querySelector('#sqr')
    dealCard.addEventListener('click', event => {
        cardImg.forEach(element => {
            const selectBotCard = document.querySelector('#botCard')
            const selectPlayerCard = document.querySelector('#playerCard')
            selectBotCard.src = element.image
            selectPlayerCard.src = element.image
        })
    })
    //click event to 'deal'
    //iterate through to display images
}

// First thing -> player types in name
const grab = document.querySelector('#form')
grab.addEventListener('submit', e => {
    e.preventDefault();
    const grabValue = document.querySelector('#name')
    const grabPlayer = document.querySelector('#nameInput')
    const grabBttn = document.querySelector('#bttn')
    grabPlayer.textContent=grabValue.value
})
})
