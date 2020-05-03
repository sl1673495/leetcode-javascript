// https://leetcode-cn.com/problems/island-perimeter
/**
 * @param {number[][]} grid
 * @return {number}
 */
let islandPerimeter = function (grid) {
  let yLen = grid.length;
  if (!yLen) return 0;
  let xLen = grid[0].length;

  let perimeter = { value: 0 };

  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      if (grid[y][x] === 1) {
        dfs(grid, y, x, perimeter);
        break;
      }
    }
  }

  return perimeter.value;
};

function dfs(grid, y, x, perimeter) {
  let cell = grid[y][x];
  if (cell === "COMPLETE") return;

  grid[y][x] = "COMPLETE";

  let below = grid[y - 1] && grid[y - 1][x];
  let upper = grid[y + 1] && grid[y + 1][x];
  let left = grid[y][x - 1];
  let right = grid[y][x + 1];

  if (below) {
    dfs(grid, y - 1, x, perimeter);
  } else {
    perimeter.value++;
  }

  if (upper) {
    dfs(grid, y + 1, x, perimeter);
  } else {
    perimeter.value++;
  }

  if (left) {
    dfs(grid, y, x - 1, perimeter);
  } else {
    perimeter.value++;
  }

  if (right) {
    dfs(grid, y, x + 1, perimeter);
  } else {
    perimeter.value++;
  }
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
