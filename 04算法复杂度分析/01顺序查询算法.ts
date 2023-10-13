/**
 * 这是一个顺序查找的函数
 * @param Array 要查询的数组
 * @param num 要查询的数据
 */
function sequentSearch(Array: number[], num: number) {
  // 遍历这个数组
  for (let i = 0; i < Array.length; i++) {
    const element = Array[i];
    if (element === num) {
      return i;
    }
  }
  return -1;
}
console.log(sequentSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000));
