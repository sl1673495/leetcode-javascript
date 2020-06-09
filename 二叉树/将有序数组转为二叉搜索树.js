let sortedArrayToBST = function (nums) {
  let n = nums.length
  if (!n) {
      return null
  }
  let mid = Math.floor(n / 2)
  let root = new TreeNode(nums[mid])

  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1, n))

  return root
};