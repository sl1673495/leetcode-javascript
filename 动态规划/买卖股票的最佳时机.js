

/**
 * 循环版
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
   let max = 0
   for (let i = 1; i < prices.length; i++) {
       for (let j = 0; j < i; j++) {
           let price = prices[j]
           let sale = prices[i] - price
           max = Math.max(max, sale)
       }
   }
   
   return max
};


/**
 * DP版
 */
let maxProfit = function (prices) {
  let n = prices.length
  if (!n || n === 1) return 0

  // 最大收益
  let prevMax = 0
  // 最小价格
  let prevMin = prices[0]

  for (let i = 1; i < n; i++) {
      let price = prices[i]

      prevMax = Math.max(price - prevMin, prevMax)
      prevMin = Math.min(price, prevMin)
  }

  return prevMax
};

console.log(maxProfit([1, 2]))