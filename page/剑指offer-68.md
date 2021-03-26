# 剑指 Offer 68 - II. 二叉树的最近公共祖先

1. 遍历树

* 时间复杂度: O(n)
* 空间复杂度: O(n)

```js
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
```