/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const dp = [{ min: nums[0], max: nums[0] }];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = {
      min: Math.min(dp[i - 1].max * nums[i], dp[i - 1].min * nums[i], nums[i]),
      max: Math.max(dp[i - 1].max * nums[i], dp[i - 1].min * nums[i], nums[i]),
    };
  }

  // console.log(dp);

  return Math.max(...dp.map((i) => i.max));
};

console.log(maxProduct([3, -1, 4]));
// console.log(maxProduct([2, 3, -2, 4]));
