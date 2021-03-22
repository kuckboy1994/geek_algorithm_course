/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const n = text1.length;
  const m = text2.length;

  const dp = [[]];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (j === 1) dp[i] = [];

      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = (dp[i - 1][j - 1] || 0) + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1] || 0, dp[i - 1][j] || 0);
      }
    }
  }

  return dp[n][m];
};

var text1 = "abcde",
  text2 = "ace";

console.log(longestCommonSubsequence(text1, text2));
