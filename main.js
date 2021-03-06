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


// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.No floats or non - positive integers will be passed. I decided to allow for negative numbers by filtering them out
function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.filter(e => e >= 0)
  arr = arr.sort((a, b) => a - b)

  return arr[0] + arr[1]
}


//Given a set of arrays in the format [got on, got off] calculate how many people on the bus when the last stop is reached

//My Solution
var number = function (busStops) {
  //set counter
  let peopleOnBus = 0
  //iterate through all elements of the arrya
  busStops.forEach(e => {
    //people onboard = already on + e[0](got on)- e[1](got off)
    peopleOnBus = peopleOnBus + e[0] - e[1]
  })
  //return peopleOnBus
  return peopleOnBus
}

//Replace numbers in a string < 5 to 0 and >5 to 1

//My solution
function fakeBin(str) {
  return str.split('').map(e => e < 5 ? 0 : 1).join('');
}


//Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo!
//My Solution
function areYouPlayingBanjo(name) {
  return name.charAt(0) === "r" || name.charAt(0) === "R" ? `${name} plays banjo` : `${name} does not play banjo`;
}

//Check to see if a string has the same amount of 'x's and 'o's.The method must return a boolean and be case insensitive.The string can contain any char.
//My solution
function XO(str) {
  //set counters
  let xCount = 0
  let oCount = 0
  //convert to lower case
  str = str.toLowerCase()
  //split into an array for count
  let list = str.split("")
  //Count occurrence of each
  list.forEach(e => {
    if (e === "x") {
      xCount += 1
    } else if (e === "o")
      oCount += 1
  })
  //return required response
  return (oCount === xCount ? true : false)
}