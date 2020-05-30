// 力扣超时 卡在第26个用例
let maxScore = function (cardPoints, k) {
  let n = cardPoints.length

  let prevTimeChunk = []
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (!prevTimeChunk[i]) {
        prevTimeChunk[i] = []
      }
      prevTimeChunk[i][j] = 0
    }
  }

  let currentTimeChunk = []

  for (let time = 1; time <= k; time++) {
    for (let i = n - 1; i >= 0; i--) {
      for (let j = i; j < n; j++) {
        if (!currentTimeChunk[i]) {
          currentTimeChunk[i] = []
        }

        // 只剩一个可选 有次数的情况下就选这一项 否则为0
        if (i === j) {
          currentTimeChunk[i][j] = time > 0 ? cardPoints[i] : 0
        }

        let pickHead = cardPoints[i]
        let pickTail = cardPoints[j]

        currentTimeChunk[i][j] = Math.max(
          pickHead + (prevTimeChunk[i + 1] ? prevTimeChunk[i + 1][j] || 0 : 0),
          pickTail + (prevTimeChunk[i][j - 1] || 0)
        )
      }
    }
    prevTimeChunk = currentTimeChunk
    currentTimeChunk = []
  }

  return prevTimeChunk[0][n - 1]
}

console.log(maxScore([1,79,80,1,1,1,200,1], 3))
