/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) {
    return num;
  }

  let sum = 0;
  let y;
  do {
    y = num % 10;
    num = Math.floor(num / 10);
    sum += y;
  } while (num);

  return addDigits(sum);
};

var addDigits = function (num) {
  return ((num - 1) % 9) + 1;
};

console.log(addDigits(38));
