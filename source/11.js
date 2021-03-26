/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);

    if ((right - left) * h > max) {
      max = (right - left) * h;
    }

    if (height[left] > height[right]) {
      // 右侧向内
      while (left < right && height[right] >= height[--right]);
    } else if (height[left] < height[right]) {
      while (left < right && height[left] >= height[++left]);
    } else {
      while (left < right && height[right] >= height[--right]);
      while (left < right && height[left] >= height[++left]);
    }
  }

  return max;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const minHeight =
      height[left] < height[right] ? height[left++] : height[right--];

    const m = (right - left + 1) * minHeight; // +1 是因为提前缩小的了范围，还原当前状态的宽度
    max = Math.max(max, m);
  }

  return max;
};

console.log(maxArea([1, 1]));
console.log(maxArea([1, 2, 1]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
