// 链表节点
function ListNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * 数组转换二叉树
 * @param {数组} arr
 */
function transformArrayToBinaryTree(arr) {
  let i = 0;
  const root = new ListNode(arr.shift());

  // 随机生成、
  //   function generateRandom(node, val) {
  //     const isLeft = Math.floor(Math.random() * 100 + 1) % 2 === 0;
  //     if (isLeft) {
  //       if (!node.left) node.left = new ListNode(val);
  //       else generate(node.left, val);
  //     } else {
  //       if (!node.right) node.right = new ListNode(val);
  //       else generate(node.right, val);
  //     }
  //   }

  // 广度优先，使用队列的特性实现
  const queue = [root];
  while (arr.length) {
    const node = queue.shift();
    const leftVal = arr.shift();
    const rightVal = arr.shift();
    if (typeof leftVal === "number") {
      node.left = new ListNode(leftVal);
      queue.push(node.left);
    }
    if (typeof rightVal === "number") {
      node.right = new ListNode(rightVal);
      queue.push(node.right);
    }
  }

  return root;
}

// 广度优先 采用队列
function transformBinaryTreeToArray(root) {
  const queue = [root];
  const arr = [];
  while (queue.length) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    arr.push(node.val);
  }
  return arr;
}

// 反转二叉树
function reverseBinaryTree(root) {
  if (!root) return root;
  reverseBinaryTree(root.left);
  reverseBinaryTree(root.right);
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
}

const binaryTree = transformArrayToBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
const result = transformBinaryTreeToArray(reverseBinaryTree(binaryTree));
console.log("反转后：", result);
