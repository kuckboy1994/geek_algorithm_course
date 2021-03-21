/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 0) return false;

  let endReachable = nums.length - 1;
  for (let i = endReachable - 1; i >= 0; i--) {
    if (nums[i] + i >= endReachable) {
      endReachable = i;
    }
  }

  return endReachable === 0;
};

var nums = [2, 3, 1, 1, 4];
var nums = [3, 2, 1, 0, 4];
console.log(canJump(nums));
