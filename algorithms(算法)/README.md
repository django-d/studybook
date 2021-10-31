# 算法学习笔记

## 插入排序
> 将需要插入的值, 与排好序的区域进行对比后插入
```js
// 插入排序
function insertSort(arr) {
		for(let i = 1; i < arr.length; i ++) {
			const target = arr[i];
      // 已排序区域的最后一位 [A0...AJ]
      let j = i - 1;
      
      while(j >= 0 && arr[j] > target) {
				arr[j+1] = arr[j];
        j --;
      }
      arr[j+1] = target;
    }
}
```

## 选择排序
> 选择排序分为排序区和被排序区将最小(大)值选出后, 依次追加到已排序区
```js
// 选择排序
function selectSort(arr) {
	for(let i = 0; i < arr.length - 1; i++) {
    let k = i;
    for(let j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[k]) {
				k = j
      }
    }
    if(i !== k) {
      const temp = arr[i];
      arr[i] = arr[k];
      arr[k] = temp
    }
  }
}
```

## 冒泡排序

- 以升序排序为例，即最小的在前面，对数组进行一次遍历，如果相邻的两个数前面的比后面的大，则交换他们的位置，第一次遍历会将最大的数字排到最后去，第二次遍历会将第二大的数字排到倒数第二的位置。。。以此类推，遍历n-1遍整个数组就有序了
- 重点在于把所找的最大或者最小的数放到最后面

```js
function bobbleSort(arr) {
  // 只需要循环n+1次
  for (let i = 0; i < arr.length - 1; i ++) {
    for(let j = 0; j < arr.length - 1 - i; j++) {
			if(arr[j] > arr[j+1]) {
				const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
```

## 快速排序
> 先找到数组的中间点, 将它分为两边比这个中间值小的放在左边大的放在右边, 然后在递归合并直到length=1
```js
// 非原地 快排
function quickSort(arr) {
	if(arr.length === 1) return arr;
  
  // 拿到中间最小值
  const minVal = arr.splice(Math.floor(arr.length/2),1)[0];
  const left = [];
  const right = [];
  for(let i = 0; i < arr.length; i++) {
		if(arr[i] <= minVal) {
			left.push(arr[i]);
    } else {
			right.push(arr[i]);
    }
  }
  return quickSort(left).concat(minVal, quickSort(right));
} 
```

```js
// 原地排序 快排
function quickSortSitu(arr, left, right) {
  if (left >= right) return;
  left = typeof left === "number" ? left : 0;
  right = typeof right === "number" ? right : arr.length - 1;
  // 找到基准点
  const index = partition(arr, left, right);
  // 基准点的左边
  quickSortSitu(arr, left, index - 1);
  // 基准点的右边
  quickSortSitu(arr, index + 1, right);
  return arr;
}

function partition(arr, left, right) {
  // 将最后一项作为中间值
  const pivot = arr[right];
  // 指向未被排序区域的第一位
  let index = left;

  for (let i = index; i < right; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, index, right);
  // 此时index 已经是 right 中间值了
  return index;
}

function swap(arr, i, j) {
  if (i === j) return;
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```