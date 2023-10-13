// 利用栈结构实现十进制转二进制
import refactoringArrayStack from './02ArrayStack_refactoring';
function DecimalToBinary(Decimal: number): string {
  // 引入栈结构
  const stack = new refactoringArrayStack<number>();
  while (Decimal > 0) {
    const result = Decimal % 2;
    stack.push(result);
    Decimal = Math.floor(Decimal / 2);
  }
  let binary = '';
  while (!stack.isEmpty()) {
    binary += stack.pop();
  }
  return binary;
}
console.log(DecimalToBinary(25));
