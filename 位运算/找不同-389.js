/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
let findTheDifference = function (s, t) {
  let rest = t.charCodeAt(t.length - 1)
  for (let i = 0; i < s.length; i++) {
    let charS = s[i]
    let charT = t[i]
    rest ^= charS.charCodeAt(0)
    rest ^= charT.charCodeAt(0)
  }
  return String.fromCharCode(rest)
}
