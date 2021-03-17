function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);

n2.left = n1;
n2.right = n3;

const a1 = new TreeNode(1);
const a2 = new TreeNode(2);
const a3 = new TreeNode(3);
const a4 = new TreeNode(4);
const a5 = new TreeNode(5);
const a6 = new TreeNode(6);

a5.left = a1;
a5.right = a4;
a4.left = a3;
a4.right = a6;

const b1 = new TreeNode(1);
const b2 = new TreeNode(2);
const b3 = new TreeNode(3);
const b4 = new TreeNode(4);
const b5 = new TreeNode(5);
const b6 = new TreeNode(6);
const b7 = new TreeNode(7);

b5.left = b4;
b5.right = b6;
b6.left = b3;
b6.right = b7;

const c0 = new TreeNode(0);
const c1 = new TreeNode(1);
const c2 = new TreeNode(2);
const c3 = new TreeNode(3);
const c4 = new TreeNode(4);
const c5 = new TreeNode(5);
const c6 = new TreeNode(6);

c3.left = c1;
c3.right = c5;
c1.left = c0;
c1.right = c2;
c5.left = c4;
c5.right = c6;

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const recursion = (node, lower, upper) => {
    if (node === null) return true;

    if (lower !== null && node.val <= lower) return false;
    if (upper !== null && node.val >= upper) return false;

    if (!recursion(node.left, lower, node.val)) return false;
    if (!recursion(node.right, node.val, upper)) return false;

    return true;
  };

  return recursion(root, null, null);
};

var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (root == null) return true;

  if (root.val <= min || root.val >= max) return false;

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};

var isValidBST = function (root) {
  let flag = true;
  let prev = -Infinity;

  const inOrder = (r) => {
    if (!flag) return;
    if (r) {
      inOrder(r.left);
      if (prev < r.val) {
        prev = r.val;
      } else {
        flag = false;
      }
      inOrder(r.right);
    }
  };

  inOrder(root);

  return flag;
};

console.log(b5);
console.log(isValidBST(b5));
