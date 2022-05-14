//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let arr = Array.from(String(n)).reverse()

  arr2 = arr.map(e => parseInt(e))
  return arr2
}