// 1->2->3->4->5
// 5->4->3->2->1
import { MyLinkedNode } from './03链表面试题1';
function reverseList(head: MyLinkedNode | null): MyLinkedNode | null {
  // 两种情况的判断
  if (head == null) return null;
  if (head.next == null) return head;
  let newhead: MyLinkedNode | null = head;
  const stcak: MyLinkedNode[] = [];
  // 遍历链表结构
  while (newhead) {
    stcak.push(newhead);
    newhead = newhead.next;
  }
  let currentHead: MyLinkedNode | null = stcak.pop()!;
  let current: MyLinkedNode = currentHead;
  /* 
    在第一个循环中，使用current作为循环条件，当current赋值为undefined时，循环结束。而在循环体内部，每次迭代都会将stcak中的元素出栈，并将出栈的元素赋值给current.next，直到stcak中没有元素可出栈为止。所以在最后一次循环时，current.next会被赋值为undefined。由于null和undefined在JavaScript中被认为是相等的所以你不用担心类型问题---小红书32页

    而在第二个循环中，使用的是数组stcak的长度作为循环条件，当stcak为空时，循环结束。在循环体内部，每次迭代都会将stcak中的元素出栈，并将出栈的元素赋值给current.next，直到stcak中没有元素可出栈为止。最后再将current.next赋值为null，确保链表结尾的节点的next指向null。不需要显示指定current.next = null的原因是因为在循环体内部已经通过stcak.pop()方法将最后一个节点的next设置为undefined了，最后一次循环时，current.next必然为undefined，不需要再额外设置为null。
   */
  // 循环一
  //   while (stcak.length) {
  //     current.next = stcak.pop()!;
  //     current = current.next;
  //   }
  //   current.next = null;
  //   循环二
  while (current) {
    current.next = stcak.pop()!;
    current = current.next;
  }
  return currentHead;
}
const node1 = new MyLinkedNode(1);
node1.next = new MyLinkedNode(2);
node1.next.next = new MyLinkedNode(3);

const newliked = reverseList(node1);
let current = newliked;
while (current) {
  console.log(current.value);
  current = current?.next ?? null;
}
