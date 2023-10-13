// 实现栈结构
import { Ilist } from '../Types/Ilist';
export interface IStack<T> extends Ilist<T> {
  push(element: T): void;
  pop(): T | undefined;
  // peek(): T | undefined;
  // isEmpty(): boolean;
  // size(): number;
}
