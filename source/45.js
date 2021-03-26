/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  dp = Array.from({ length: nums.length });

  dp[nums.length - 1] = 0;

  for (let i = nums.length - 2; i >= 0; i--) {
    let min = Infinity;
    for (let j = 1; j <= nums[i]; j++) {
      if (dp[i + j] < min) {
        min = dp[i + j];
      }
    }
    dp[i] = min + 1;
  }

  // console.log(dp);

  return dp[0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const length = nums.length;
  let end = 0;
  let maxPosition = 0;
  let steps = 0;

  for (let i = 0; i < length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i == end) {
      end = maxPosition;
      steps++;
    }
  }
  return steps;
};

console.log(jump([2, 3, 1, 1, 4]));
// console.log(jump([4, 1, 1, 1, 4, 10, 1, 1, 3, 1, 1, 1, 4]));
