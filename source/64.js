/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const dp = [];

  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] =
          Math.min(dp[i - 1][j] || Infinity, dp[i][j - 1]) + grid[i][j];
      }
    }
  }

  return dp[n - 1][m - 1];
};

var grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

var grid = [
  [1, 2, 3],
  [4, 5, 6],
];

var grid = [[1]];

console.log(minPathSum(grid));
