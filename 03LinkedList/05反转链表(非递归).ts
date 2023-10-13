import { MyLinkedNode } from './03链表面试题1';
function reverseList(head: MyLinkedNode | null): MyLinkedNode | null {
  if (head === null || head.next == null) return head;
  let newHeader: MyLinkedNode | null = null;
  while (head) {
    let current: MyLinkedNode | null = head.next;
    head.next = newHeader; //这一步就是实现了链表的不断迭代  head.next = newHeader; 就是把第一个节点给了newheader 然后经过这个代码后当前链表中就剩下了2-3-4了
    newHeader = head;
    head = current;
  }
  return newHeader;
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
