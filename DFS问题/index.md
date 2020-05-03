# 社区看到的优解

其实这题本身是我想复杂了，我是一个个格子去遍历，然后再上下左右去扩展延伸。

但是其实只需要遍历四个边界上的节点，遇到 O 的边界点才开始蔓延遍历，并且把遍历到的节点都标记为 M（防止重复遍历）

最后再一次性遍历整个二维数组，遇到 M 的标记都转为 O（因为是从边界蔓延的，一定是不符合 X 的条件的）。

这样遍历所走的路就会少很多。

```js
let solve = function (board) {
  if (board.length == 0) return null;

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] == "O" && (y == 0 || y == board.length - 1 || x == 0 || x == board[0].length - 1)) {
        dfs(board, y, x);
      }
    }
  }

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] == "W") {
        board[y][x] = "O";
      } else {
        board[y][x] = "X";
      }
    }
  }

  return board;
};

function dfs(board, y, x) {
  if (y < 0 || x < 0 || y >= board.length || x >= board[0].length || board[y][x] == "X" || board[y][x] == "W") {
    return;
  }
  board[y][x] = "W";
  dfs(board, y + 1, x);
  dfs(board, y - 1, x);
  dfs(board, y, x + 1);
  dfs(board, y, x - 1);
  return;
}
```
