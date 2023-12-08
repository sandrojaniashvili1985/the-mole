/* 
  create function: generateRandomNumber
  Let the mole come out in different holes
  Let the mole come out in different time
 */

const game = {
  score: 0,
  time: 10,
  isPlaying: false
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

// Let the mole come out in different holes
function generateRandomHole() {
  if (game.isPlaying) return
  const randomIndex = generateRandomNumber(holes.length)
  return holes[randomIndex]
}

// Let the mole come out in different time
function generateRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
