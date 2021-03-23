/**
 * dp[n] = dp[n-k] k{coins}
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = [0];
  for (let i = 1; i <= amount; i++) {
    const t = [];
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j] && dp[i - coins[j]] >= 0) {
        t.push(dp[i - coins[j]]);
      }
    }

    dp[i] = t.length ? Math.min(...t) + 1 : -1;
  }

  return dp[amount];
};

var coins = [1, 2, 5],
  amount = 11;
var coins = [2],
  amount = 3;
var coins = [186, 419, 83, 408],
  amount = 6249;
console.log(coinChange(coins, amount));
