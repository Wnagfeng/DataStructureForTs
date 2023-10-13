/**
 *
 * @param key 需要转换的字符
 * @param Maxlength 数组的长度
 * @returns 转换后的索引
 */
function HashFunction(key: string, Maxlength: number): number {
  let HashCode = 0;
  let length = key.length;
  for (let i = 0; i < length; i++) {
    HashCode = 31 * HashCode + key.charCodeAt(i);
  }
  const index = HashCode % Maxlength;
  return index;
}
// 当我们不使用质数的时候他会出现重复现象
console.log(HashFunction('abc', 8)); //-->2
console.log(HashFunction('cba', 8)); //-->2
console.log(HashFunction('abc', 7)); //-->6
console.log(HashFunction('cba', 7)); //-->1
