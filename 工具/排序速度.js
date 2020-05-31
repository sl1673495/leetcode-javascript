const glob = require("glob")
const path = require("path")
const swap = require("./交换")
const random = require("./随机值")

function sortTest(sortFns, source, desc) {
  console.log(desc)
  const table = {}

  if (typeof source === "function") {
    source = source()
  }

  sortFns.forEach((fn) => {
    const copy = source.slice()
    const start = new Date().getTime()

    try {
      fn(copy)
    } catch (e) {
      return (table[fn.sortName] = {
        结果: "程序异常",
        原因: e.message,
      })
    }

    const end = new Date().getTime()
    const time = end - start
    const timeStr = `${time}ms`
    const success = isSorted(copy, source)

    table[fn.sortName] = {
      耗时: timeStr,
      数据长度: source.length,
      结果: success ? "成功" : "失败",
    }
  })

  console.table(table)
}

function getRandomArray(count) {
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push(Math.floor(i * Math.random() * 10))
  }
  return arr
}

function getNearlyArray(count, swapTime) {
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push(i)
  }

  for (let i = 0; i < swapTime; i++) {
    const x = Math.floor(Math.random() * count)
    const y = Math.floor(Math.random() * count)
    swap(arr, x, y)
  }

  return arr
}

function getRangedArray(count, min, max) {
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push(random(min, max))
  }
  return arr
}

function isSorted(target, source) {
  return (
    target.toString() ===
    source
      .slice()
      .sort((a, b) => a - b)
      .toString()
  )
}

glob("排序/*.js", (err, result) => {
  if (err) throw err
  const sortFunctions = result
    .map((p) => require(path.resolve(p)))
    .filter(Boolean)
  sortTest(sortFunctions, () => getRandomArray(10000), "普通数组排序")
  sortTest(sortFunctions, () => getNearlyArray(10000), "近似数组排序")
  sortTest(sortFunctions, () => getRangedArray(500), "大量重复值元素排序")
})
