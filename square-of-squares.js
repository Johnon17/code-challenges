var isSquare = function (n) {
  //get floored square root of the number
  let x = Math.floor(Math.sqrt(n))

  //if when multiplied by itself it equals the number the number is a perfect square
  if (x * x === n) {
    return true
  } else {
    return false;
  }
}