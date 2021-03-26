function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const n1 = new TreeNode(3);
const n2 = new TreeNode(5);
const n3 = new TreeNode(1);
const n4 = new TreeNode(6);
const n5 = new TreeNode(2);
const n6 = new TreeNode(0);
const n7 = new TreeNode(8);
const n8 = new TreeNode(7);
const n9 = new TreeNode(4);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n5.left = n8;
n5.right = n9;

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // console.log(root, p, q);
  let ans;

  const dfs = (root, p, q) => {
    if (root === null) return false;
    const lson = dfs(root.left, p, q);
    const rson = dfs(root.right, p, q);
    if (
      (lson && rson) ||
      ((root.val === p.val || root.val === q.val) && (lson || rson))
    ) {
      ans = root;
    }
    return lson || rson || root.val === p.val || root.val === q.val;
  };

  dfs(root, p, q);

  return ans;
};

console.log(lowestCommonAncestor(n1, n2, n9));
