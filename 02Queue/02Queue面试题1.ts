// 击鼓传花面试题
// 规则说明：
// 有一群人 a b c d e f g
// 有一个管理员指定的数字随机的一个整数 比如：3
// 从a开始数凡是数到3的用户踢出去 依次循环
import ArrayQueue from './01ArrayQueue';
function hotpotato(person: string[], number: number): string {
  if (person.length === 0) return '-1'; //边界判断
  // 创建队列结构
  const hotpotatoQueue = new ArrayQueue<string>();
  // 将所有的人加入队列
  for (const name of person) {
    hotpotatoQueue.enqueue(name);
  }
  while (hotpotatoQueue.size() > 1) {
    //继续循环的条件是当前队列中还有大于一的数量
    // 遍历所有的人
    for (let i = 1; i < number; i++) {
      const name = hotpotatoQueue.dequeuq(); //进入该循环的说明都不是符合的元素
      if (name) hotpotatoQueue.enqueue(name);
    }
    // 踢出去不符合的人
    hotpotatoQueue.dequeuq();
  }
  //经过循环后获得的人就是我们要踢出去的人
  const leftname = hotpotatoQueue.dequeuq()!; //移除当前的人
  const index = person.indexOf(leftname);
  return leftname;
}
let person = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(hotpotato(person, 3));
