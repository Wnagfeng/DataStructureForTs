/**
 * 二分查找函数
 * @param Array 当前需要查询的数组
 * @param num 当前需要查询的数据
 * @returns 查询到的数据在数组中的位置
 */

function binarySearch(Array: number[], num: number) {
  // 定义左边的索引
  let left = 0;
  // 定义右边的索引
  let right = Array.length - 1;
  // 开始查找数据
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    const middleNumber = Array[middle];
    if (middleNumber === num) {
      return middle;
    } else if (middleNumber < num) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
