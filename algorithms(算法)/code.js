// 链表节点
function ListNode(val, left = null, right = null, next = null) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.next = next;
}

function transformArrayToList(array) {
  let fakeHead = new ListNode(0);
  let current = fakeHead;
  for (let index = 0; index < array.length; index++) {
    current.next = { val: array[index], next: null };
    current = current.next;
  }
  return fakeHead.next;
}

function transformListToArray(list) {
  let res = [];
  while (list) {
    res.push(list.val);
    list = list.next;
  }
  return res;
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

const binaryTree = transformArrayToBinaryTree([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
]);
const result = transformBinaryTreeToArray(reverseBinaryTree(binaryTree));
console.log("反转后：", result);

// ------------- 旋转链表 -------------

// 判断是否是平衡二叉树

function isBalanced(root) {
  if (!root) return true;

  function getHeight(node) {
    if (!node) return 0;
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  return Math.abs(leftHeight - rightHeight) <= 1;
}

// 判断数的深度
function maxDepth(root) {
  if (root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  nums.push(target);

  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] === target) {
      return i - 1;
    }
    if (nums[i - 1] > target) {
      const temp = nums[i - 1];
      nums[i - 1] = nums[i];
      nums[i] = temp;
    } else {
      return i;
    }
  }
  return 0;
};

// 罗马字转数字
function romanToInt(s) {
  // 定一个map映射罗马数字
  const romaMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const arr = s.split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const iVal = arr[i];
    const jVal = arr[i + 1];
    if (jVal) {
      if (romaMap[iVal] < romaMap[jVal]) {
        sum += romaMap[jVal] - romaMap[iVal];
        i++;
        continue;
      }
    }
    sum += romaMap[iVal];
  }
  return sum;
}

// 反转字符串
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
};
