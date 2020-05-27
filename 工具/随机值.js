function random(low, high) {
  return Math.round(Math.random() * (high - low)) + low
}

module.exports = random
