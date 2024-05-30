'use strict'

// Selecting Elems
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btn = document.querySelectorAll('.btn')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const scores = [0, 0]
let currScore = 0
let activePlayer = 0

//Switch Player Func
const switchPlayer = () => {
   let active = document.getElementById(`current--${activePlayer}`)
   let score = document.getElementById(`score--${activePlayer}`)

   score.textContent = scores[activePlayer]

   active.textContent = 0
   activePlayer = activePlayer === 0 ? 1 : 0

   currScore = 0

   player0.classList.toggle('player--active')
   player1.classList.toggle('player--active')
}

// Check Score
const checkScore = () => {
   if (scores[activePlayer] >= 100) {
      // Declare Winner
      let player = document.querySelector(`.player--${activePlayer}`)
      player.classList.remove('player--active')
      player.classList.add('player--winner')
   }
}

// Rolling Dice Logic
btnRoll.addEventListener('click', function () {
   const dice_value = Math.trunc(Math.random() * 6) + 1

   diceEl.classList.remove('hidden')
   diceEl.src = `./img/dice-${dice_value}.png`

   let active = document.getElementById(`current--${activePlayer}`)

   if (dice_value !== 1) {
      checkScore()
      currScore += dice_value
      active.textContent = `${currScore}` // change in future
   } else {
      switchPlayer()
   }
})

btnHold.addEventListener('click', function () {
   scores[activePlayer] += currScore
   checkScore()

   score0El.textContent = scores[0]
   score1El.textContent = scores[1]

   switchPlayer()
})
