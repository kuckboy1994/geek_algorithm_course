/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      return [hash.get(nums[i]), i];
    } else {
      hash.set(target - nums[i], i);
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

twoSum(nums, target);

console.log(nums);
