/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
let kthSmallest = function (matrix, k) {
  let maxY = matrix.length
  let sorted = []
  let points = []
  for (let i = 0; i < maxY; i++) {
      points[i] = 0
  }

  while (sorted.length < k) {
      let min = Infinity
      let minY
      for (let y = 0; y < maxY; y++) {
          let point = points[y]
          let num = matrix[y][point]
          if (num < min) {
              min = num
              minY = y
          }
      }
      sorted.push(min)
      // 选中最小项的x指针右移
      points[minY]++
  }

  return sorted[sorted.length - 1]
};