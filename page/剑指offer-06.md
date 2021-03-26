# 剑指 Offer 06. 从尾到头打印链表

1. 链表遍历

* 时间复杂度: O(n)
* 空间复杂度: O(n)

```js
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
```