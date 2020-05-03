/**
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

示例 1:
s = "abc", t = "ahbgdc"
返回 true.
*/

// let isSubsequence = function(s, t) {
//   let lastIndex = -1
//   let sliced = t
//   let slicedCount = 0
//   for (let i = 0; i < s.length; i++) {
//       let finded = sliced.indexOf(s[i])
//       if (finded + slicedCount > lastIndex) {
//           lastIndex = finded + slicedCount
//           sliced = sliced.substr(finded + 1)
//           slicedCount += finded + 1
//           continue
//       }else {
//           return false
//       }
//   }
//   return true
// }

// 这种是速度最快的 利用indexOf的第二个参数做起点
let isSubsequence = function(s, t) {
  let start=0
  for(let i=0; i < s.length; i++) {
      let index = t.indexOf(s[i], start)
      if(index===-1) return false
      start=index+1
  }
  return true
};

let a = "leeeeetcode"
let b = 'leeeeeeeeeeccccctcccoddddeeee'
console.log(isSubsequence(a, b))