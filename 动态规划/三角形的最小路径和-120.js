/**
 * @param {number[][]} triangle
 * @return {number}
 */
let minimumTotal = function (triangle) {
  let tryMin = (level, lastIndex, prevSum) => {
    if (level === triangle.length) {
      return prevSum
    }

    let row = triangle[level]
    let cur = row[lastIndex]
    let curNext = row[lastIndex + 1]

    let selected = tryMin(level + 1, lastIndex, prevSum + cur)
    if (curNext !== undefined) {
      selected = Math.min(
        selected,
        tryMin(level + 1, lastIndex + 1, prevSum + curNext)
      )
    }
    return selected
  }

  return tryMin(0, 0, 0)
}

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])
