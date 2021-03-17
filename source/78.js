/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [[]];

  for (let i = 0; i < nums.length; i++) {
    const t = [];
    for (let j = 0; j < res.length; j++) {
      t.push([...res[j], nums[i]]);
    }

    res.push(...t);
  }

  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [[]];
  const divide = (arr, index) => {
    if (index >= nums.length) {
      return;
    }

    const t = [...arr, nums[index]];
    res.push(t);
    divide(t, index + 1);

    divide(arr, index + 1);
  };

  divide([], 0);

  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];

  for (let i = Math.pow(2, nums.length) - 1; i >= 0; i--) {
    const str = i.toString(2);
    const t = [];

    for (let j = 0; j < str.length; j++) {
      if (str.charAt(j) === "1") {
        t.push(nums[j + (nums.length - str.length)]);
      }
    }

    res.push(t);
  }

  return res;
};

console.log(subsets([1, 2, 3]));
