function Node(val, children) {
  this.val = val;
  this.children = children;
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);

n1.children = [n3, n2, n4];
n3.children = [n5, n6];

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  const res = [];
  const preOrder = (r) => {
    if (r === null) return;

    res.push(r.val);
    for (let i = 0; i < r.children?.length || 0; i++) {
      preOrder(r.children[i]);
    }
  };

  preOrder(root);
  return res;
};
console.log(preorder(n1));
