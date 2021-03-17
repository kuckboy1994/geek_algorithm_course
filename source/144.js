function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);

n1.right = n2;
n2.left = n3;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];

  const preOrder = (r) => {
    if (r === null) {
      return;
    }

    res.push(r.val);
    preOrder(r.left);
    preOrder(r.right);
  };

  preOrder(root);

  return res;
};

console.log(preorderTraversal(n1));
