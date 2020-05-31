/**
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function (path) {
  let tokens = path.split("/")
  let stack = []

  for (let index = 0; index < tokens.length; index++) {
    let token = tokens[index]
    if (token === "..") {
      if (stack.length > 0) {
        stack.pop()
      }
    } else if (!(token === '') && !(token === '.')) {
      stack.push(token)
    }
  }
  
  let res = '/'

  for (let token of stack) {
    res += `${token}/`
  }

  if (res !== '/') {
    res = res.substr(0, res.length - 1)
  }

  return res
}

console.log(simplifyPath("/home/"))
