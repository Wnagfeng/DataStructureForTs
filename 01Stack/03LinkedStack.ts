import { IStack } from './IStack';
// implements IStack<T>他不是继承他是一种结构约束
// implements-- 用于指示一个类要实现一个接口。这意味着类必须实现接口中定义的所有属性和方法。
class LinkedStack<T> implements IStack<T> {
  private data: T[] = [];

  push(element: T): void {
    this.data.push(element);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  size(): number {
    return this.data.length;
  }
}
