let wordBreak = function (s, wordDict) {
  let uniqSChars = uniq(s.split(""))
  let uniqWordDictChars = uniq(wordDict.join(""))
  if (uniqSChars.length !== uniqWordDictChars.length) {
    return false
  }

  let n = s.length
  if (!n) {
    return []
  }

  let wordSet = new Set(wordDict)
  let dp = []
  dp[0] = [""]

  for (let i = 1; i <= n; i++) {
    let res = []
    for (let j = i; j >= 0; j--) {
      let word = s.slice(j, i)
      if (wordSet.has(word)) {
        if (dp[j] && dp[j].length) {
          for (let prev of dp[j]) {
            res.push(prev ? prev + " " + word : word)
          }
        }
      }
    }
    dp[i] = res
  }

  return dp[n]
}

function uniq(arr) {
  return Array.from(new Set(arr))
}
