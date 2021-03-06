/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rl = grid.length;
  const cl = grid[0].length;

  let count = 0;
  const dfs = (row, col) => {
    grid[row][col] = "0";
    if (row + 1 < rl && grid[row + 1][col] === "1") dfs(row + 1, col);
    if (row - 1 >= 0 && grid[row - 1][col] === "1") dfs(row - 1, col);
    if (col + 1 < cl && grid[row][col + 1] === "1") dfs(row, col + 1);
    if (col - 1 >= 0 && grid[row][col - 1] === "1") dfs(row, col - 1);
  };

  for (let i = 0; i < rl; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};

var grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

var grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

var grid = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
];

var grid = [
  ["1", "0", "1", "1", "1"],
  ["1", "0", "1", "0", "1"],
  ["1", "1", "1", "0", "1"],
];

console.log(numIslands(grid));
