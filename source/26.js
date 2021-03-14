/**
 * 双指针
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums.length) {
    return [];
  }
  let left = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[left++] = nums[i];
    }
  }

  // 不用删除也可以通过
  // nums.splice(left);

  return left;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const nums = [0, 0];
console.log(removeDuplicates(nums));
console.log(nums);
