const binaryTree = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

/**
 * 前序遍历 访问顺序为 根节点 -> 左节点 -> 右节点
 */
function preorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 输出当前遍历的结点值
  console.log("当前遍历的结点值是：", root.val);
  // 递归遍历左子树
  preorder(root.left);
  // 递归遍历右子树
  preorder(root.right);
}

/**
 * 中序遍历 访问顺序为 左节点 -> 根节点 -> 右节点
 */
function inorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 递归遍历左子树
  inorder(root.left);
  // 输出当前遍历的结点值
  console.log("当前遍历的结点值是：", root.val);
  // 递归遍历右子树
  inorder(root.right);
}

/**
 * 后序遍历 访问顺序为 左节点 -> 右节点 -> 根节点
 */
function postorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 递归遍历左子树
  postorder(root.left);
  // 递归遍历右子树
  postorder(root.right);
  // 输出当前遍历的结点值
  console.log("当前遍历的结点值是：", root.val);
}

console.log("前序遍历");
preorder(binaryTree);

console.log("中序遍历");
inorder(binaryTree);

console.log("后序遍历")
postorder(binaryTree)
