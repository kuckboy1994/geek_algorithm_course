function ListNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.size = k;
  this.head = new ListNode("head");
  this.tail = new ListNode("tail");
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.length = 0;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;

  const node = new ListNode(value);

  const t = this.head.next;
  this.head.next = node;
  node.next = t;
  t.prev = node;
  node.prev = this.head;

  this.length++;

  return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;

  const node = new ListNode(value);

  const t = this.tail.prev;
  t.next = node;
  node.next = this.tail;
  this.tail.prev = node;
  node.prev = t;

  this.length++;

  return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;

  const t = this.head.next.next;
  this.head.next = t;
  t.prev = this.head;

  this.length--;

  return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;

  const t = this.tail.prev.prev;
  this.tail.prev = t;
  t.next = this.tail;

  this.length--;

  return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;

  return this.head.next.val;
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;

  return this.tail.prev.val;
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.length === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.length === this.size;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

const circularDeque = new MyCircularDeque(3); // 设置容量大小为3
console.log(circularDeque.insertLast(1)); // 返回 true
console.log(circularDeque.insertLast(2)); // 返回 true
console.log(circularDeque.insertFront(3)); // 返回 true
console.log(circularDeque.insertFront(4)); // 已经满了，返回 false
console.log(circularDeque.getRear()); // 返回 2
console.log(circularDeque.isFull()); // 返回 true
console.log(circularDeque.deleteLast()); // 返回 true
console.log(circularDeque.insertFront(4)); // 返回 true
console.log(circularDeque.getFront()); // 返回 4
