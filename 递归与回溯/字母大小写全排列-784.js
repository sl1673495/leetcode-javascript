/**
 * @param {string} S
 * @return {string[]}
 */
let letterCasePermutation = function (S) {
  let res = []

  let helper = (prev, rest) => {
      if (prev.length === S.length) {
          res.push(prev)
          return
      }

      let char = rest[0]
      let word1 = prev + char
      let nextRest = rest.substring(1)

      if (!isNaN(Number(char))) {
          helper(word1, nextRest)
          return
      } else {
          let upperChar = char.toUpperCase()
          let char2 = upperChar === char ? char.toLowerCase() : upperChar
          let word2 = prev + char2

          helper(word1, nextRest)
          helper(word2, nextRest)
      }
  }

  helper('', S)

  return res
};