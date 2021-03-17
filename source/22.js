/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  const recursion = (left, right, n, str) => {
    if (left === n && right === n) {
      res.push(str);
    }

    if (left < n) {
      recursion(left + 1, right, n, str + "(");
    }
    if (left > right) {
      recursion(left, right + 1, n, str + ")");
    }
  };

  recursion(0, 0, n, "");

  return res;
};

console.log(generateParenthesis(3));
