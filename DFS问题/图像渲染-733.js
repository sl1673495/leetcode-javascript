/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
let floodFill = function (image, sr, sc, newColor) {
  let current = image[sr][sc];
  dfs(image, sr, sc, current, newColor);
  return image;
};

function dfs(image, sr, sc, current, newColor) {
  let row = image[sr];
  if (row === undefined) return;

  let cell = row[sc];
  if (cell === undefined || cell !== current || cell === newColor) return;

  row[sc] = newColor;
  dfs(image, sr + 1, sc, current, newColor);
  dfs(image, sr - 1, sc, current, newColor);
  dfs(image, sr, sc + 1, current, newColor);
  dfs(image, sr, sc - 1, current, newColor);
}

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    2
  )
);
