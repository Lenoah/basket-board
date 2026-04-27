let homeBoardEl = document.getElementById("homeboard")
let guestBoardEl = document.getElementById("guestboard")
let countHome = 0
let countGuest = 0

function plusOneHome() {
  countHome += 1
  homeBoardEl.innerText = countHome
}

function plusTwoHome() {
  countHome += 2
  homeBoardEl.innerText = countHome
}

function plusThreeHome() {
  countHome += 3
  homeBoardEl.innerText = countHome
}

function plusOneGuest() {
  countGuest += 1
  guestBoardEl.innerText = countGuest
}

function plusTwoGuest() {
  countGuest += 2
  guestBoardEl.innerText = countGuest
}

function plusThreeGuest() {
  countGuest += 3
  guestBoardEl.innerText = countGuest
}

function resetBoard() {
  homeBoardEl.innerText = 0
  guestBoardEl.innerText = 0
  countHome = 0
  countGuest = 0
}