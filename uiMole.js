/*
  add event listener to start game button 
   -call the function to start the game
  show the timer and score
   -call the function to time decrement
  add event listener to moles
   -when mole is clicked, mole should be change to sad face and score increment 
   -call the function to update the score
   -call the function to show the mole 
 */

const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const timeBoard = document.querySelector('.time')

// Let the mole come out
function showMole() {
  holes[0].classList.remove('start')
  const hole = generateRandomHole()
  const time = generateRandomTime(300, 1000)
  hole.classList.add('up')

  const timeOut = setTimeout(() => {
    hole.classList.remove('up')
    showMole()
  }, time)

  if (game.time === 2) {
    clearTimeout(timeOut)
    holes.forEach(hole => hole.classList.remove('up'))
    return
  }
}

// check if the mole is clicked 
function checkMoleClick(e) {
  if (!this.classList.contains('up')) return
  game.score++
  this.classList.replace('up', 'sad')
  scoreBoard.textContent = game.score

  setTimeout(() => {
    this.classList.remove('sad')
  }, 300)
}

// start the game
function startGame() {
  showMole()
  holes.forEach(hole => hole.addEventListener('click', checkMoleClick))

  const timeInterval = setInterval(() => {
    game.time--
    timeBoard.textContent = game.time
    if (game.time === 0) {
      clearInterval(timeInterval)
      alert(`Game Over! Your score is ${game.score}`)
      resetGame()
    }
  }, 1000)
}

// reset the game
function resetGame() {
  game.score = 0
  game.time = 30
  scoreBoard.textContent = game.score
  timeBoard.textContent = game.time
  holes[0].classList.add('start')
  holes[0].addEventListener('dblclick', startGame)
}

resetGame()