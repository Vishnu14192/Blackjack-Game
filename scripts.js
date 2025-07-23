let cards = []
let sum = 0


let player = {
    name : "Vishnu",
    profit : 0,
    spent : 0,
    earned: 0
}

let message = ""
let messageEl = document.querySelector("#guiding-text")
let cardsEl = document.querySelector("#cards-display")
let sumEl = document.querySelector("#cards-sum")
let playerEl = document.querySelector("#person-status")


let hadBlackjack = false
let isAlive = false

function getRandomCard(){
    let number = Math.floor(Math.random()*13) + 1
    if(number > 10){
        return 10
    }
    else if(number === 1){
        return 11
    }
    return number
}

function startGame(){
    cards = []
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    player.spent = 10
    renderGame()
    
}



function renderGame(){
    cardsEl.textContent = "Cards : "
    for (let i=0;i<cards.length;++i){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "sum : " + sum
    if (sum < 21){
        message = "Do you want to draw a card?"
    }
    else if(sum === 21){
        message = "You have a blackJack"
        isAlive = false
        player.earned += 100
        player.profit += (player.earned - player.spent)
        player.earned = 0 
        
    }
    else{
        message = "You lost the game"
        isAlive = false
        player.profit += (player.earned - player.spent)
        
        
    }
    messageEl.textContent = message
    
    playerEl.textContent = player.name + ": $" + player.profit


}



function newCard(){
    if(isAlive && hadBlackjack === false){
        let nextCard = getRandomCard()
        sum += nextCard
        cards.push(nextCard)
        player.spent += 5
        renderGame()
    }
    
}
