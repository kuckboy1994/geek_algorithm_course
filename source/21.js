/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(4);

a1.next = a2;
a2.next = a3;

const b1 = new ListNode(1);
const b2 = new ListNode(3);
const b3 = new ListNode(4);

b1.next = b2;
b2.next = b3;

console.log(a1, a2);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoLists(l2.next, l1);
  return l2;
};

var mergeTwoLists = function (l1, l2) {
  const p = new ListNode(0);
  let cur = p;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      cur = cur.next;
      l1 = l1.next;
    } else {
      cur.next = l2;
      cur = cur.next;
      l2 = l2.next;
    }
  }

  if (l1 === null) {
    cur.next = l2;
  } else {
    cur.next = l1;
  }

  return p.next;
};

console.log(mergeTwoLists(a1, b1));
