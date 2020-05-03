/**
给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

示例:

X X X X
X O O X
X X O X
X O X X
运行你的函数后，矩阵变为：

X X X X
X X X X
X X X X
X O X X
解释:

被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/surrounded-regions
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function genKey(i, j) {
  return `${i}-${j}`;
}

let solve = function (board) {
  const notXMap = {};
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    for (let j = 0; j < row.length; j++) {
      let cell = row[j];
      if (cell === "O") {
        let queue = []; // 本次dfs走过的路径
        let thisDfsFailed = { current: false };
        dfsIsValid(board, i, j, notXMap, queue, thisDfsFailed);
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    for (let j = 0; j < row.length; j++) {
      let cell = row[j];
      if (cell === "O" || cell === "SYMBOL") {
        // 如果是X
        if (!notXMap[genKey(i, j)]) {
          board[i][j] = "X";
        }
      }
    }
  }
  return board;
};

function dfsIsValid(board, i, j, notXMap, queue, thisDfsFailed) {
  // 临时替换 标记为可替换节点
  let row = board[i];
  let cell = row && board[i][j];

  // 已经在map中记录处理过的 整个链路都不可能为X
  if (notXMap[genKey(i, j)]) {
    return;
  }

  // 本次路径失败
  if (!cell) {
    thisDfsFailed.current = true;
    return;
  }

  // 为X说明这一边符合条件
  if (cell === "X") return;
  // 为SYMBOL说明之前已经被临时标记过 继续检查别的边
  if (cell === "SYMBOL") return;

  board[i][j] = "SYMBOL";
  // 这里才去记录路径，排除上面不需要处理的格子。
  queue.push({ i, j });

  // 为O的话，进一步DFS，直到遇到「边界（X、SYMBOL、undefined）」
  dfsIsValid(board, i - 1, j, notXMap, queue, thisDfsFailed); // 上
  dfsIsValid(board, i + 1, j, notXMap, queue, thisDfsFailed); // 下
  dfsIsValid(board, i, j - 1, notXMap, queue, thisDfsFailed); // 左
  dfsIsValid(board, i, j + 1, notXMap, queue, thisDfsFailed); // 右

  // 如果DFS结束，queue的值没有被清空，说明这是符合条件的
  if (queue.length) {
    queue.forEach(({ i, j }) => {
      // 失败了 恢复O
      if (thisDfsFailed.current) {
        board[i][j] = "O";
        // 记录在map中 一定不会是X
        notXMap[genKey(i, j)] = true;
      }
    });
  }
}

console.log(
  solve([
    ["O", "X", "O", "O", "X", "X", "X", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "X", "O", "X"],
    ["X", "O", "X", "O", "O", "X", "X", "O", "O", "X", "O", "X", "O", "X", "O", "X", "X", "O", "O", "O"],
    ["O", "X", "O", "O", "O", "X", "X", "X", "X", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "X"],
    ["X", "X", "O", "O", "O", "X", "X", "O", "O", "O", "X", "X", "X", "O", "O", "X", "O", "X", "X", "O"],
    ["O", "X", "O", "X", "X", "O", "X", "O", "O", "O", "X", "O", "O", "X", "O", "O", "O", "O", "O", "X"],
    ["X", "O", "O", "X", "O", "X", "O", "O", "O", "X", "X", "O", "X", "O", "O", "X", "O", "O", "O", "O"],
    ["X", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "X", "O", "O", "X", "O", "O", "O", "O", "X"],
    ["X", "O", "O", "O", "X", "O", "X", "X", "X", "O", "X", "O", "X", "X", "X", "X", "O", "O", "O", "X"],
    ["X", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "X"],
    ["O", "O", "O", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O", "O", "O", "X", "O"],
    ["X", "O", "X", "O", "X", "O", "O", "X", "X", "X", "O", "X", "X", "O", "O", "X", "X", "O", "O", "O"],
    ["O", "X", "O", "O", "X", "O", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "O", "O", "X", "O"],
    ["X", "O", "O", "O", "X", "X", "X", "O", "X", "O", "O", "O", "X", "O", "X", "O", "X", "O", "O", "X"],
    ["O", "O", "O", "O", "X", "O", "X", "X", "O", "X", "O", "X", "O", "X", "X", "X", "X", "O", "O", "O"],
    ["O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "X", "X", "X", "O", "O", "X", "X", "O", "X", "O"],
    ["X", "O", "X", "X", "X", "X", "X", "X", "O", "X", "X", "O", "X", "O", "O", "X", "O", "O", "O", "X"],
    ["X", "O", "O", "O", "X", "O", "X", "O", "O", "X", "O", "X", "O", "O", "X", "O", "O", "X", "X", "X"],
    ["O", "O", "X", "O", "O", "O", "O", "X", "O", "O", "X", "X", "O", "X", "X", "X", "O", "O", "O", "O"],
    ["O", "O", "X", "O", "O", "O", "O", "O", "O", "X", "X", "O", "X", "O", "X", "O", "O", "O", "X", "X"],
    ["X", "O", "O", "O", "X", "O", "X", "X", "X", "O", "O", "X", "O", "X", "O", "X", "X", "O", "O", "O"],
  ])
);

//输入
[
  ["O", "X", "O", "O", "X", "X", "X", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "X", "O", "X"],
  ["X", "O", "X", "O", "O", "X", "X", "O", "O", "X", "O", "X", "O", "X", "O", "X", "X", "O", "O", "O"],
  ["O", "X", "O", "O", "O", "X", "X", "X", "X", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "X"],
  ["X", "X", "O", "O", "O", "X", "X", "O", "O", "O", "X", "X", "X", "O", "O", "X", "O", "X", "X", "O"],
  ["O", "X", "O", "X", "X", "O", "X", "O", "O", "O", "X", "O", "O", "X", "O", "O", "O", "O", "O", "X"],
  ["X", "O", "O", "X", "O", "X", "O", "O", "O", "X", "X", "O", "X", "O", "O", "X", "O", "O", "O", "O"],
  ["X", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "X", "O", "O", "X", "O", "O", "O", "O", "X"],
  ["X", "O", "O", "O", "X", "O", "X", "X", "X", "O", "X", "O", "X", "X", "X", "X", "O", "O", "O", "X"],
  ["X", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "X"],
  ["O", "O", "O", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O", "O", "O", "X", "O"],
  ["X", "O", "X", "O", "X", "O", "O", "X", "X", "X", "O", "X", "X", "O", "O", "X", "X", "O", "O", "O"],
  ["O", "X", "O", "O", "X", "O", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "O", "O", "X", "O"],
  ["X", "O", "O", "O", "X", "X", "X", "O", "X", "O", "O", "O", "X", "O", "X", "O", "X", "O", "O", "X"],
  ["O", "O", "O", "O", "X", "O", "X", "X", "O", "X", "O", "X", "O", "X", "X", "X", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "X", "X", "X", "O", "O", "X", "X", "O", "X", "O"],
  ["X", "O", "X", "X", "X", "X", "X", "X", "O", "X", "X", "O", "X", "O", "O", "X", "O", "O", "O", "X"],
  ["X", "O", "O", "O", "X", "O", "X", "O", "O", "X", "O", "X", "O", "O", "X", "O", "O", "X", "X", "X"],
  ["O", "O", "X", "O", "O", "O", "O", "X", "O", "O", "X", "X", "O", "X", "X", "X", "O", "O", "O", "O"],
  ["O", "O", "X", "O", "O", "O", "O", "O", "O", "X", "X", "O", "X", "O", "X", "O", "O", "O", "X", "X"],
  ["X", "O", "O", "O", "X", "O", "X", "X", "X", "O", "O", "X", "O", "X", "O", "X", "X", "O", "O", "O"],
];

// 期望
[
  ["O", "X", "O", "O", "X", "X", "X", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "X", "O", "X"],
  ["X", "X", "X", "O", "O", "X", "X", "O", "O", "X", "O", "X", "O", "X", "O", "X", "X", "O", "O", "O"],
  ["O", "X", "O", "O", "O", "X", "X", "X", "X", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "X"],
  ["X", "X", "O", "O", "O", "X", "X", "O", "O", "O", "X", "X", "X", "O", "O", "X", "O", "X", "X", "O"],
  ["O", "X", "O", "X", "X", "X", "X", "O", "O", "O", "X", "X", "X", "X", "O", "O", "O", "O", "O", "X"],
  ["X", "O", "O", "X", "X", "X", "O", "O", "O", "X", "X", "X", "X", "O", "O", "X", "O", "O", "O", "O"],
  ["X", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "X", "O", "O", "X", "O", "O", "O", "O", "X"],
  ["X", "O", "O", "O", "X", "X", "X", "X", "X", "O", "X", "O", "X", "X", "X", "X", "O", "O", "O", "X"],
  ["X", "O", "O", "X", "X", "X", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "X"],
  ["O", "O", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O", "O", "O", "X", "O"],
  ["X", "O", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O", "X", "X", "O", "O", "O"],
  ["O", "X", "O", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O", "O", "X", "O"],
  ["X", "O", "O", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "O", "O", "X"],
  ["O", "O", "O", "O", "X", "O", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "X", "X", "X", "X", "X", "X", "X", "O", "X", "O"],
  ["X", "O", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "O", "O", "O", "X"],
  ["X", "O", "O", "O", "X", "O", "X", "O", "O", "X", "X", "X", "X", "X", "X", "O", "O", "X", "X", "X"],
  ["O", "O", "X", "O", "O", "O", "O", "X", "O", "O", "X", "X", "X", "X", "X", "X", "O", "O", "O", "O"],
  ["O", "O", "X", "O", "O", "O", "O", "O", "O", "X", "X", "X", "X", "X", "X", "O", "O", "O", "X", "X"],
  ["X", "O", "O", "O", "X", "O", "X", "X", "X", "O", "O", "X", "O", "X", "O", "X", "X", "O", "O", "O"],
];

// 这个递归解法思路是对的，但是在最后一个测试用例爆栈了。