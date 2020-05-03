/**
给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

示例 1:

输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
说明:

字符串 S 的长度范围为 [1, 10000]。
C 是一个单字符，且保证是字符串 S 里的字符。
S 和 C 中的所有字母均为小写字母。
*/

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
let shortestToChar = function(S, C) {
  let sl = S.length

  if (sl === 0) {
    return []
  }
  if (sl.length > 10000) {
    S = S.substr(0, 10000)
  }
  let pos = []
  let res = []
  // 先走一次循环 存储每个C值的位置 便于比对
  for (let i = 0; i < sl; i++) {
    if (S[i] === C) {
      pos.push(i)
    }
  }

  for (let i = 0; i < sl; i++) {
    // 如果这个字符就是C 距离就是0
    let char = S[i]
    if (char === C) {
      res.push(0)
    } else {
      // 定一个最短距离变量
      let shortest = sl
      // 循环C位置的数组 找出距离最短的 注意绝对值
      for (let j = 0; j < pos.length; j++) {
        let diff = pos[j] - i
        diff = diff > 0 ? diff : Math.abs(diff)
        if (diff < shortest) {
          shortest = diff
        }
      }
      res.push(shortest)
    }
  }
  return res
}
