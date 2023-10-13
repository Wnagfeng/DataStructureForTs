class MyLinkedNode {
  value: number;
  next: MyLinkedNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
class MyLinkedList {
  head: MyLinkedNode | null;
  tail: MyLinkedNode | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // get(index: number): number {
  //   if (index < 0 || index >= this.size) {
  //     return -1;
  //   }
  //   let currentNode: MyLinkedNode | null = this.head;
  //   for (let i = 0; i < index; i++) {
  //     currentNode = currentNode!.next;
  //   }
  //   return currentNode!.value;
  // }

  get(postion: number): number {
    // 边界的判断
    if (postion < 0 || postion >= this.size) return -1;
    // 根据postion获取到当前元素的上一个元素
    let currentNode: MyLinkedNode | null = this.head;
    let index = 0;
    while (currentNode && index < postion) {
      currentNode = currentNode.next;
      index++;
    }
    if (currentNode) {
      return currentNode.value; // 返回当前节点的值
    } else {
      return -1;
    }
  }

  addAtHead(val: number): void {
    let newNode = new MyLinkedNode(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  addAtTail(val: number): void {
    let newNode = new MyLinkedNode(val);
    if (this.tail == null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index == 0) {
      this.addAtHead(val);
      return;
    }
    if (index == this.size) {
      this.addAtTail(val);
      return;
    }
    let newNode = new MyLinkedNode(val);
    let prevNode = this.head!;
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next!;
    }
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index == 0) {
      if (this.head!.next) {
        this.head! = this.head!.next;
      } else {
        this.head = null;
        this.tail = null;
      }
    } else {
      let prevNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode!.next;
      }
      if (prevNode!.next == this.tail) {
        this.tail = prevNode;
      }
      prevNode!.next = prevNode?.next?.next || null;
    }
    this.size--;
  }
}

export { MyLinkedNode, MyLinkedList };
