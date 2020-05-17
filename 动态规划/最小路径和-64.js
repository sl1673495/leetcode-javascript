/**
 * @param {number[][]} grid
 * @return {number}
 */
let minPathSum = function (grid) {
  let y = grid.length
  if (!y) {
      return 0
  }
  let x = grid[0].length

  let dp = []
  for (let i = 0; i < y; i++) {
      dp[i] = []
  }

  dp[0][0] = grid[0][0]
  
  // 第一行的基础状态 记得加上左边格子的值
  for (let j = 1; j < x; j++) {
      dp[0][j] = grid[0][j] + dp[0][j - 1]
  }

  // 第一列的基础状态 加上上方格子的最优解即可
  for (let i = 1; i < y; i++) {
      dp[i][0] = grid[i][0] + dp[i - 1][0]
  }

  // 开始求左上往右下求解
  for (let i = 1; i < grid.length; i++) {
      for (let j = 1; j < grid[i].length; j++) {
          let cur = grid[i][j]
          let fromUp = cur + (dp[i - 1][j] !== undefined ? dp[i - 1][j]: Infinity)
          let fromLeft = cur + (dp[i][j - 1] !== undefined ? dp[i][j - 1]: Infinity)

          dp[i][j] = Math.min(
              fromUp,
              fromLeft
          )
      }
  }
  return dp[y - 1][x - 1]
};