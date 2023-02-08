module.exports = function check(str, bracketsConfig) {
  let count = 0;
  for (let i = 0; i < str.lengt; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      count++;
    }
    if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      count--;
  }
  if (count < 0) {
    return false;
  }
}
if (count != 0) {
  return false
} else {return true}
}
