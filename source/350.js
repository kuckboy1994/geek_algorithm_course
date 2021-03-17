/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  const res = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return res;
};

// const nums1 = [4, 9, 5],
//   nums2 = [9, 4, 9, 8, 4];
// const nums1 = [1, 2, 2, 1],
//   nums2 = [2, 2];
const nums1 = [1],
  nums2 = [];
console.log(intersect(nums1, nums2));
