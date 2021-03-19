/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const res = [];
  const list = [
    "FizzBuzz",
    "",
    "",
    "Fizz",
    "",
    "Buzz",
    "Fizz",
    "",
    "",
    "Fizz",
    "Buzz",
    "",
    "Fizz",
    "",
    "",
  ];
  for (let i = 1; i <= n; i++) {
    const y = i % 15;
    res.push(list[y] || i.toString());
  }

  return res;
};

console.log(fizzBuzz(15));
