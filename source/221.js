/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const dp = [];
  let max = 0;

  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
        }
      } else {
        dp[i][j] = 0;
      }

      if (dp[i][j] > max) {
        max = dp[i][j];
      }
    }
  }

  // console.log(dp);

  return max * max;
};

var matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

console.log(maximalSquare(matrix));
