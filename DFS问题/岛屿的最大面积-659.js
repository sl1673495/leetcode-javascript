// https://github.com/sl1673495/daily-plan/issues/18

/**
 * @param {number[][]} grid
 * @return {number}
 */
let maxAreaOfIsland = function (grid) {
  let yLen = grid.length;
  if (!yLen) return grid;
  let xLen = grid[0].length;
  let max = 0;

  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      if (grid[y][x] === 1) {
        let countRef = { current: 0 };
        dfs(grid, y, x, countRef);
        if (countRef.current > max) {
          max = countRef.current;
        }
      }
    }
  }
  return max;
};

function dfs(grid, y, x, countRef) {
  if (!grid[y] || !grid[y][x] || grid[y][x] === 0 || grid[y][x] === "COMPLETE") {
    return;
  }

  if (grid[y][x] === 1) {
    grid[y][x] = "COMPLETE";
    countRef.current++;
  }

  dfs(grid, y - 1, x, countRef);
  dfs(grid, y + 1, x, countRef);
  dfs(grid, y, x - 1, countRef);
  dfs(grid, y, x + 1, countRef);
}