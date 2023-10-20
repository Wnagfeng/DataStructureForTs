// 二叉搜索树
// write by wangfeng
// time:2023年10月18日15:39:55
import { btPrint } from 'hy-algokit';
class TreeNode<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  parent: TreeNode<T> | null = null;
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this);
  }
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this);
  }
}
class BSTree<T> {
  private Root: TreeNode<T> | null = null;
  private InsterNode(Node: TreeNode<T>, NewNode: TreeNode<T>) {
    // 大于去右边小于去左边
    if (NewNode.value < Node.value) {
      // 小于情况
      if (Node.left === null) {
        Node.left = NewNode;
      } else {
        this.InsterNode(Node.left, NewNode);
      }
    } else {
      // 大于情况
      if (Node.right === null) {
        Node.right = NewNode;
      } else {
        this.InsterNode(Node.right, NewNode);
      }
    }
  }
  private prevOrderTraversetree(RootNode: TreeNode<T> | null) {
    if (RootNode) {
      console.log(RootNode.value);
      this.prevOrderTraversetree(RootNode.left);
      this.prevOrderTraversetree(RootNode.right);
    }
  }
  private inOrderTraversetree(RootNode: TreeNode<T> | null) {
    if (RootNode) {
      this.inOrderTraversetree(RootNode.left);
      console.log(RootNode.value);
      this.inOrderTraversetree(RootNode.right);
    }
  }
  private postOrderTraverseTree(RootNode: TreeNode<T> | null) {
    if (RootNode) {
      this.postOrderTraverseTree(RootNode.left);
      this.postOrderTraverseTree(RootNode.right);
      console.log(RootNode.value);
    }
  }
  private SearchNode(value: T): TreeNode<T> | null {
    // 对搜索方法的封装
    let current = this.Root;
    let parent: TreeNode<T> | null = null;
    while (current) {
      // 这种情况出现在根节点
      if (current.value === value) {
        return current;
      }
      parent = current;
      // 继续向下寻找
      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }

      // 如果curret存在的话就保存父节点
      if (current) current.parent = parent;
    }
    return null;
  }
  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    // 获取右子树
    let current = delNode.right;
    let successor: TreeNode<T> | null = null;
    while (current) {
      successor = current;
      current = current.left;
      if (current) {
        current.parent = successor;
      }
    }
    // 拿到了后继节点
    if (successor !== delNode.right) {
      successor!.parent!.left = successor!.right;
      successor!.right = delNode.right;
    }
    // 一定要进行的操作: 将删除节点的left, 赋值给后继节点的left
    successor!.left = delNode.left;
    return successor!;
  }

  print() {
    btPrint(this.Root);
  }
  // 插入方法
  insert(Node: T) {
    // 创建node节点
    const NewNode = new TreeNode(Node);
    // 1.判断根节点是否存在
    if (!this.Root) {
      this.Root = NewNode;
    } else {
      // 2.递归的调用插入方法
      this.InsterNode(this.Root, NewNode);
    }
  }
  // 先序遍历
  prevOrderTraverse() {
    this.prevOrderTraversetree(this.Root);
  }
  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraversetree(this.Root);
  }
  // 后序遍历
  postOrederTraverse() {
    this.postOrderTraverseTree(this.Root);
  }
  // 层序遍历
  levelOrderTraverse() {
    // 利用栈结构去遍历数据
    const TreeStack: TreeNode<T>[] = [];
    // 判断根节点是否有值
    if (!this.Root) return;
    // 加入第一个元素
    TreeStack.push(this.Root);
    while (TreeStack.length) {
      // 弹出第一个的元素
      const current = TreeStack.shift()!;
      console.log(current.value);
      // 加入左右子节点
      if (current.left) {
        TreeStack.push(current.left);
      }
      if (current.right) {
        TreeStack.push(current.right);
      }
    }
  }
  // 获取最大值
  getMaxValue() {
    let current: TreeNode<T> | null = this.Root;
    while (current && current.right) {
      current = current.right;
    }
    return current?.value;
  }
  // 获取最小值
  getMinValue() {
    let current: TreeNode<T> | null = this.Root;
    while (current && current.right) {
      current = current.left;
    }
    return current?.value;
  }
  // 搜索树结构
  SearchNodeToThree(value: T) {
    const result = this.SearchNode(value);
    return !!result;
  }
  // 删除节点
  DeleteNodeToThree(value: T) {
    const result = this.SearchNode(value);
    if (!result) return false;
    if (result.left === null && result.right === null) {
      // 叶子结点删除操作
      if (result === this.Root) {
        this.Root = null;
      } else if (result.isLeft) {
        result.parent!.left = null;
      } else {
        result.parent!.right = null;
      }
    } else if (result.right === null) {
      // 左边的情况
      if (result === this.Root) {
        this.Root = result.left;
      } else if (result.isLeft) {
        result.parent!.left = result.left;
      } else {
        result.parent!.right = result.left;
      }
    } else if (result.left === null) {
      // 右边的情况
      if (result === this.Root) {
        this.Root = result.right;
      } else if (result.isLeft) {
        result.parent!.left = result.right;
      } else {
        result.parent!.right = result.right;
      }
    } else {
      const   = this.getSuccessor(result);
    }
  }
}
const bst = new BSTree<number>();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
bst.print();
// console.log('----------先序遍历-------------');
// bst.prevOrderTraverse();
// console.log('----------中序遍历-------------');
// bst.inOrderTraverse();
// console.log('----------后序遍历-------------');
// bst.postOrederTraverse();
// console.log('----------层序遍历-------------');
// bst.levelOrderTraverse();
// console.log('----------最大值-------------');
// console.log(bst.getMaxValue());
// console.log('----------最小值-------------');
// console.log(bst.getMinValue());
// console.log(bst.SearchNodeToThree(20));
// console.log(bst.SearchNodeToThree(18));
// console.log(bst.SearchNodeToThree(6));
// console.log(bst.SearchNodeToThree(30));
// console.log('----------删除操作-------------');
// bst.DeleteNodeToThree(3);
// bst.DeleteNodeToThree(6);
// bst.DeleteNodeToThree(6);
bst.DeleteNodeToThree(7);
bst.print();

export {};
