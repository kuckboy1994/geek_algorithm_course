function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const n1 = new TreeNode(3);
const n2 = new TreeNode(9);
const n3 = new TreeNode(20);
const n4 = new TreeNode(15);
const n5 = new TreeNode(7);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(maxDepth(n1));
