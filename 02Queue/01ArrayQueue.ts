import { IQueue } from './IQueue';

class ArrayQueue<T> implements IQueue<T> {
  private data: T[] = [];
  enqueue(element: T): void {
    this.data.push(element);
  }
  dequeuq(): T | undefined {
    return this.data.shift();
  }
  peek(): T | undefined {
    return this.data[0];
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  size(): number {
    return this.data.length;
  }
}

export default ArrayQueue;
const ArrayQueuq1 = new ArrayQueue<String>();
ArrayQueuq1.enqueue('1');
ArrayQueuq1.enqueue('2');
ArrayQueuq1.enqueue('3');
console.log(ArrayQueuq1.dequeuq());
console.log(ArrayQueuq1.dequeuq());
console.log(ArrayQueuq1.peek());
console.log(ArrayQueuq1.isEmpty());
