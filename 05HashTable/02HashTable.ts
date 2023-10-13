// write by wangfeng!
// time:2023年10月12日15:54:18
class HashTable<T = any> {
  // 创建一个数组用来存储数据
  // 类型注解 storage是一个数组类型其元素是一个一个数组元素的类型是string和t组成的
  private storage: [string, T][][] = [];
  // 当前数组的长度
  length: number = 7;
  // 当前数据的个数
  private count: number = 0;
  // 根据key获取到index
  private HashFunction(key: string, Maxlength: number): number {
    let HashCode = 0;
    let length = key.length;
    for (let i = 0; i < length; i++) {
      HashCode = 31 * HashCode + key.charCodeAt(i);
    }
    const index = HashCode % Maxlength;
    return index;
  }
  // 根据传入的key获取到哈希桶
  private getHashBucketForkey(key: string): [string, T][] | undefined {
    // 根据传递进来的key去获取到index
    const index = this.HashFunction(key, this.length);
    // 根据index去找到哈希桶
    const bucket = this.storage[index];
    return bucket;
  }
  // 性能优化确哈希长度为质数
  private isPrime(num: number): boolean {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
  // 哈希表的扩容
  private resize(newLength: number) {
    // 性能优化:我们需要确保该哈希表的长度是一个质数 --为啥--百度
    let nextPrime = newLength;
    while (!this.isPrime(nextPrime)) {
      nextPrime++;
    }
    // 设置新的长度
    this.length = nextPrime;
    // 获取到原来的数据
    const oldStorage = this.storage;
    // 对数据进行再哈希化
    // 格式化数据
    this.storage = [];
    this.count = 0;
    // 对原来得到数据进行再哈希化
    oldStorage.forEach((element) => {
      // 这一步能拿到所有的哈希桶
      if (!element) return;
      for (let i = 0; i < element.length; i++) {
        const tuple = element[i]; //每个桶中的数据
        this.interAndchange(tuple[0], tuple[1]); //再哈希
      }
    });
  }
  // 插入和修改数据
  interAndchange(key: string, value: T) {
    // 1.前置条件
    // 当元素不存在就插入
    // 当元素存在就修改
    // 当元素存在且key相等就返回
    // 根据key获取到索引值
    const index = this.HashFunction(key, this.length);
    // 根据索引获取到对应位置的元素(桶)
    let bucket = this.getHashBucketForkey(key);
    // 判断该桶是否有元素如果没有你需要把他设置为一个数组类型方便后续放元素
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }
    // 遍历一下该哈希桶 需要做的操作是判断元素的key和value是否重复
    // 创建一个状态用于显示该元素是否被更新了、
    let isUpdata = false; //默认是不更新
    for (let i = 0; i < bucket.length; i++) {
      const element = bucket[i];
      // 获取到哈希桶中的元祖类型中的key
      const elementkey = element[0];
      if (elementkey === key) {
        element[1] = value;
        isUpdata = true;
      }
    }
    // 如果说elementkey === key那么我们需要进行插入操作
    if (!isUpdata) {
      bucket.push([key, value]);
      this.count++;
      // 如果loadFactor的比例大于0.75需要进行扩容
      if (this.count / this.length > 0.75) {
        this.resize(this.length * 2);
      }
    }
  }
  // 获取数据
  get(key: string): T | undefined {
    const bucket = this.getHashBucketForkey(key);
    if (!bucket) return undefined;
    for (let i = 0; i < bucket.length; i++) {
      const element = bucket[i];
      const elementkey = element[0];
      const elementvalue = element[1];
      if (elementkey === key) {
        return elementvalue;
      }
    }
  }
  // 删除方法
  remove(key: string): T | undefined {
    const bucket = this.getHashBucketForkey(key);
    if (!bucket) return undefined;
    for (let i = 0; i < bucket.length; i++) {
      const element = bucket[i];
      const elementkey = element[0];
      const elementvalue = element[1];
      if (elementkey === key) {
        // 如果相等我就找到了需要删除的数据
        bucket.splice(i, 1);
        this.count--;
        // 如果loadFactor小于0.25 缩容操作 注意该表的最小长度为7
        if (this.count / this.length < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2));
        }
        return elementvalue;
      }
    }
    return undefined;
  }
}
const HashTable1 = new HashTable();
// 测试插入;
console.log('测试插入');
HashTable1.interAndchange('aaa', 1);
HashTable1.interAndchange('bbb', 2);
HashTable1.interAndchange('ccc', 3);
HashTable1.interAndchange('ddd', 4);
HashTable1.interAndchange('eee', 5);
HashTable1.interAndchange('fff', 6);
HashTable1.interAndchange('ggg', 7);
HashTable1.interAndchange('hhh', 8);
// 测试获取
console.log('测试获取');
console.log(HashTable1.get('aaa'));
console.log(HashTable1.get('bbb'));
console.log(HashTable1.get('ccc'));
console.log(HashTable1.get('ddd'));
console.log(HashTable1.get('233'));
// 测试删除
console.log('测试删除');
console.log(HashTable1.remove('aaa'));
console.log(HashTable1.remove('bbb'));
console.log(HashTable1.remove('ccc'));
console.log(HashTable1.remove('ddd'));
console.log(HashTable1.remove('eee'));
console.log('write by wangfeng!');
