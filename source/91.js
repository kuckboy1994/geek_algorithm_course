/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.charAt(0) === "0") return 0;

  const dp = [1, 1];
  // 索引为0 代表为空的情况， 索引为1 代表为元素为1

  for (let i = 1; i < s.length; i++) {
    let sum = 0;

    // 前一步 + 当前元素 组成 两位数，判断两位数是否在[1,26]
    // 并且前一个的字符不能是0，'06' 字符是不符合的，排除
    if (s.charAt(i - 1) !== "0") {
      const t = s.charAt(i - 1) + s.charAt(i);
      // console.log(t);
      if (t > 0 && t < 27) {
        sum += dp[i - 1]; // 1 解释 i=1 取索引为0 和索引为 -1 的值，-1 代表为数组 [ 空 ]，空也是其中的一个值
      }
    }

    // 单个字符的时候不能为0
    if (s.charAt(i) !== "0") {
      sum += dp[i];
    }

    dp[i + 1] = sum;
  }

  // console.log(dp);

  return dp[dp.length - 1];
};

var s = "2264";
var s = "0";

var s = "10";
var s = "1201";
var s = "1200";
var s = "27";
var s = "10011";
console.log(numDecodings(s));
