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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];

  const res = [];
  const deque = [[root]];
  let level = 0;

  while (deque[level].length) {
    const d = deque[level];
    deque[level + 1] = [];
    const row = [];
    while (d.length) {
      const t = d.shift();

      if (t === null) break;

      row.push(t.val);
      for (let i = 0; i < t.children?.length || 0; i++) {
        deque[level + 1].push(t.children[i]);
      }
    }

    res[level] = row;
    level++;
  }

  return res;
};

var levelOrder = function (root) {
  const res = [];

  const lo = (r, l) => {
    if (r === null) return;
    if (res[l]) {
      res[l].push(r.val);
    } else {
      res[l] = [r.val];
    }
    for (let i = 0; i < r.children?.length || 0; i++) {
      lo(r.children[i], l + 1);
    }
  };

  lo(root, 0);

  return res;
};

// console.log(levelOrder(null));

console.log(levelOrder(n1));
