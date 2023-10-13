class LinkedNode<T> {
  value: T;
  next: LinkedNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class LikedList<T> {
  private head: LinkedNode<T> | null = null;
  private size: number = 0;
  get length() {
    return this.size;
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
    // return value;
  }
  //   插入方法
  inster(element: T, postion: number) {
    // 边界的判断
    if (postion < 0 || postion > this.length) {
      console.log('位置不能小于0或者大于链表最多长度哦');
      return false;
    } else if (postion == 0) {
      // 创建node节点
      const newNode = new LinkedNode<T>(element);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 定义一个循环的条件
      let index = 0;
      // 定义一个默认的当前元素
      let current = this.head;
      // 定义当前元素的上一个元素
      let previous: LinkedNode<T> | null = null;
      while (index++ < postion && current) {
        previous = current;
        current = current.next;
      }
      // 来到循环的外面说明当前元素就是我们需要的位置
      // 创建元素
      const newNode = new LinkedNode<T>(element);
      newNode.next = current;
      previous!.next = newNode;
      this.size++;
    }
  }
  // 删除方法
  removeat(postion: number): T | null {
    // 对于边界的判断
    if (postion < 0 || postion > this.size) return null;
    // 获取到当前的节点 默认当前节点为第一个元素
    let current = this.head;
    // 删除第一个元素的情况
    if (postion == 0) {
      // 对于删除头部只需要拿到头部节点让他指向头部的下一个节点
      this.head = current?.next!;
    } else {
      // 删除其他的位置的元素
      // 当前元素的上一个元素
      let previous: LinkedNode<T> | null;
      // 定义一个循环条件
      let index = 0;
      while (index++ < postion) {
        previous = current;
        current = current?.next!; //获取到当前元素了
        // 将上一个元素的next指向当前元素的下一个指针
      }
      previous!.next = current!.next;
    }
    this.size--;
    return current?.value ?? null;
  }

  // get方法
  getNode(postion: number): T | null {
    // 对于边界的判断
    if (postion < 0 || postion > this.size) return null;

    // 根据coder传递的postion来获取到一个node
    // 定义一个当前节点
    let current = this.head;
    // 定义一个上一个节点
    let previous: LinkedNode<T> | null = null;
    // 获取第一个元素的情况
    if (postion == 0) return current?.value ?? null;
    // 定义一个循环条件
    let index = 0;
    // 根据条件去循环
    while (index++ < postion) {
      previous = current;
      current = current!.next;
    }
    // 循环结束即可获取到当前元素的上一个节点
    return current?.value ?? null;
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
// liked.inster('A', 20);
// liked.traverse();
// console.log(liked.removeat(3));
console.log(liked.getNode(5));
console.log(liked.getNode(1));

// console.log(liked.length);
// 查看元素
// liked.traverse();
