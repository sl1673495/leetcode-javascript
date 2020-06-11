/**
 * @param {string} digits
 * @return {string[]}
 */
let letterMap = [
  " ", //0
  "", //1
  "abc", //2
  "def", //3
  "ghi", //4
  "jkl", //5
  "mno", //6
  "pqrs", //7
  "tuv", //8
  "wxyz", //9
]

let letterCombinations = function (digits) {
  let res = []

  if (digits === "") {
    return res
  }

  /**
   *
   * @param {number} index 当前处理到的下标位置
   * @param {string} str 当前已经凑成的字符串
   */
  let findCombinations = (index, str) => {
    if (digits.length === index) {
      res.push(str)
      return
    }

    let char = digits[index] // 数字
    let letters = letterMap[Number(char)] // 数字对应的字母

    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i]
      findCombinations(index + 1, `${str}${letter}`)
    }
  }

  findCombinations(0, "")

  return res
}
