/**
 * 暴力解 超时了
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  let prevPrefix = []
  let currentPrefix = []
  let count = 0
  for (let i = A.length - 1; i >= 0; i--) {
    let num = A[i]
    judge(num)
    for (let prev of prevPrefix) {
      let sum = prev + num
      judge(sum)
    }
    prevPrefix = currentPrefix
    currentPrefix = []
  }

  function judge(num) {
    if (num % K === 0 || num === 0) {
      count++
    }
    currentPrefix.push(num)
  }

  return count
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))
