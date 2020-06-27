/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
let canReach = function (arr, start) {
  let n = arr.length
  let visited = []
  let queue = [start]
  while (queue.length) {
      let index = queue.pop()
      let val = arr[index]
      if (val === 0) {
          return true
      }
      let left = index - val
      let right = index + val
      if (left >= 0 && !visited[left]) {
          queue.push(left)
      }
      if (right < n && !visited[right]) {
          queue.push(right)
      }
      visited[index] = true
  }
  return false
};