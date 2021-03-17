class BinaryHeap {
  constructor(compare) {
    this.data = [];
    this.compare = compare;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  /**
   * @param {number} i 父节点的index
   * @param {number} k 左右节点 k=1,2
   */
  kthChild(i, k) {
    return 2 * i + k;
  }

  insert(value) {
    this.insertAt(this.data.length, value);
  }

  insertAt(index, value) {
    this.data[index] = value;
    // 对比当前节点与其父节点，如果当前节点更小就交换它们
    while (
      index > 0 &&
      this.compare(value, this.data[this.parent(index)]) < 0
    ) {
      this.data[index] = this.data[this.parent(index)];
      this.data[this.parent(index)] = value;
      index = this.parent(index);
    }
  }

  delete(index) {
    if (this.data.length === 0) return;

    let value = this.data[index];
    let i = index;
    // fix heap
    while (i < this.data.length) {
      let left = this.kthChild(i, 1);
      let right = this.kthChild(i, 2);
      // 没有左子节点
      if (left >= this.data.length) break;
      // 没有右子节点
      if (right >= this.data.length) {
        this.data[i] = this.data[left];
        i = left;
        break;
      }
      // 比较左右子节点的大小，更小的补到父节点
      if (this.compare(this.data[left], this.data[right]) < 0) {
        this.data[i] = this.data[left];
        i = left;
      } else {
        this.data[i] = this.data[right];
        i = right;
      }
    }
    // 查看最后的空位是不是最后的叶子节点
    if (i < this.data.length - 1) {
      this.insertAt(i, this.data.pop());
    } else {
      this.data.pop();
    }
    return value;
  }

  printHeap() {
    console.log("nHeap = ");
    console.log(this.data);
  }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const res = [];

  let minHeap = new BinaryHeap((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    minHeap.insert(arr[i]);
  }

  for (let i = 0; i < k; i++) {
    res.push(minHeap.delete(0));
  }

  return res;
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
};

const arr = [3, 2, 1],
  k = 2;

console.log(getLeastNumbers(arr, k));
