/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  let sl = s.length
  if (sl % 2 !== 0) return false
  let leftToRight = {
    "{": "}",
    "[": "]",
    "(": ")",
  }
  // 建立一个反向的 value -> key 映射表
  let rightToLeft = createReversedMap(leftToRight)
  // 用来匹配左右括号的栈
  let stack = []

  for (let i = 0; i < s.length; i++) {
    let bracket = s[i]
    // 左括号 放进栈中
    if (leftToRight[bracket]) {
      stack.push(bracket)
    } else {
      let needLeftBracket = rightToLeft[bracket]
      // 左右括号都不是 直接失败
      if (!needLeftBracket) {
        return false
      }

      // 栈中取出最后一个括号 如果不是需要的那个左括号 就失败
      let lastBracket = stack.pop()
      if (needLeftBracket !== lastBracket) {
        return false
      }
    }
  }

  if (stack.length) {
    return false
  }
  return true
}

function createReversedMap(map) {
  return Object.keys(map).reduce((prev, key) => {
    const value = map[key]
    prev[value] = key
    return prev
  }, {})
}

console.log(isValid('({})[()]'))