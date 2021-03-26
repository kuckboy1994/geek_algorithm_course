function ListNode(val) {
  this.val = val;
  this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(3);
const n3 = new ListNode(2);

n1.next = n2;
n2.next = n3;

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const res = [];
  let t = head;
  while (t !== null) {
    res.push(t.val);
    t = t.next;
  }

  return res.reverse();
};

console.log(reversePrint(n1));
