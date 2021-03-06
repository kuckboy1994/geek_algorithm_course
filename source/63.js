/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from({ length: m }).fill([]);
  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(i, j);
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }
      if (i === 0 && j === 0) {
        continue;
      }
      if (i === 0) {
        dp[i][j] = dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(i, j);
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0;
      } else {
        if (i === 0 && j === 0) {
          dp[j] = 1;
        } else {
          dp[j] = (dp[j - 1] || 0) + (dp[j] || 0);
        }
      }
    }
    // console.log(dp);
  }

  return dp[n - 1];
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = [0, 1];

  for (let i = 0; i < m; i++) {
    for (let j = 1; j <= n; j++) {
      // console.log(i, j);
      if (obstacleGrid[i][j - 1] === 1) {
        dp[j] = 0;
      } else {
        dp[j] = (dp[j - 1] || 0) + (dp[j] || 0);
      }
    }
    // console.log(dp);
  }

  return dp[n];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
);
console.log(uniquePathsWithObstacles([[1, 0]]));
console.log(uniquePathsWithObstacles([[1], [0]]));
