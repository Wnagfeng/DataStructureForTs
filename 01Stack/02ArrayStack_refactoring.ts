// 使用泛型对代码进行重构

import { IStack } from './IStack';

class refactoringArrayStack<T> implements IStack<T> {
  // private是一种访问修饰符，用于限制类成员的访问范围，表示只能在类内部使用。
  // 定义一个数组/链表, 用于存储元素
  private data: T[] = [];

  // 实现栈中相关的操作方法
  // push方法: 将一个元素压入到栈中
  push(element: T): void {
    this.data.push(element);
  }

  // pop方法: 将栈顶的元素弹出栈(返回出去, 并且从栈顶移除掉)
  pop(): T | undefined {
    return this.data.pop();
  }

  // peek方法: 看一眼栈顶元素, 但是不进行任何的操作
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  // isEmpty: 判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0;
  }

  // 返回栈的数据个数
  size(): number {
    return this.data.length;
  }
}
const ArrayStack2 = new refactoringArrayStack<number>();

ArrayStack2.push(1);
ArrayStack2.push(2);
ArrayStack2.push(3);
console.log(ArrayStack2.peek());
console.log(ArrayStack2.pop());
console.log(ArrayStack2.pop());
console.log(ArrayStack2.peek());

// 为什么要使用泛型对其进行约束:因为我们不能保存coder在使用我们的栈结构的时候他传递的数据类型是一样的
// 当我们使用泛型后我们就能对其进行约束,你在new的时候给我传递一个泛型类型 比如number string 等等这样当coder在push的时候他只要push了一个不属于该类型的元素就会报错连运行都运行不了

export default refactoringArrayStack;
