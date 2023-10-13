// num是人数 target是干掉的目标 当人物编号所在的位置和target是一样的就干掉他
import ArrayQueue from './01ArrayQueue';
function iceBreakingGame(num: number, target: number): number {
  // 创建一个队列结构
  const Queue = new ArrayQueue<number>();
  // 将所有的人物编号加入对垒
  for (let i = 0; i < num; i++) {
    Queue.enqueue(i);
  }

  while (Queue.size() > 1) {
    for (let i = 1; i < target; i++) {
      //进入循环的都是不用杀的元素
      //首先把当前的元素添加到队列底部 然后删除原来的队列元素
      Queue.enqueue(Queue.dequeuq()!);
    }
    Queue.dequeuq();
  }
  return Queue.dequeuq()!;
}

console.log(iceBreakingGame(12, 5));

console.log(iceBreakingGame(7, 4));
