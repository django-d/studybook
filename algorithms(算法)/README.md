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