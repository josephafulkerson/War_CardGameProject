let deck_ID = ''
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(resp => resp.json())
.then(data =>  {
    deck_ID = data.deck_id
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

//renderCards(cardImg)
    const botCard = document.querySelector('#botCard')
    const playerCard = document.querySelector('#playerCard')

    const dealCard = document.querySelector('#sqr')
    dealCard.addEventListener('click', event => {
        fetch(`https://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=2`)
        .then(resp => resp.json())
        .then(data => {
            //if ()
            botCard.src = data.cards[0].image
            playerCard.src = data.cards[1].image
            //game logic
            let botHitMe = (data.cards[0].value)
            let playerHitMe = (data.cards[1].value)

            let botScore = document.querySelector('#botScore')
            botScore.textContent = for (let i=0; i<=26; i++){

            }
        })
        })