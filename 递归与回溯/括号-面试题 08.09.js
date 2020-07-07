/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function (n) {
  let res = []

  let helper = (left, right, prev) => {
      if (left < 0 || right < 0 || right < left) {
          return
      }
      if (left === 0 && right === 0) {
          res.push(prev)
          return
      }

      helper(left - 1, right, prev + "(")
      helper(left, right - 1, prev + ")")
  }

  helper(n, n, '')
  return res
};