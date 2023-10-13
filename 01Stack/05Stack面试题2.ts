// 有效的括号
// 面试题目：给定一个只包括 ‘(’，’)’，’{’，’}’，’[’，’]’ 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 示例 1：
// 输入：s = “()”
// 输出：true

// 示例 2：
// 输入：s = “()[]{}”
// 输出：true

// 示例 3：
// 输入：s = “(]”
// 输出：false

// 示例 4：
// 输入：s = “([)]”
// 输出：false

// 示例 5：
// 输入：s = “{[]}”
// 输出：true

// 关键在于括号之间一一对应
// 解题思路：使用栈“后进先出”这个规律。消除法，遇到左括号入栈，遇到右括号出栈，判断最后栈是否为空，为空则合法否则不合法。
import refactoringArrayStack from './02ArrayStack_refactoring';
function ivaliue(value: string): boolean {
  const stack = new refactoringArrayStack<string>();
  //对数据进行遍历
  for (let i = 0; i < value.length; i++) {
    const element = value[i];
    switch (element) {
      case '(':
        stack.push(')');
        break;
      case '{':
        stack.push('}');
        break;
      case '[':
        stack.push(']');
        break;
      default:
        if (element !== stack.pop()) return false;
        break;
    }
  }
  // 循环完成后如果没事就判断一下栈中是否还有元素如果有那还是不行
  return stack.isEmpty();
}
console.log(ivaliue('()'));
console.log(ivaliue('()[]{}'));
console.log(ivaliue('({}{[])'));
