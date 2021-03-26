/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = [1];
  let i = 1;
  let p1 = 0,
    p2 = 0,
    p3 = 0;
  while (i < n) {
    dp[i] = Math.min(dp[p1] * 2, dp[p2] * 3, dp[p3] * 5);
    if (dp[i] === dp[p1] * 2) {
      p1++;
    }
    if (dp[i] === dp[p2] * 3) {
      p2++;
    }
    if (dp[i] === dp[p3] * 5) {
      p3++;
    }
    i++;
  }

  return dp[n - 1];
};

console.log(nthUglyNumber(10));
