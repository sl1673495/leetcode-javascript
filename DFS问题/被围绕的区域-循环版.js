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
      if (cell === "O" && !notXMap[genKey(i, j)]) {
        dfsIsValid(board, i, j, notXMap);
      }
    }
  }
  return board;
};

function getBoradValue(board, i, j) {
  let row = board[i];
  return row && row[j];
}

function dfsIsValid(board, currentI, currnetJ, notXMap) {
  let queue = []; // 本次dfs走过的路径
  let thisTimeFailed = { current: false };
  let thisTimeHasHandledMap = {};
  let checkQueue = [[currentI, currnetJ]];

  while (checkQueue.length) {
    const head = checkQueue.shift();
    // 临时替换 标记为可替换节点
    const [i, j] = head;
    let row = board[i];
    let cell = row && board[i][j];

    // 已经在map中记录处理过的 整个链路都不可能为X
    if (notXMap[genKey(i, j)]) {
      continue;
    }

    // 本次路径失败
    if (!cell) {
      thisTimeFailed.current = true;
      continue;
    }

    // 为X说明这一边符合条件
    if (cell === "X") continue;

    // 推到路径队列里，等到遍历完成决定该保留O还是换成X
    queue.push([i, j]);

    if (!thisTimeHasHandledMap[genKey(i - 1, j)] && !notXMap[genKey(i - 1, j)]) {
      thisTimeHasHandledMap[genKey(i - 1, j)] = true;
      checkQueue.push([i - 1, j])
    };
    if (!thisTimeHasHandledMap[genKey(i + 1, j)] && !notXMap[genKey(i + 1, j)]) {
      thisTimeHasHandledMap[genKey(i + 1, j)] = true;
      checkQueue.push([i + 1, j])
    };
    if (!thisTimeHasHandledMap[genKey(i, j - 1)] && !notXMap[genKey(i, j - 1)]) {
      thisTimeHasHandledMap[genKey(i, j - 1)] = true;
      checkQueue.push([i, j - 1])
    };
    if (!thisTimeHasHandledMap[genKey(i, j + 1)] && !notXMap[genKey(i, j + 1)]) {
      thisTimeHasHandledMap[genKey(i, j + 1)] = true;
      checkQueue.push([i, j + 1]);
    }
  }

  // 循环结束后
  // 如果本次循环遇到出界的情况 则全部记录在map中 后续遍历不再走这些格子
  // 否则说明是被围绕的区域 赋值为X
  if (queue.length) {
    queue.forEach(([i, j]) => {
      // 失败了 恢复O
      if (thisTimeFailed.current) {
        // 记录在map中 一定不会是X
        notXMap[genKey(i, j)] = true;
      } else {
        board[i][j] = "X";
      }
    });
  }
}

console.log(
  solve([
    ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X"],
    ["O", "O", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "O"],
    ["O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O", "O", "X"],
    ["X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O", "X", "O", "X", "O", "X", "O", "X", "O"],
    ["O", "O", "O", "O", "X", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O", "O", "X", "O", "O", "O"],
    ["X", "O", "O", "O", "X", "X", "X", "O", "X", "O", "O", "O", "O", "X", "X", "O", "X", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "O", "O", "O", "X", "O", "O", "X", "O", "O", "O"],
    ["X", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "X", "X", "O", "O", "X", "O", "O", "X"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "X", "O", "O", "O", "X", "O", "X"],
    ["O", "O", "O", "O", "X", "O", "X", "O", "O", "X", "X", "O", "O", "O", "O", "O", "X", "O", "O", "O"],
    ["X", "X", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["O", "X", "O", "X", "O", "O", "O", "X", "O", "X", "O", "O", "O", "X", "O", "X", "O", "X", "O", "O"],
    ["O", "O", "X", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O", "X", "O"],
    ["X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "X", "X", "O", "O", "O", "X", "O", "O"],
    ["O", "O", "X", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "X", "O", "X", "O", "X", "O", "O"],
    ["O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "X", "X", "O", "O", "X", "O", "O", "O", "X", "O"],
    ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
    ["X", "O", "O", "O", "O", "X", "O", "O", "O", "X", "X", "O", "O", "X", "O", "X", "O", "X", "O", "O"],
  ])
);
