/**
 * f(n) = Max(n + F(n-2), f(n-1))
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [0];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max((dp[i - 2] || 0) + nums[i], dp[i - 1] || 0);
  }

  return dp[dp.length - 1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let pre = 0,
    now = 0;
  for (let i = 0; i < nums.length; i++) {
    [pre, now] = [now, Math.max(pre + nums[i], now)];
  }

  return now;
};

console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 3, 1, 1, 4, 4]));
console.log(rob([]));
