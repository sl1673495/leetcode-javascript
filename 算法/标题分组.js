/**
  需要输出
    [{
        "name": "h3"
    }, {
        "name": "h2",
        "child": [{
            "name": "h3"
        }]
    }, {
        "name": "h1",
        "child": [{
            "name": "h2",
            "child": [{
                "name": "h3"
            }, {
                "name": "h3"
            }]
        }, {
            "name": "h2",
            "child": [{
                "name": "h3"
            }]
        }]
    }, {
        "name": "h1",
        "child": [{
            "name": "h2",
            "child": [{
                "name": "h4"
            }]
        }, {
            "name": "h2",
            "child": [{
                "name": "h3"
            }]
        }]
    }]
 */

let list = [
  'h3',
  'h2', 'h3',
  'h1', 'h2', 'h3', 'h3', 'h2', 'h3',
  'h1', 'h2', 'h4', 'h2', 'h3'
]

function makeTree(arr) {
  let tree = [];
  let max = Infinity
  let prev = {};

  arr.forEach((title) => {
    let level = Number(title[1]);
    if (level <= max) {
      let node = {
        name: title,
      };
      tree.push(node);
      prev.level = level;
      prev.node = node;
      max = level
    } else if (level === prev.level) {
      // 等级相同的话 上级节点的child继续增加子节点
      prev = prev.prev;
      pushNodeAndAdvanceQueue();
    } else if (level > prev.level) {
      pushNodeAndAdvanceQueue();
    } else {
      while (level <= prev.level) {
        // 向上回溯，找到平级的再上一层node
        prev = prev.prev;
      }
      pushNodeAndAdvanceQueue();
    }

    function pushNodeAndAdvanceQueue() {
        let node = {
            name: title,
        };
        if (!prev.node.child) {
            let child = [];
            prev.node.child = child;
        }
        prev.node.child.push(node);
        let next = {
          level,
          node,
          prev,
        };
        prev = next;
    }
  });

  return tree;
}

console.log(makeTree(list));

/**
 * 思路
 * 
 * 利用链表来向上回溯合适的父节点
 * 利用max变量记录当前分组的最大标题，如果比max还大，就需要新开一个分组了。
 */
