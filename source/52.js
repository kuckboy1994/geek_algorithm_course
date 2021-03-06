/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  if (n < 1) return 0;

  let count = 0;
  const col = new Set();
  const pie = new Set();
  const na = new Set();

  const DFS = (row, state) => {
    if (row === n) {
      count++;
      return;
    }

    // i => col
    for (let i = 0; i < n; i++) {
      if (col.has(i) || pie.has(i + row) || na.has(i - row)) {
        continue;
      }
      col.add(i);
      pie.add(i + row);
      na.add(i - row);
      state.push(i);
      DFS(row + 1, state);
      // reverse state
      state.pop();
      col.delete(i);
      pie.delete(i + row);
      na.delete(i - row);
    }
  };

  DFS(0, []);

  return count;
};

console.log(totalNQueens(4));
