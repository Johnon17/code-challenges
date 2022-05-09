//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//The function should return true if you are employed and not on vacation(because these are the circumstances under which you need to set an alarm).It should return false otherwise.
//Original Solution
function setAlarm(employed, vacation) {
  if (employed === true && vacation === false) {
    return true;
  } else {
    return false;
  }
}

//On Review
function setAlarm(employed, vacation) {
  return (employed && !vacation) ? true : false;
}

//Very simple, given an integer or a floating-point number, find its opposite.
//Solution
function opposite(number) {
  return -number
}

//Given a range of integers return the count of positive numbers and the sum of negative numbers
//My Original Solution
Function countPosSumNeg(input) {
  let countPos = 0
  let sumNeg = 0

  input.foreach((e) => {
    if (e > 0) {
      countPos++
    } else if (e < 0) {
      sumNeg += e
    }
  })

  return [countPos, sumNeg]
}

//After Remembering to use ternary 
Function countPosSumNeg(input) {
  let countPos = 0
  let sumNeg = 0

  input.forEach(e => e > 0 ? countPos++ : sumNeg += e)

  return [countPos, sumNeg]
}

//Create a function that squares the nums passed into it and sums the results
//My Solution
let squareSum = (arr) => arr.reduce((accumulator, current) => accumulator + Math.pow(current, 2), 0)

//Given numbers set them in ascending order and return them
//My solution
function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}