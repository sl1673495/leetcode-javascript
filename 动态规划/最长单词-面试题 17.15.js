/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let wordBreak = function (s, wordDict) {
  let n = s.length
  if (!n) return true

  let wordSet = new Set(wordDict)
  let dp = []
  dp[0] = true

  for (let i = 0; i <= n; i++) {
    for (let j = i; j >= 0; j--) {
      let word = s.slice(j, i)
      if (wordSet.has(word) && dp[j]) {
        dp[i] = true
        break
      }
    }
  }

  return !!dp[n]
}
/**
 * @param {string[]} words
 * @return {string}
 */
let longestWord = function (words) {
  // 先长度降序 后字典序升序 排序
  words.sort((a, b) => {
    let diff = b.length - a.length
    if (diff !== 0) {
      return diff
    } else {
      return a < b ? -1 : 1
    }
  })
  words = Array.from(new Set(words))
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let rest = words.slice(0, i).concat(words.slice(i + 1))
    if (wordBreak(word, rest)) {
      return word
    }
  }
  return ""
}