/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  s.sort((a, b) => a - b);
  g.sort((a, b) => a - b);

  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[j]) {
      j++;
    }
  }

  return j;
};

var g = [1, 2],
  s = [1, 2, 3];
var g = [1, 2, 3],
  s = [1, 1];

console.log(findContentChildren(g, s));
