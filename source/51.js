/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  if (n < 1) return [];

  const res = [];
  const cols = new Set();
  const pie = new Set();
  const na = new Set();

  const DFS = (n, row, curState) => {
    if (row >= n) {
      res.push([...curState]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || pie.has(col + row) || na.has(col - row)) {
        continue;
      } else {
        cols.add(col);
        pie.add(col + row);
        na.add(col - row);
        curState.push(col);
        DFS(n, row + 1, curState);
        curState.pop();
        cols.delete(col);
        pie.delete(col + row);
        na.delete(col - row);
      }
    }
  };

  const output = (res) => {
    const tempArr = Array.from({ length: n }).fill(".");
    const r = [];
    for (let i = 0; i < res.length; i++) {
      const t = [];
      for (let j = 0; j < res[i].length; j++) {
        tempArr[res[i][j]] = "Q";
        t.push(tempArr.join(""));
        tempArr[res[i][j]] = ".";
      }
      r.push(t);
    }
    return r;
  };

  DFS(n, 0, []);
  return output(res);
};

console.log(solveNQueens(4));
