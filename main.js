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

//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?. Create a function if given population, percent increase, movers in and target pop that will show number of years taken

//My Solution
function nbYear(p0, percent, aug, p) {
  //Create a years counter outside the loop
  let n = 0
  //Turn percent into a value you can work with 
  percent = percent / 100

  //Loop while less than given targer population
  while (p > p0) {
    //Make p0 = the latest incremental increase but ensure to Math.floor - no fractions of people
    p0 = Math.floor(p0 * (1 + percent) + aug)
    //Add another year to the counter each time
    n += 1
  }
  //Return number of years
  return n
}


//Given a string return that string with the first letter of all words capitalised

//My solution
// .split("") gives me an array of the words, map creates an array based on the function being applied to each element of the array, using .slice(1) sticks the rest of the word onto the end of the capital letter each Time, .join(" ") brings it all back together with spaces between the words committed to the new array by .map()
String.prototype.toJadenCase = function () {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
}

// Given an array of integers in string and number typeof, return only the number type elements of the array

//My solution
function filter_list(l) {
  return l.filter(e => typeof e === "number")
}