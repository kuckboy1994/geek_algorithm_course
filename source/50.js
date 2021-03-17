/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) {
    return 1;
  }

  if (n < 0) {
    n *= -1;
    x = 1 / x;
  }

  if (n == 1) {
    return x;
  }

  let t = myPow(x, Math.floor(n / 2));

  return n % 2 === 1 ? t * t * x : t * t;
};

console.log(myPow(2, -2));

// console.log(Math.pow(2, 1));
