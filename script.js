"use strict";
// sececting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const 
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;

//   rolling dice funcinality
btnRoll.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;

  // disply dice img
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // check if rolls 1 switch to next player.

  if (dice !== 1) {
    // add to current score
    currentScore = currentScore + dice;
    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    // switch to next player
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    activePlayer = activePlayer === 1 ? 0 : 1;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});


