const data = [
  {
    name: "1",
    children: [
      {
        name: "1-1",
      },
      {
        name: "1-2",
        children: [
          {
            name: "1-2-1",
          },
          {
            name: "1-2-2",
          },
        ],
      },
      {
        name: "1-3",
        children: [
          {
            name: "1-3-1",
          },
          {
            name: "1-3-2",
          },
        ],
      },
    ],
  },
]

/**
 * bfs需要借助一个队列，在访问平级节点的时候遇到节点有子节点的话，先全部把子节点推入队列。
 * 这样下一轮bfs的时候，就会按顺序先平级执行这个队列，在这个过程中重复上一步对子节点的收集。
 */
function bfs(tree) {
  let queue = []
  tree.forEach((node) => {
    console.log(node.name)
    if (node.children) {
      queue = queue.concat(node.children)
    }
  })
  if (queue.length) {
    bfs(queue)
  }
}

/**
 * dfs就是一路向下访问，遇到节点有children的情况就直接递归下去，而先不管同级的其他节点。
 */
function dfs(tree) {
  tree.forEach((node) => {
    console.log(node.name)
    if (node.children) {
      dfs(node.children)
    }
  })
}

console.log("bfs")
bfs(data)
console.log("dfs")
dfs(data)
