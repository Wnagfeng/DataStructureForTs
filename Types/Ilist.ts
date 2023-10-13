export interface Ilist<T> {
  peek(): T | undefined; //查看队列顶端元素
  isEmpty(): boolean; //判断是否为空
  size(): number; //查看当前队列的大小
}
