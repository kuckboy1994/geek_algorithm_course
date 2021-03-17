/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let res = "";
  let level = 0;
  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === "(") {
      level++;
      if (level === 1) {
        continue;
      }
    } else {
      level--;
      if (level === 0) {
        continue;
      }
    }

    res += S.charAt(i);
  }

  return res;
};

var removeOuterParentheses = function (S) {
  let res = "";
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === "(") {
      stack.push("(");
      if (stack.length > 1) res += "(";
    } else {
      stack.pop();
      if (stack.length >= 1) res += ")";
    }
  }

  return res;
};

// var str = "( ()() ) ( () ) ( ()(()) )";
//            1 2121 0 1 21 0 1 212321 0
var str = "(()())(())(()(()))";
// var str = "(()())";

console.log(removeOuterParentheses(str));
