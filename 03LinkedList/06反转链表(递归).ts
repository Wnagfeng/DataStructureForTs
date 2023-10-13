import { MyLinkedNode } from './03链表面试题1';
function reverseList(head: MyLinkedNode | null): MyLinkedNode | null {
  if (head === null || head.next == null) return head;
  const result = reverseList(head.next ?? null);
  head.next.next = head;
  head.next = null;
  return result;
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
