/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
  let n = s.length
  if (n < 2) {
    return s
  }

  let dp = []
  for (let i = 0; i < n; i++) {
    dp[i] = []
    dp[i][i] = true
  }

  let max = 0
  let begin = 0
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (s[j] !== s[i]) {
        dp[i][j] = false
      } else {
        let indent = dp[i + 1][j - 1]
        if (indent === undefined || indent === true) {
          dp[i][j] = true
        }else {
          dp[i][j] = false
        }
      }

      if (dp[i][j] === true && j - i > max) {
        max = j - i
        begin = i
      }
    }
  }
  console.log('dp', dp)
  return s.substr(begin, max + 1)
}

console.log(longestPalindrome("abcda"))
