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
var inorderTraversal = function (root) {
  // console.log(root);
  const res = [];

  const inorder = (r) => {
    if (r) {
      inorder(r.left);
      res.push(r.val);
      inorder(r.right);
    }
  };

  inorder(root);

  return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // console.log(root);
  const res = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }

  return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const WHITE = 0;
  const GRAY = 1;

  const res = [];
  const stack = [[WHITE, root]];

  while (stack.length) {
    const [color, node] = stack.pop();
    if (node === null) continue;

    if (color === WHITE) {
      stack.push([WHITE, node.right]);
      stack.push([GRAY, node]);
      stack.push([WHITE, node.left]);
    } else {
      res.push(node.val);
    }
  }

  return res;
};

console.log(inorderTraversal(n1));
