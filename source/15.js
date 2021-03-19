/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];

  nums.sort((a, b) => a - b);

  for (let left = 0; left < nums.length; left++) {
    // 剪枝
    if (nums[left] > 0) break;

    // 判断上一个是不是和当前的相等，相等的话 就是重复，过滤
    if (left > 0 && nums[left] === nums[left - 1]) continue;

    let middle = left + 1;
    let right = nums.length - 1;

    while (middle < right) {
      const t = nums[left] + nums[middle] + nums[right];
      if (t === 0) {
        res.push([nums[left], nums[middle], nums[right]]);
        while (nums[middle] === nums[++middle] && middle < right);
        while (nums[right] === nums[--right] && middle < right);
      } else if (t < 0) {
        while (nums[middle] === nums[++middle] && middle < right);
      } else {
        while (nums[right] === nums[--right] && middle < right);
      }
    }
  }

  return res;
};

var nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
