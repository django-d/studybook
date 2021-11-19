// 合并两个有序链表
function merge_list(list1, list2) {
  const fakeHead = { val: null, next: null };
  let tail = fakeHead;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else {
      tail.next = list1;
      list1 = list1.next;
    }

    tail = tail.next;
  }

  while (list1) {
    tail.next = list1;
    list1 = list1.next;
    tail = tail.next;
  }

  while (list2) {
    tail.next = list2;
    list2 = list2.next;
    tail = tail.next;
  }

  return fakeHead.next;
}
