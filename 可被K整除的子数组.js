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
    currentPrefix.push(num)
    for (let prev of prevPrefix) {
      let sum = prev + num
      judge(sum)
      currentPrefix.push(sum)
    }
    prevPrefix = currentPrefix
    currentPrefix = []
  }

  return count

  function judge(num) {
    if (num % K === 0 || num === 0) {
      count++
    }
  }
}

console.log(subarraysDivByK([4,5,0,-2,-3,1], 5))
