/**
 * @param {string} characters
 * @param {number} combinationLength
 */
let CombinationIterator = function (characters, combinationLength) {
  let cl = characters.length
  let res = []
  let helper = (start, prev) => {
    let pl = prev.length
    for (let i = start; i < cl; i++) {
      let rest = cl - i
      let diff = combinationLength - pl
      if (diff > rest) {
        return
      }
      let next = prev + characters[i]
      if (next.length == combinationLength) {
        res.push(next)
      } else {
        helper(i + 1, next)
      }
    }
  }
  helper(0, "")
  this.res = res.sort((a, b) => (a > b ? 1 : -1))
  this.point = 0
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  if (!this.hasNext()) {
    return undefined
  }
  let val = this.res[this.point++]
  return val
}

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.point !== this.res.length
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
