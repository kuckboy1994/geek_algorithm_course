/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const hash = {
    5: 0,
    10: 0,
  };

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 20) {
      if (hash[10] >= 1 && hash[5] >= 1) {
        hash[10]--;
        hash[5]--;
      } else if (hash[5] >= 3) {
        hash[5] -= 3;
      } else {
        return false;
      }
    } else if (bills[i] === 10) {
      if (hash[5] >= 1) {
        hash[10]++;
        hash[5]--;
      } else {
        return false;
      }
    } else {
      hash[5]++;
    }
  }

  return true;
};

console.log(
  lemonadeChange([
    5,
    5,
    10,
    20,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    10,
    5,
    5,
    20,
    5,
    20,
    5,
  ]),
);
console.log(lemonadeChange([5, 5, 10, 10, 20]));
console.log(lemonadeChange([5, 5, 5, 10, 20]));
