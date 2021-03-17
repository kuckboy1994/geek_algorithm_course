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
var postorder = function (root) {
  const res = [];
  const postOrder = (r) => {
    if (r === null) return;

    for (let i = 0; i < r.children?.length || 0; i++) {
      postOrder(r.children[i]);
    }

    res.push(r.val);
  };

  postOrder(root);
  return res;
};
console.log(postorder(n1));
