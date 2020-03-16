// https://github.com/xieranmaya/blog/issues/3

function Promise(executor) {
  var self = this
  self.status = "pending" // Promise当前的状态
  self.data = undefined // Promise的值
  self.onResolvedCallback = [] // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
  self.onRejectedCallback = [] // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

  function resolve(value) {
    if (self.status === "pending") {
      self.status = "resolved"
      self.data = value
      for (var i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value)
      }
    }
  }

  function reject(reason) {
    if (self.status === "pending") {
      self.status = "rejected"
      self.data = reason
      for (var i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason)
      }
    }
  }

  try {
    // 考虑到执行executor的过程中有可能出错，所以我们用try/catch块给包起来，并且在出错后以catch到的值reject掉这个Promise
    executor(resolve, reject) // 执行executor
  } catch (e) {
    reject(e)
  }
}
Promise.prototype.then = function(onResolved, onRejected) {
  var self = this
  var promise2

  // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
  // 并且默认函数需要return值 以便于空值的穿透
  onResolved =
    typeof onResolved === "function"
      ? onResolved
      : function(value) {
          return value
        }
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : function(reason) {
          return reason
        }

  if (self.status === "resolved") {
    // 如果promise1(此处即为this/self)的状态已经确定并且是resolved，我们调用onResolved
    // 因为考虑到有可能throw，所以我们将其包在try/catch块里
    return (promise2 = new Promise(function(resolve, reject) {
      try {
        var x = onResolved(self.data)
        resolvePromise(promise2, x, resolve, reject)
      } catch (e) {
        reject(e) // 如果出错，以捕获到的错误做为promise2的结果
      }
    }))
  }

  // 此处与前一个if块的逻辑几乎相同，区别在于所调用的是onRejected函数，就不再做过多解释
  if (self.status === "rejected") {
    return (promise2 = new Promise(function(resolve, reject) {
      try {
        var x = onRejected(self.data)
        resolvePromise(promise2, x, resolve, reject)
      } catch (e) {
        reject(e)
      }
    }))
  }

  if (self.status === "pending") {
    // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，
    // 只能等到Promise的状态确定后，才能确实如何处理。
    // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入promise1(此处即this/self)的回调数组里
    // 逻辑本身跟第一个if块内的几乎一致，此处不做过多解释
    return (promise2 = new Promise(function(resolve, reject) {
      self.onResolvedCallback.push(function(value) {
        try {
          var x = onResolved(self.data)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })

      self.onRejectedCallback.push(function(reason) {
        try {
          var x = onRejected(self.data)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    }))
  }
}

/*
resolvePromise函数即为根据x的值来决定promise2的状态的函数
也即标准中的[Promise Resolution Procedure](https://promisesaplus.com/#point-47)
x为`promise2 = promise1.then(onResolved, onRejected)`里`onResolved/onRejected`的返回值
`resolve`和`reject`实际上是`promise2`的`executor`的两个实参，因为很难挂在其它的地方，所以一并传进来。
相信各位一定可以对照标准把标准转换成代码，这里就只标出代码在标准中对应的位置，只在必要的地方做一些解释
*/
function resolvePromise(promise2, x, resolve, reject) {
  var then
  var thenCalledOrThrow = false

  // 对应标准2.3.1节
  // If promise and x refer to the same object, reject promise with a TypeError as the reason.
  if (promise2 === x) {
    return reject(new TypeError("Chaining cycle detected for promise!"))
  }

  // 2.3.2
  /**
   * If x is a promise, adopt its state [3.4]:
      If x is pending, promise must remain pending until x is fulfilled or rejected.
      If/when x is fulfilled, fulfill promise with the same value.
      If/when x is rejected, reject promise with the same reason.
   */

  if (x instanceof Promise) {
    // 对应标准2.3.2节
    // 如果x的状态还没有确定，那么它是有可能被一个thenable决定最终状态和值的 有可能x是个promise但是它resolve的又是一个promise
    // 比如
    // 所以这里需要做一下处理，而不能一概的以为它会被一个“正常”的值resolve
    if (x.status === "pending") {
      x.then(function(value) {
        resolvePromise(promise2, value, resolve, reject)
      }, reject)
    } else {
      // 但如果这个Promise的状态已经确定了，那么它肯定有一个“正常”的值，而不是一个thenable，所以这里直接取它的状态
      x.then(resolve, reject)
    }
    return
  }

  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    // 2.3.3
    try {
      // 2.3.3.1 因为x.then有可能是一个getter，这种情况下多次读取就有可能产生副作用
      // 即要判断它的类型，又要调用它，这就是两次读取
      then = x.then

      if (typeof then === "function") {
        // 2.3.3.3
        then.call(
          x,
          function rs(y) {
            // 2.3.3.3.1
            if (thenCalledOrThrow) return
            thenCalledOrThrow = true
            return resolvePromise(promise2, y, resolve, reject) // 2.3.3.3.1
          },
          function rj(r) {
            if (thenCalledOrThrow) return // 2.3.3.3.3 即这三处谁选执行就以谁的结果为准
            thenCalledOrThrow = true
            return reject(r)
          },
        )
      } else {
        resolve(x)
      }
    } catch (e) {
      if (thenCalledOrThrow) return // 2.3.3.3.3 即这三处谁选执行就以谁的结果为准
      thenCalledOrThrow = true
      return reject(e)
    }
  } else {
    resolve(x)
  }
}

var a = new Promise(resolve => {
  setTimeout(() => {
    resolve(1)
  }, 500)
})
  .then(res => {
    console.log("res1", res)
    return new Promise(r => {
      r(
        new Promise(r1 => {
          r1(15)
        }),
      )
    })
  })
  .then(res => {
    console.log("res2", res)
  })
