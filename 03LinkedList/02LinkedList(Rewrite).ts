export class LinkedNode<T> {
  value: T;
  next: LinkedNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

export class LikedList<T> {
  private head: LinkedNode<T> | null = null;
  private size: number = 0;
  get length() {
    return this.size;
  }
  // 定义一个私有方法用来根据postion来获取到需要的node节点
  private getNode(postion: number): LinkedNode<T> | null {
    let current = this.head;
    let index = 0;
    // 根据条件去循环
    while (index++ < postion) {
      current = current!.next;
    }
    return current;
  }
  //   添加方法
  append(element: T) {
    const newNode = new LinkedNode<T>(element);
    if (this.head == null) {
      this.head = newNode;
      this.size++;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.size++;
    }
  }
  //   遍历方法
  traverse() {
    const value: T[] = [];
    let current = this.head;
    while (current) {
      value.push(current.value);
      current = current.next;
    }
    console.log(value.join('->'));
  }
  //   插入方法
  inster(element: T, postion: number) {
    if (postion < 0 || postion > this.length) {
      console.log('位置不能小于0或者大于链表最多长度哦');
      return false;
    } else if (postion == 0) {
      const newNode = new LinkedNode<T>(element);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let previous: LinkedNode<T> | null = this.getNode(postion - 1);
      const newNode = new LinkedNode<T>(element);
      newNode.next = previous!.next;
      previous!.next = newNode;
      this.size++;
    }
  }
  // 删除方法
  removeat(postion: number): T | null {
    if (postion < 0 || postion > this.size) return null;
    let current = this.head;
    if (postion == 0) {
      this.head = current?.next!;
    } else {
      let previous: LinkedNode<T> | null;
      current = this.getNode(postion);
      previous = this.getNode(postion - 1);
      previous!.next = current!.next;
    }
    this.size--;
    return current?.value ?? null;
  }

  // get方法
  get(postion: number): T | null {
    if (postion < 0 || postion > this.size) return null;
    let current = this.getNode(postion);
    if (postion == 0) return current?.value ?? null;
    return current?.value ?? null;
  }

  // 更新方法
  updata(postion: number, value: T): boolean {
    if (postion < 0 || postion > this.size) return false;
    // 根据位置获取到元素
    let current = this.getNode(postion);
    current!.value = value;
    return true;
  }
  indexOf(value: T): number | string {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.next;
    }
    return '没有找到';
  }
}
const liked = new LikedList<string>();
// 添加元素
liked.append('w');
liked.append('a');
liked.append('n');
liked.append('g');
liked.append('f');
liked.append('e');
liked.append('n');
liked.append('g');
// liked.inster('I', 0);
// liked.inster('M', -10);
// console.log(liked.traverse());
// liked.inster('A', 2);
// liked.updata(0, 'R');
// liked.inster('A', 20);
// liked.traverse();
console.log(liked.indexOf('f'));

// console.log(liked.removeat(3));
// console.log(liked.get(5));
// console.log(liked.get(1));

// console.log(liked.length);
// 查看元素
// liked.traverse();
