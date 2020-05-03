let a = []

for (let index = 0; index < 500; index++) {
  a.push(i)
}

for (let i = 16; i < 10000; i++) {
  a.push(i)
}

let b = []

for (let index = 0; index < 500; index++) {
  b.push(i)
}

for (let i = 10001; i < 50000; i++) {
  b.push(i)
}

function mapIntersection(arr1, arr2) {
  console.time()
  let map = new Map()
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], true)
  }

  let result = []
  for (let i = 0; i < arr2.length; i++) {
    let val = arr2[i]
    if (map.get(val)) {
      result.push(val)
    }
  }
  console.timeEnd()
  return result
}

console.log("mapIntersection", mapIntersection(a, b))

function pointIntersection(arr1, arr2) {
  console.time()
  let i = 0
  let j = 0

  let l1 = arr1.length
  let l2 = arr2.length

  let result = []
  while (i < l1 && j < l2) {
    let val1 = arr1[i]
    let val2 = arr2[j]
    let val1Last = arr1[i - 1]
    let val2Last = arr2[j - 1]

    if (val1 > val2) {
      i++
    }

    if (val1 === val2) {
      result.push(val1)
      i++
      j++
    }

    if (val1 < val2) {
      j++
    }

    if (val1 > val2Last || val2 > val1Last) {
      console.timeEnd()
      return result
    }
  }
  console.timeEnd()
  return result
}

console.log('pointIntersection', pointIntersection(a, b))