//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending) {
  let stri = str.split("")
  let end = ending.split("")

  let checker = []

  for (let i = 1; i <= end.length; i++) {
    if (stri[stri.length - i] === end[end.length - i]) {
      checker.push("yes")
    } else {
      checker.push("no")
    }
  }

  if (checker.includes("no")) {
    return false
  } else return true
}