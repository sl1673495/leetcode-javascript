// https://github.com/sl1673495/daily-plan/issues/16

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

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
