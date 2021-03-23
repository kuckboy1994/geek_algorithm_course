/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 3) return Math.max(...nums);

  let pre = 0;
  let now = 0;
  for (let i = 1; i < nums.length; i++) {
    [pre, now] = [now, Math.max(pre + (nums[i] || 0), now)];
  }

  let pre2 = 0;
  let now2 = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    [pre2, now2] = [now2, Math.max(pre2 + (nums[i] || 0), now2)];
  }

  return Math.max(now, now2);
};

console.log(rob([1]));
console.log(rob([1, 2, 3]));
// console.log(rob([1, 2, 3, 1]));
