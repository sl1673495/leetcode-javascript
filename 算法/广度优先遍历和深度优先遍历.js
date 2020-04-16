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

function dfs(tree) {
  tree.forEach((node) => {
    console.log(node.name)
    if (node.children) {
      dfs(node.children)
    }
  })
}

console.log('bfs')
bfs(data)
console.log('dfs')
dfs(data)