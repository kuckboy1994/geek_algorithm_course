/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    if (stack.length && stack[stack.length - 1] === S.charAt(i)) {
      stack.pop();
    } else {
      stack.push(S.charAt(i));
    }
  }

  return stack.join("");
};

console.log(removeDuplicates("abbaca"));
