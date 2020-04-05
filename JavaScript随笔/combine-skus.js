var s1 = ['大陆', '港版', '日版']
var s2 = ['64g', '32g']
var s3 = ['金色', '黄色', '蓝色']
var s4 = ['标准套餐1', '标准套餐2']

var combind = (...arrs) => {
  var [head, ...rest] = arrs
  var backet = [...head]
  var _combine = (backet, ...rest) => {
     const results = []
     const [head, ...more] = rest
     if (!head) return backet
      head.forEach(item1 => {
          backet.forEach(item2 => {
              results.push(`${item2}-${item1}`)
          })
      })
     return _combine(results, ...more)
  }
  return _combine(backet, ...rest)
}

console.log(combind(s1, s2, s3, s4))