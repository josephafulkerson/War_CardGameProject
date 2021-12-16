document.addEventListener('DOMContentLoaded', () => {

let deck_ID = ''
const loadAPI = fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
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
    let botCounter = 0
    let playerCounter = 0
    dealCard.addEventListener('click', event => {
        fetch(`https://deckofcardsapi.com/api/deck/${deck_ID}/draw/?count=2`)
        .then(resp => resp.json())
        .then(data => {
          
            botCard.src = data.cards[0].image
            playerCard.src = data.cards[1].image
            //game logic
            const botHitMe = (data.cards[0].value)
            const playerHitMe = (data.cards[1].value)

            const cardFacetoValue = {
                'ACE': 14,
                'KING': 13,
                'QUEEN': 12,
                'JACK': 11,
                '10': 10,
                '9': 9,
                '8': 8,
                '7': 7,
                '6': 6,
                '5': 5,
                '4': 4,
                '3': 3,
                '2': 2
            }
       
            if (cardFacetoValue[botHitMe] > cardFacetoValue[playerHitMe]) {
               botCounter++
            } else if (cardFacetoValue[botHitMe] < cardFacetoValue[playerHitMe]) {
                playerCounter++
            }

            console.log(botHitMe)


            const newScoreBot = document.querySelector('#botScore')
            const newScorePlayer = document.querySelector('#playerScore')
            newScoreBot.textContent = botCounter
            newScorePlayer.textContent = playerCounter

            function gameOver() {
                if (botCounter > playerCounter){
                    alert("Bot Wins! Refresh the page begin a new round")
                }
                else if (playerCounter > botCounter) {
                    alert("You win! Refresh the page to begin a new round")
                }
                else {
                    alert("Tie! Refresh the page to play again")
                }
            }
            (data.remaining === 0 ? gameOver() : null)
        })

        })
})


