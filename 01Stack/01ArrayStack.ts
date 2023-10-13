class ArrayStack {
  // private是一种访问修饰符，用于限制类成员的访问范围，表示只能在类内部使用。
  private data: any[] = [];
  push(element: any): void {
    this.data.push(element);
  }
  pop(): any {
    return this.data.pop();
  }

  peek(): any {
    return this.data[this.data.length - 1];
  }

  isEmpty(): any {
    return this.data.length === 0;
  }

  size(): any {
    return this.data.length;
  }
}
const ArrayStack1 = new ArrayStack();


ArrayStack1.push('1');
ArrayStack1.push('2');
ArrayStack1.push('3');
console.log(ArrayStack1.peek());
console.log(ArrayStack1.pop());
console.log(ArrayStack1.pop());
console.log(ArrayStack1.peek());
