/**
 * 「快乐前缀」是在原字符串中既是 非空 前缀也是后缀（不包括原字符串自身）的字符串。
  
    给你一个字符串 s，请你返回它的 最长快乐前缀。
  
    如果不存在满足题意的前缀，则返回一个空字符串。
  
    示例：
  
    输入：s = 'level'
  
    输出：'l'
  
    解释：不包括 s 自己，一共有 4 个前缀（'l', 'le', 'lev', 'leve'）和 4 个后缀（'l', 'el', 'vel', 'evel'）。最长的既是前缀也是后缀的字符串是 'l' 。
 */

function makeNext(str) {
  let index = 1
  let k = 0
  const len = str.length
  const next = Array(len).fill(0)
  for (; index < len; index += 1) {
    while(k > 0 && str[index] !== str[k]) {
      k = next[k - 1]
    }
    if (str[index] === str[k]) {
      k++
    }
    next[index] = k
  }
  return next
}

// function longestPrefix(s) {
//   const max = s.length
//   const next = makeNext(s)
//   if (max > 0) {
//     return s.slice(0, next[max - 1])
//   }
//   return ''
// }

console.log(makeNext('leabcdleabcdlv'))