/**
 * @param {string} s
 * @return {string[][]}
 */

let partition = function (s) {
  let n = s.length
  let ret = []
  let find = function (start, prev) {
    // 最少分割一个字符 最多分割到末尾前一位
    for (let i = 1; i <= n; i++) {
      let end = start + i
      let cur = s.substring(start, end)
      if (cur) {
        let res = prev.concat(cur)
        if (isPalindrome(cur)) {
          if (end === n) {
            ret.push(res)
          } else {
            find(start + i, res)
          }
        }
      }
    }
  }
  find(0, [])
  return ret
}

function isPalindrome(s) {
  if (!s) {
    return false
  }
  let i = 0
  let j = s.length - 1

  while (i < j) {
    let head = s[i]
    let tail = s[j]

    if (head !== tail) {
      return false
    } else {
      i++
      j--
    }
  }
  return true
}

console.log(partition("aab"))
