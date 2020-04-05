export const raf = (() => {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
})()

let isScrolling = false
let stop = false

export function scroll (el, type, targetPos, time, next) {
  if (isScrolling) {
    stop = true
  }
  isScrolling = true
  const start = Date.now()
  const currentPos = el[type]

  raf(step)

  function step () {
    const current = Date.now()
    const rate = Math.min(1, (current - start) / time)
    if (rate === 1) {
      el[type] = targetPos
      isScrolling = false
      next && next()
    } else {
      el[type] = currentPos + (targetPos - currentPos) * rate
      if (!stop) {
        raf(step)
      } else {
        stop = false
      }
    }
  }
}

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    isScrolling = false
    stop = false
  }
})