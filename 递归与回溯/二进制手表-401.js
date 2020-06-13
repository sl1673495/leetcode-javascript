/**
 * @param {number} num
 * @return {string[]}
 */
let HOURS = [1, 2, 4, 8]
let MINUTES = [1, 2, 4, 8, 16, 32]

let readBinaryWatch = function (num) {
  let res = []

  let combine = (arr, num) => {
    if (num === 0) {
      return [0]
    }
    let res = []
    let helper = (start, prevCount, prevSum) => {
      if (prevCount === num) {
        res.push(prevSum)
        return
      }

      for (let i = start; i < arr.length; i++) {
        let cur = arr[i]
        helper(i + 1, prevCount + 1, prevSum + cur)
      }
    }
    helper(0, 0, 0)
    return res
  }

  for (let i = 0; i <= num; i++) {
    let hours = combine(HOURS, i)
    let minutes = combine(MINUTES, num - i)

    for (let hour of hours) {
      if (hour > 11) continue
      for (let minute of minutes) {
        if (minute > 59) {
          continue
        }
        res.push(`${hour}:${padLeft(minute)}`)
      }
    }
  }
  return res
}

function padLeft(num) {
  let str = num.toString()
  if (str.length === 1) {
    str = `0${str}`
  }
  return str
}