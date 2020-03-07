module.exports = function check(str, bracketsConfig) {
  let avString = str
  let newBracketsConfig = []
  for (let i = 0; i < bracketsConfig.length; i++) {
    newBracketsConfig.push(bracketsConfig[i][0] + bracketsConfig[i][1])
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < newBracketsConfig.length; j++) {
      avString = avString.replace(newBracketsConfig[j], '')
    }
    if (avString.length == 0) return true
  }
  return false
}
