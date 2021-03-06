/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    // 判断队列中最大值（第一个元素），还能不能再队列中
    if (i >= k && deque[0].index <= i - k) {
      deque.shift();
    }

    // 当循环的值，依次比队列中的值大的时候，pop队列中的值。
    // 相当于把最大的值从后压入到队首，队列保持从大到小的顺序
    while (deque.length && nums[i] > deque[deque.length - 1].value) {
      deque.pop();
    }

    deque.push({
      value: nums[i],
      index: i,
    });

    // 0到k-1的之前，k个数组还没跑满，之前的判断无效
    if (i >= k - 1) res.push(deque[0].value);
  }

  return res;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

// const nums = [7, 2, 4],
//   k = 2;

console.log(maxSlidingWindow(nums, k));
