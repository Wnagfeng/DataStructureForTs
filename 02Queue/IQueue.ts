import { Ilist } from '../Types/Ilist';
export interface IQueue<T> extends Ilist<T> {
  enqueue(element: T): void; //加入队列元素
  dequeuq(): T | undefined; //删除队列顶端元素
  //   peek(): T | undefined; //查看队列顶端元素
  //   isEmpty(): boolean; //判断是否为空
  //   size(): number; //查看当前队列的大小
}
