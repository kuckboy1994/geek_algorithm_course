/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) {
    return n;
  }
  let i = 1;
  let j = 2;
  n -= 2;
  while (n--) {
    const t = j;
    j = i + j;
    i = t;
  }

  return j;
};

var climbStairs = function (n) {
  const sqrt5 = Math.sqrt(5);
  const fibn =
    Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
  return Math.round(fibn / sqrt5);
};

console.log(climbStairs(4));
