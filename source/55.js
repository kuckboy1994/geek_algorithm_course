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

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const reachList = Array.from({ length: nums.length });

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      if (i + j < nums.length) {
        reachList[i + j] = true;
      }
    }
  }

  for (let i = 1; i < reachList.length; i++) {
    if (!reachList[i]) {
      return false;
    }
  }

  return true;
};

// var nums = [2, 3, 1, 1, 4];
var nums = [3, 2, 1, 0, 4];
// var nums = [0, 2, 3];
// var nums = [0, 1];
var nums = [0];
console.log(canJump(nums));
