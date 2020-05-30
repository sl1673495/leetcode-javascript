/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (str) {
  let n = str.length
  // 滑动窗口为s[left...right]
  let left = 0
  let right = -1
  let freqMap = {} // 记录当前子串中下标对应的出现频率
  let max = 0 // 找到的满足条件子串的最长长度

  while (left < n) {
    let nextLetter = str[right + 1]
    if (!freqMap[nextLetter] && nextLetter !== undefined) {
      freqMap[nextLetter] = 1
      right++
    } else {
      freqMap[str[left]] = 0
      left++
    }
    max = Math.max(max, right - left + 1)
  }

  return max
}

console.log(lengthOfLongestSubstring("pwwkew"))