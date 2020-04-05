/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  var sum = 0
  for (var i = 0; i < nums.length; i++) {
      var divisorSet = findDivisor(nums[i])
      if (divisorSet.size === 4) {
          divisorSet.forEach(num => {
              sum += num
          })
      }
  }
  return sum
};

function findDivisor(num) {
  // 超过这个边界就不用继续求值了
  var max = Math.floor(Math.sqrt(num))
  var set = new Set()
  for (var i = 1; i <= max; i ++) {
      var result = num / i
      // 除数是整数
      if (result % 1 === 0) {
          set.add(result)
          // 除以结果 是另一个因数
          set.add(num / result)
      }
  }
  return set
}

console.log(sumFourDivisors([21,4,7]))