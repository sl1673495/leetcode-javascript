/**
 * @param {string} tiles
 * @return {number}
 */
let numTilePossibilities = function (tiles) {
  let res = new Set()

  let helper = (prev, rest) => {
      if (prev.length > 0) {
          res.add(prev)
      }

      for (let i = 0; i < rest.length; i++) {
          let char = rest[i]
          let cur = prev + char
          helper(cur, rest.substring(0, i) + rest.substring(i + 1))
      }
  }

  helper('', tiles)

  return res.size
};