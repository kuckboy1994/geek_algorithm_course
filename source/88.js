/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    for (let i = 0; i < nums2.length; i++) {
      nums1[i] = nums2[i];
    }
  }

  let left = m - 1; // nums1 有效数字的右边开始向左移动
  let right = n + m - 1; // nums1 数组右边开始依次添加或者交换
  let index = nums2.length - 1; // nums2 数组后边开始向左移动
  while (right >= 0) {
    if (index < 0 || nums2[index] < nums1[left]) {
      nums1[right--] = nums1[left--];
    } else {
      nums1[right--] = nums2[index--];
    }
  }
};

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

// const nums1 = [0],
//   m = 0,
//   nums2 = [1],
//   n = 1;

// const nums1 = [2, 0],
//   m = 1,
//   nums2 = [1],
//   n = 1;

// const nums1 = [-1, 0],
//   m = 1,
//   nums2 = [-2],
//   n = 1;

merge(nums1, m, nums2, n);
console.log(nums1);
