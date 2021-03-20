/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];

  const dfs = function (r, deep) {
    if (r == null) {
      return;
    }

    if (res[deep] === undefined) {
      res[deep] = [];
    }
    res[deep].push(r.val);
    dfs(r.left, deep + 1);
    dfs(r.right, deep + 1);
  };

  dfs(root, 0);

  return res;
};

var levelOrder = function (root) {
  const res = [];
  let arr = [root];
  let deep = 0;

  while (arr.length !== 0) {
    const resTemp = [];
    const temp = [];
    arr.forEach((item) => {
      if (item == null) {
        return;
      }
      resTemp.push(item.val);
      temp.push(item.left);
      temp.push(item.right);
    });

    arr = temp;

    if (resTemp.length) {
      res[deep] = resTemp;
      deep++;
    }
  }

  return res;
};
