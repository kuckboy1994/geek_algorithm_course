/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      const t = nums[left];
      nums[left++] = nums[right];
      nums[right] = t;
    }
    right++;
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
