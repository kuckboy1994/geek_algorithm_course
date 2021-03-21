/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0 || x == 1) {
    return x;
  }
  let left = 1;
  let right = x;
  let mid = 1;

  while (left <= right) {
    mid = left + ((right - left) >> 1);
    // console.log(left, right, mid);
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};

console.log(mySqrt(8));
