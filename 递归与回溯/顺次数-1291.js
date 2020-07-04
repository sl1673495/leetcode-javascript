/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
let sequentialDigits = function (low, high) {
  let lowLen = low.toString().length
  let highLen = high.toString().length
  let lens = []
  for (let i = lowLen; i <= highLen; i++) {
    lens.push(i)
  }

  let res = []
  for (let i = 0; i < lens.length; i++) {
    let len = lens[i]
    for (let start = 1; start <= 10 - len; start++) {
      let num = start

      for (let n = start + 1; n < start + len; n++) {
        num = 10 * num + n
      }
      if (num <= high && num >= low) {
        res.push(num)
      }
    }
  }

  return res
}