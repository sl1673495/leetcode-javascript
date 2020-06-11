
let uniqSymbol = 'X'

let permuteUnique = function (nums) {
  let n = nums.length
  if (n === 1) {
    return [nums]
  }
  let permuteSet = (nums) => {
    let n = nums.length
    if (n === 0) {
      return new Set()
    }
    if (n === 1) {
      return new Set(nums)
    }

    let res = new Set()
    for (let i = 0; i < n; i++) {
      let use = nums[i]
      if (use === undefined) {
        continue
      }
      let rest = nums.slice(0, i).concat(nums.slice(i + 1, n))
      let restPermuteds = permuteSet(rest)
      restPermuteds.forEach((restPermuted) => {
        res.add(`${use}${uniqSymbol}${restPermuted}`)
      })
    }

    return res
  }

  let permuted = permuteSet(nums)

  return Array.from(permuted).map((val) => val.split(uniqSymbol).map(Number))
}

console.log(permuteUnique([-1,2,-1,2,1,-1,2,1]))
