/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
  }

  const t = [...hash.entries()].sort((a, b) => b[1] - a[1]);
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(t[i][0]);
  }

  return res;
};

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;
console.log(topKFrequent(nums, k));
