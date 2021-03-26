function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  console.log(head);
  if (head === null || head.next === null) {
    return head;
  }

  let first = head;
  let second = head.next;
  let third = head.next.next;
  first.next = null;

  while (third) {
    second.next = first;
    first = second;
    second = third;
    third = second.next;
  }

  second.next = first;

  return second;
};

console.log(reverseList(n1));
