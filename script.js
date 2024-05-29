'use strict'

// Selecting Elems
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btn = document.querySelectorAll('.btn')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const activePlayer = document.querySelector('.player--active')
const playerScore0 = document.getElementById('current--0')
const playerScore1 = document.getElementById('current--1')


score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

let currScore = 0

// Rolling Dice Logic
btnRoll.addEventListener('click', function () {
    const dice_value = Math.trunc((Math.random() * 6)) + 1

    diceEl.classList.remove('hidden')
    diceEl.src = `./img/dice-${dice_value}.png`

    if (dice_value !== 1) {
        currScore += dice_value
        playerScore0.textContent = `${currScore}` // change in future

    } else {
        // Next Player
    }

})

