/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    // if (dp[i - 1] > 0) {
    //   dp[i] = dp[i - 1] + nums[i];
    // } else {
    //   dp[i] = nums[i];
    // }

    dp[i] = nums[i] + Math.max(dp[i - 1], 0);
  }
  return Math.max(...dp);
};

// [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]
// [ -2, 1, -2, 4,  3, 5, 6,  1, 5 ]

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
