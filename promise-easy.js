/**
 * 仅实现异步链式调用的简化版
 */

function Promise(excutor) {
  var self = this
  self.status = "pending" // Promise当前的状态
  self.data = undefined // Promise的值
  self.onResolvedCallback = [] // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

  function resolve(value) {
    setTimeout(() => {
      if (self.status === "pending") {
        self.status = "resolved"
        self.data = value
        self.onResolvedCallback.forEach(callback => callback(value))
      }
    })
  }

  excutor(resolve.bind(self))
}

Promise.prototype.then = function(onResolved) {
  var self = this

  return new Promise(resolve => {
    self.onResolvedCallback.push(function() {
      var result = onResolved(self.data)
      if (result instanceof Promise) {
        result.then(resolve)
      } else {
        resolve(result)
      }
    })
  })
}

new Promise(resolve => {
  setTimeout(() => {
    resolve(1)
  }, 500)
})
  .then(res => {
    console.log(res)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2)
      }, 500)
    })
  })
  .then(res => {
    console.log(res)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(3)
      }, 500)
    })
  })
  .then(console.log)
