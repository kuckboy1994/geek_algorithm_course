/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const res = [];

  const recursion = (s, i) => {
    if (i === digits.length) {
      res.push(s);
      return;
    }

    let letters = map[digits.charAt(i)];
    for (let k = 0; k < letters.length; k++) {
      recursion(s + letters.charAt(k), i + 1);
    }
  };

  recursion("", 0);

  return res;
};

console.log(letterCombinations("23"));
