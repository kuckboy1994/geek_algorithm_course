/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  nums.splice(0, 0, ...nums.splice(-k, k));
};

var rotate = function (nums, k) {
  const newArr = [];
  for (let i = 0; i < nums.length; ++i) {
    newArr[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; ++i) {
    nums[i] = newArr[i];
  }
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log(nums);
