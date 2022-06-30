// My edabit name: DonDracula

// Algo to solve the total % landmass of a country given a name and area
function areaOfCountry(name, area) {
  let landmass = ((area / 148940000) * 100).toFixed(2) + '%';
  return `${name} is ${landmass} of the total world's landmass`;
}

console.log(
  areaOfCountry('USA', 9372610),
  "USA is 6.29% of the total world's landmass"
);
console.log(
  areaOfCountry('Russia', 17098242),
  "Russia is 11.48% of the total world's landmass"
);
///////////////////////////////
///////////////////////////////

// Algo to find the second largest number in an array
function secondLargest(arr) {
  return arr.sort((a, b) => b - a)[1];
}

console.log(secondLargest([10, 40, 30, 20, 50]), 40);
console.log(secondLargest([25, 143, 89, 13, 105]), 105);
///////////////////////////////
///////////////////////////////

// Algo to turn a string into hashtags of the three largest words
function getHashTags(str) {
  let newStr = str.replace(/[^a-zA-Z]/g, ' ');
  let strArr = newStr.toLowerCase().split(' ');
  strArr.sort((a, b) => b.length - a.length);
  strArr.splice(3);
  let hashes = strArr.map((word) => '#' + word);
  return hashes;
}

console.log(
  getHashTags('How the Avocado Became the Fruit of the Global Trade'),
  ['#avocado', '#became', '#global']
);
console.log(
  getHashTags(
    'Why You Will Probably Pay More for Your Christmas Tree This Year'
  ),
  ['#christmas', '#probably', '#will']
);
///////////////////////////////
///////////////////////////////

// This function will take a single word string of random consequtive letters and
// return an array with distance each letter is from a vowel with vowels being 0 distance.
// Start with replacing all vowels in the string with 0 using regex
// Split the string into an array. For each character in the array turn the zeros from a string "0"
// to a number 0 and push everything into the distance array.
// LOOPS //
// Double loop and check if the char/num in the array where [j] == 0 and the char/num where [i] != 0.
// If true run the tertiary operator checking if j-i>distArr[i]>0 and and break
// If false check the opposite where [i] == 0 and [j] != 0.
// If true distArr[j] = j-i
// If false continue
function distanceToNearestVowel(str) {
  let vowels = /[aeiou]/gi;
  let newStr = str.replace(vowels, 0);
  let zeroArr = newStr.split('');
  let distArr = [];
  zeroArr.forEach((char) => {
    if (char == 0) {
      char = Number(char);
    }
    distArr.push(char);
  });

  for (let i = 0; i < distArr.length - 1; i++) {
    for (let j = i + 1; j < distArr.length; j++) {
      if (distArr[j] == 0 && distArr[i] != 0) {
        distArr[i] = j - i > distArr[i] > 0 ? distArr[i] : j - i;
        break;
      } else if (distArr[j] != 0 && distArr[i] == 0) {
        distArr[j] = j - i;
      }
    }
  }
  return distArr;
}

console.log(distanceToNearestVowel('aaaaa'), [0, 0, 0, 0, 0]);
console.log(distanceToNearestVowel('bba'), [2, 1, 0]);
console.log(distanceToNearestVowel('abbb'), [0, 1, 2, 3]);
console.log(distanceToNearestVowel('abab'), [0, 1, 0, 1]);
console.log(distanceToNearestVowel('babbb'), [1, 0, 1, 2, 3]);
console.log(distanceToNearestVowel('baaab'), [1, 0, 0, 0, 1]);
console.log(distanceToNearestVowel('abcdabcd'), [0, 1, 2, 1, 0, 1, 2, 3]);
console.log(distanceToNearestVowel('abbaaaaba'), [0, 1, 1, 0, 0, 0, 0, 1, 0]);
console.log(
  distanceToNearestVowel('treesandflowers'),
  [2, 1, 0, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 2]
);
console.log(distanceToNearestVowel('pokerface'), [1, 0, 1, 0, 1, 1, 0, 1, 0]);
console.log(distanceToNearestVowel('beautiful'), [1, 0, 0, 0, 1, 0, 1, 0, 1]);
console.log(
  distanceToNearestVowel('rythmandblues'),
  [5, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 0, 1]
);
console.log(distanceToNearestVowel('shopper'), [2, 1, 0, 1, 1, 0, 1]);
console.log(
  distanceToNearestVowel('singingintherain'),
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1]
);
console.log(
  distanceToNearestVowel('sugarandspice'),
  [1, 0, 1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0]
);
console.log(distanceToNearestVowel('totally'), [1, 0, 1, 0, 1, 2, 3]);
///////////////////////////////
///////////////////////////////

// This function will take in an arr of numbers and a string
// The string will be one of three things: Asc (ascending), Des (descending), and None
// Return the array in the given order. None will not change the order in any way
function ascDesNone(arr, str) {
  return str == 'None'
    ? arr
    : str == 'Asc'
    ? arr.sort((a, b) => a - b)
    : arr.sort((a, b) => b - a);
}

console.log(ascDesNone([4, 3, 2, 1], 'Asc'), [1, 2, 3, 4]);
console.log(ascDesNone([7, 8, 11, 66], 'Des'), [66, 11, 8, 7]);
console.log(ascDesNone([1, 2, 3, 4], 'None'), [1, 2, 3, 4]);
console.log(ascDesNone([1, 0, 1, 0], 'Asc'), [0, 0, 1, 1]);
console.log(ascDesNone([1, 2, 2, 2, 2, 2, 2], 'Des'), [2, 2, 2, 2, 2, 2, 1]);
console.log(
  ascDesNone([9, 7, 43, 11, 16, 111, 19], 'Asc'),
  [7, 9, 11, 16, 19, 43, 111]
);
///////////////////////////////
///////////////////////////////

// This function will take in a 4 digit year and return how times Friday the 13th occurs in
// the given year
function howUnlucky(y) {
  let count = 0;
  for (let i = 0; i < 12; i++) {
    let year = new Date(y, i, 13);
    if (year.getDay() == 5) count++;
  }
  return count;
}

console.log(howUnlucky(2000), 1);
console.log(howUnlucky(2001), 2);
console.log(howUnlucky(2002), 2);
console.log(howUnlucky(2003), 1);
console.log(howUnlucky(2004), 2);
console.log(howUnlucky(2005), 1);
console.log(howUnlucky(2006), 2);
console.log(howUnlucky(2007), 2);
console.log(howUnlucky(2008), 1);
///////////////////////////////
///////////////////////////////

// This function will return the length of the array when str is split and filtered by myChar
function charCount(myChar, str) {
  // let count = 0;
  // str.split("").filter(letter => letter == myChar ? count++ : count);
  // return count;

  // Can be refactored to
  return str.split('').filter((char) => char === myChar).length;
}

console.log(charCount('a', 'edabit'), 1);
console.log(charCount('b', 'big fat bubble'), 4);
console.log(charCount('c', 'Chamber of secrets'), 1);
console.log(
  charCount('f', 'frank and his friends have offered five foxes for sale'),
  7
);
///////////////////////////////
///////////////////////////////

// Check if the number divided by 10 is greater than the remainder when divided by 10.
// Return the boolean value. In the case of two equal numbers it will still return true
// i.e. 99. 9.9 > 9, so true
function largestSwap(num) {
  // let reverseNum = Number(num.toString().split("").reverse().join(""));
  // return num > reverseNum ? true : num === reverseNum ? true : false;
  // simplified with this
  return num / 10 > num % 10;
}

console.log(largestSwap(27), false, '27 < 72, so not largest swap.');
console.log(largestSwap(43), true, '43 > 34, so largest swap.');
console.log(largestSwap(14), false, '14 < 41, so not largest swap.');
console.log(largestSwap(53), true, '53 > 35, so largest swap.');
console.log(largestSwap(99), true, 'Cannot do better, so largest swap.');
///////////////////////////////
///////////////////////////////

// Create a simple calculator that will take in two numbers and an operator
// Return the result of the calculation
function calculator(num1, operator, num2) {
  return operator == '/' && num2 == 0
    ? "Can't divide by 0!"
    : eval(num1 + operator + num2);
}

console.log(calculator(2, '/', 2), 1);
console.log(calculator(10, '-', 7), 3);
console.log(calculator(2, '*', 16), 32);
console.log(calculator(2, '-', 2), 0);
console.log(calculator(15, '+', 26), 41);
console.log(calculator(2, '+', 2), 4);
console.log(calculator(2, '/', 0), "Can't divide by 0!");
///////////////////////////////
///////////////////////////////

// Take in a letter and give the nearest vowel in the alphabet
// First check if the letter is a vowel and if so return that letter
// If not check the position of the letter in the alphabet and return a vowel
// based on the letters position in the alphabet
function nearestVowel(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let vowels = /[aeiou]/;
  if (vowels.test(s)) return s;
  if (2 >= alphabet.indexOf(s)) {
    return 'a';
  } else if (6 >= alphabet.indexOf(s)) {
    return 'e';
  } else if (11 >= alphabet.indexOf(s)) {
    return 'i';
  } else if (17 >= alphabet.indexOf(s)) {
    return 'o';
  } else return 'u';
}

console.log(nearestVowel('a'), 'a');
console.log(nearestVowel('b'), 'a');
console.log(nearestVowel('c'), 'a');
console.log(nearestVowel('d'), 'e');
console.log(nearestVowel('e'), 'e');
console.log(nearestVowel('f'), 'e');
console.log(nearestVowel('g'), 'e');
console.log(nearestVowel('h'), 'i');
console.log(nearestVowel('i'), 'i');
console.log(nearestVowel('j'), 'i');
console.log(nearestVowel('k'), 'i');
console.log(nearestVowel('l'), 'i');
console.log(nearestVowel('m'), 'o');
console.log(nearestVowel('n'), 'o');
console.log(nearestVowel('o'), 'o');
console.log(nearestVowel('p'), 'o');
console.log(nearestVowel('q'), 'o');
console.log(nearestVowel('r'), 'o');
console.log(nearestVowel('s'), 'u');
console.log(nearestVowel('t'), 'u');
console.log(nearestVowel('u'), 'u');
console.log(nearestVowel('v'), 'u');
console.log(nearestVowel('w'), 'u');
console.log(nearestVowel('x'), 'u');
console.log(nearestVowel('y'), 'u');
console.log(nearestVowel('z'), 'u');
///////////////////////////////
///////////////////////////////

function calculateScore(games) {
  let wins = [0, 0];
  games.forEach((game) => {
    if (game[0] === 'R' && game[1] !== 'R') {
      game[1] === 'S' ? wins[0]++ : wins[1]++;
    } else if (game[0] === 'P' && game[1] !== 'P') {
      game[1] === 'R' ? wins[0]++ : wins[1]++;
    } else if (game[0] === 'S' && game[1] !== 'S') {
      game[1] === 'P' ? wins[0]++ : wins[1]++;
    }
  });

  return wins[0] > wins[1] ? 'Abigail' : wins[0] < wins[1] ? 'Benson' : 'Tie';
}

console.log(
  calculateScore([
    ['R', 'P'],
    ['R', 'S'],
    ['S', 'P'],
  ]),
  'Abigail'
);
console.log(
  calculateScore([
    ['R', 'R'],
    ['S', 'S'],
  ]),
  'Tie'
);
console.log(
  calculateScore([
    ['S', 'R'],
    ['R', 'S'],
    ['R', 'R'],
  ]),
  'Tie'
);
console.log(
  calculateScore([
    ['S', 'R'],
    ['P', 'R'],
  ]),
  'Tie'
);
console.log(
  calculateScore([
    ['S', 'S'],
    ['S', 'P'],
    ['R', 'S'],
    ['S', 'R'],
    ['R', 'R'],
  ]),
  'Abigail'
);
console.log(
  calculateScore([
    ['S', 'R'],
    ['S', 'R'],
    ['S', 'R'],
    ['R', 'S'],
    ['R', 'S'],
  ]),
  'Benson'
);
///////////////////////////////
///////////////////////////////

// This function will take an array of digits representing how many numbers are present at that
// index from 0-9. These will be compared to an arr to see if the arr has the alloted amount of
// digits. i.e. digits = [0, 1, 2, 2, 3, ...] will have zero 0's, one 1, two 2's, two 3's,
// three 4's, etc.
function canBuild(digits, arr) {
  if (arr.length === 0) return true;
  arr = arr.join('').split('');
  let boolArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let numL = arr.filter((num) => num == i).length;
    boolArr.push(numL <= digits[i]);
  }
  return boolArr.every((val) => val == true);
}

console.log(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], []), true);
console.log(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 8]), true);
console.log(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 80]), true);
console.log(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92]), true);
console.log(canBuild([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 23, 45, 6789]), true);
console.log(
  canBuild([0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 2, 22, 49, 444, 4]),
  true
);
console.log(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 80, 0]), false);
///////////////////////////////
///////////////////////////////

// This class will take in a number and see how many times one, three and nine can fit into the number.
class OnesThreesNines {
  constructor(num) {
    this.num = num;
  }

  get ones() {
    return Math.floor(this.num / 1);
  }

  get threes() {
    return Math.floor(this.num / 3);
  }

  get nines() {
    return Math.floor(this.num / 9);
  }
}
///////////////////////////////
///////////////////////////////

// This function will see how many moves it will take to solve the Tower of Hanoi based
// on the amount of discs.
function towerHanoi(discs) {
  return Math.pow(2, discs) - 1;
}
///////////////////////////////
///////////////////////////////

// This function will take an array of integers and check if it has any boomerangs
// Example: [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2] has the boomerangs
// [3, 7, 3], [1, 5, 1], [2, -2, 2]
function countBoomerangs(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1] && arr[i] === arr[i + 2]) {
      count++;
    }
  }

  return count;
}
///////////////////////////////
///////////////////////////////

// Hold Your Breath!, Published by Werdna
// This function takes a person on a dangerous walk.
// The given arr contains integers that can be negative, 0, or positive.
// The numbers represent the altitude, with 0+ being 'above water.'
// The walker starts with 10 breath (or health) which is also the maximum allowed.
// If they go 'under water' they lose two health. Going above will give back four health.
// Once health reaches zero the walker dies.
// Return whether or not the walker survives.
function divingMinigame(arr) {
  let breath = 10;

  arr.forEach((num) => {
    if (breath > 10) breath = 10;
    if (breath <= 0) return false;

    if (num >= 0) {
      breath = breath + 4;
    } else if (num < 0) {
      breath = breath - 2;
    }
  });

  return breath > 0;
}
///////////////////////////////
///////////////////////////////

// Oddish vs. Evenish, Published by Helen Yu
// This function will return a string based on whether the sum of each number in num is odd or even.
function oddishOrEvenish(num) {
  let stringArr = num.toString().split('');
  let numArr = Array.from(stringArr, Number);
  let numSum = (accumulator, currentValue) => accumulator + currentValue;
  let sum = numArr.reduce(numSum);
  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}
// A more clever function by K750i
function oddishOrEvenish(num) {
  return [...String(num)].map(Number).reduce((a, v) => a + v) % 2
    ? 'Oddish'
    : 'Evenish';
}
///////////////////////////////
///////////////////////////////

// How Many Days Between Two Dates, Published by Alon
// This function will take in two new Dates and return the amount of days between
// the two dates.
const getDays = (d1, d2) =>
  Math.round(Math.abs((d1 - d2) / (24 * 60 * 60 * 1000)));
///////////////////////////////
///////////////////////////////

// Converting Objects to Arrays, Published by Matt
// This function takes an object and converts it to a nested array.
// Each nested array will hold one key-value pair
function toArray(obj) {
  let arr = [];
  for (const [key, value] of Object.entries(obj)) {
    arr.push([key, value]);
    console.log(arr);
  }
  return arr;
}
// A more clever function by Aditya Tripathi
function toArray(obj) {
  return Object.entries(obj);
}
///////////////////////////////
///////////////////////////////

// Concatenate Variable Number of Input Arrays, Published by Helen Yu
// This function will take in n amount of arguments that are each an array.
// The point is to concat those into one single array.
const concat = (...args) => [...args].flat();
// Can also be solved with this
const concat = (...args) => args.flat();
///////////////////////////////
///////////////////////////////

// Length of a Nested Array, Published by Helen Yu
// This function will find how many items exist in a nested array
// The array can be infinitely nested
const getLength = (arr) => arr.flat(Infinity).length;
///////////////////////////////
///////////////////////////////

// Track the Robot (Part 2), Published by Jon Ingram
// See where a robot will be at the end of their path.
// Start at 0,0 on a 2D grid
// The first number in [...steps] will always take the robot North
// After each move the robot turns 90 degrees clockwise
// Return the robots final position on the grid
function trackRobot(...steps) {
  let stepArr = [...steps];
  let dest = [0, 0];

  let eastWest = [];
  for (var i = 1; i < stepArr.length; i = i + 2) {
    eastWest.push(stepArr[i]);
  }

  var northSouth = [];
  for (var i = 0; i < stepArr.length; i = i + 2) {
    northSouth.push(stepArr[i]);
  }

  eastWest.forEach((num, i) => {
    i % 2 === 0 ? (dest[0] += num) : (dest[0] -= num);
  });

  northSouth.forEach((num, i) => {
    i % 2 === 0 ? (dest[1] += num) : (dest[1] -= num);
  });

  return dest;
}
// A more clever function by soilblue
function trackRobot(...steps) {
  var r = [0, 0];
  for (var i in steps) {
    var d = i % 4;
    if (d == 0) r[1] += steps[i];
    if (d == 1) r[0] += steps[i];
    if (d == 2) r[1] -= steps[i];
    if (d == 3) r[0] -= steps[i];
  }
  return r;
}
// Another by Thijs Vogelsang
function trackRobot(...steps) {
  return steps.reduce(
    (a, c, i) => {
      a[(i + 1) % 2] += i % 4 > 1 ? -c : c;
      return a;
    },
    [0, 0]
  );
}
///////////////////////////////
///////////////////////////////

// Triangular Number Sequence, Published by Matt
function triangle(n) {
  let arr = Array.from(Array(n), (x, index) => index + 1);
  return arr.reduce((a, b) => a + b, 0);
}

// A more clever solution by er0s
// This solution is from the formula xn = n(n+1)/2;
// xn means 'dots in triangle n'
const triangle = (n) => (n * (n + 1)) / 2;
///////////////////////////////
///////////////////////////////

// Check If the Brick Fits through the Hole, Published by Matt
// given a 3D brick (a,b,c) check to see if it will fit through a 2D hole (w,h)
// the brick can be rotated
const doesBrickFit = (a, b, c, w, h) =>
  a * b <= w * h || a * c <= w * h || b * c <= w * h;
///////////////////////////////
///////////////////////////////

// RegExp: Validate Pin, Published by Factor
const myRegExp = new RegExp(/^(\d{4}|\d{6})$/);
///////////////////////////////
///////////////////////////////

// Function Factory, Published by mbbentley
function makePlusFunction(baseNum) {
  return function addBase(num) {
    return num + baseNum;
  };
}
// A more clever solution by Pustur
const makePlusFunction = (baseNum) => (num) => baseNum + num;
///////////////////////////////
///////////////////////////////

// Integer in Range?, Published by Matt
function intWithinBounds(n, lower, upper) {
  return Number.isInteger(n) && n >= lower && n < upper;
}
///////////////////////////////
///////////////////////////////

// Is the Number a Repdigit, Published by Eduard Diakunenko
function isRepdigit(num) {
  let numSplit = num.toString().split('');
  return num >= 0 && numSplit.every((num) => num === numSplit[0]);
}
// Eduard's answer
function isRepdigit(num) {
  return new Set('' + num).size === 1;
}
// A similar function by er0s
const isRepdigit = (n) => new Set(`${n}`).size === 1;
///////////////////////////////
///////////////////////////////

// LCM of Two Numbers, Published by Helen Yu
function lcm(n1, n2) {
  let max = Math.max(n1, n2);
  let min = Math.min(n1, n2);
  for (let i = 1; i < max; i++) {
    if ((max * i) % min === 0) {
      return max * i;
    }
  }
}
///////////////////////////////
///////////////////////////////

// Array of Multiples, Published by Raka Raka
function arrayOfMultiples(num, length) {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(num * i);
  }
  return arr;
}
// A more clever solution by Pustur
const arrayOfMultiples = (num, length) =>
  Array.from({ length }, (_, i) => num * (i + 1));
///////////////////////////////
///////////////////////////////

// Guess the Sequence, Published by Mubashir Hassan
const guessSequence = (n) => 30 * n ** 2 + 60 * n;
// Publishers solution
function guessSequence(n) {
  return n * (n + 2) * 30;
}
///////////////////////////////
///////////////////////////////

// Integer Digits Count, Published by Deep Xavier
function count(n) {
  return Math.floor(Math.log10(Math.abs(n + 1)) + 1);
}
// Publishers solution
const count = (n) => (n == 0 ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1);
///////////////////////////////
///////////////////////////////

// Square Every Digit, Published by Enkuryo
function squareDigits(n) {
  return Number(
    n
      .toString()
      .split('')
      .map(Number)
      .map((num) => num ** 2)
      .join('')
  );
}
// Publishers solution
function squareDigits(n) {
  return +[...String(n)].map((x) => x * x).join('');
}
///////////////////////////////
///////////////////////////////

// Travelling Salesman Problem, Published by jordan sumitomo
function paths(n) {
  if (n === 0 || n === 1) return 1;
  for (var i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}
// A more clever solution by Euphonic Sounds
const paths = (n) => !n || n * paths(--n);
///////////////////////////////
///////////////////////////////

// Sorting Time, Published by Mubashir Hassan
// The point of the challenge was to sort an array of integers without using built in methods
function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// A more clever solution by Data Case
function sortArray(a) {
  let r = [];
  while (a.length > 0) {
    r.push(a.splice(a.indexOf(Math.min(...a)), 1));
  }
  return r.flat();
}
///////////////////////////////
///////////////////////////////

// Numbers in Strings, Published by Alex Nemechek
// The goal of this challenge is to return any element from an array that has numbers in the string
// Bonus: Try solving this without regex
// (["this is a test", "test1"]) ➞ ["test1"]
// (["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
function numInStr(arr) {
  return arr.filter((word) => {
    return word.split('').some((y) => Number.isInteger(Number(y)) && y != 0);
  });
}
// Solution using regex by soilblue
function numInStr(arr) {
  return arr.filter((x) => /\d/.test(x));
}
///////////////////////////////
///////////////////////////////

// Function Times 3, Published by BijogFc24
// This function uses currying and is called with this syntax:
// product(1,2)(1,1)(2,3);
const product = (a, b) => (m, n) => (x, y) => a * m * x + b * n * y;
///////////////////////////////
///////////////////////////////

// Find Value in a Binary Tree, Published by BijogFc24
const valueInTree = (tree, val) => tree.flat(Infinity).includes(val);
///////////////////////////////
///////////////////////////////

// RegEx: Character Classes X - \W, Published by Isaac Pak
// This regex will find all of the <div> tags in a string. Not the </div> end tags though.
// Must include \W
const REGEXP = /[^\/]div[\W]/g;
///////////////////////////////
///////////////////////////////

// Bitwise Operator to Check Odd, Regular Expression to Check Even, Published by BijogFc24
// Use Bitwise Operator (% operator disallowed)
function isOdd(number) {
  return number & 1 ? 'Yes' : 'No';
}
// Use Regular Expression (% operator disallowed)
function isEven(number) {
  return number.match(/(2|4|6|8|0)$/) ? 'Yes' : 'No';
}
///////////////////////////////
///////////////////////////////

// Combinations, Published by Matt
// H
const combinations = (...items) =>
  items.filter((n) => n !== 0).reduce((a, c) => a * c);
///////////////////////////////
///////////////////////////////

// Data Structures (1): Find Max of Sliding Window, Published by benmcl@shaw.ca
// VH
function windowMaxes(array, windowLength) {
  let newArr = [];

  for (let i = 0; i < array.length - windowLength + 1; i++) {
    newArr.push(Math.max(...array.slice(i, i + windowLength)));
  }

  return newArr;
}
///////////////////////////////
///////////////////////////////

// Persistence, Published by Matt
// VH
function additivePersistence(n) {
  let arr = n.toString().split('');
  let count = 0;

  while (arr.length !== 1) {
    arr = arr
      .map((n) => Number(n))
      .reduce((a, b) => a + b)
      .toString()
      .split('');
    count++;
  }

  return count;
}

function multiplicativePersistence(n) {
  let arr = n.toString().split('');
  let count = 0;

  while (arr.length !== 1) {
    arr = arr
      .map((n) => Number(n))
      .reduce((a, b) => a * b)
      .toString()
      .split('');
    count++;
  }

  return count;
}
// A more clever solution by Ruud Peter Boelens
// The test cases never had negative values, but this solution accounts for negatives as well.
function additivePersistence(n) {
  let count = 0;
  while (String(n).length > 1) {
    n = [...String(n)].reduce((a, b) => +a + +b);
    count++;
  }
  return count;
}
///////////////////////////////
///////////////////////////////

// Balanced Words, Published by Matt
// VH
function balanced(word) {
  let arr = [...word];
  arr.forEach((a, i) => {
    arr[i] = word.charCodeAt(i) - 96;
  });
  if (word.length % 2 !== 0) {
    arr.splice(Math.floor(word.length / 2), 1);
  }
  let firstHalf = arr.slice(0, arr.length / 2).reduce((a, b) => a + b);
  let secondHalf = arr
    .slice(arr.length / 2, arr.length)
    .reduce((a, b) => a + b);

  return firstHalf === secondHalf;
}
///////////////////////////////
///////////////////////////////

// Happy Numbers, Published by Jon Ingram
// VH
function happy(n) {
  let seq = [...n.toString()]
    .map((a) => Number(a) ** 2)
    .reduce((a, b) => a + b);
  while (seq != 1 && seq != 4) {
    seq = [...seq.toString()]
      .map((a) => Number(a) ** 2)
      .reduce((a, b) => a + b);
  }
  return seq === 1;
}
///////////////////////////////
///////////////////////////////

// Lemonade Stand, Published by BijogFc24
/*
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, 
and order one at a time (in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide 
the correct change to each customer so that the net transaction is that the customer pays $5.

Return true if and only if you can provide every customer with correct change.
Examples:
	lemonade([5, 5, 5, 10, 20]) ➞ true
	lemonade([5, 5, 10, 10, 20]) ➞ false
*/
// VH
function lemonade(bills) {
  let bank = [0, 0, 0];
  let open = true;
  bills.forEach((bill) => {
    switch (bill) {
      case 5:
        bank[0]++;
        break;
      case 10:
        bank[0] > 0 ? bank[0]-- && bank[1]++ : (open = false);
        break;
      case 20:
        bank[0] > 0 && bank[1] > 0
          ? bank[0]-- && bank[1]-- && bank[2]++
          : bank[0] > 2
          ? (bank[0] = bank[0] - 3 && bank[2]++)
          : (open = false);
        break;
    }
  });
  return open;
}
///////////////////////////////
///////////////////////////////

// Can You Make the Numbers? Published by Helen Yu
// VH
/* 
You are given an array representing the number of 0s, 1s, 2s, ..., 9s you have. The function will look like:

	can_build([#0s, #1s, #2s, ..., #9s], [num1, num2, ...])

Write a function that returns true if you can build the following numbers using only the digits you have.
*/
function canBuild(digits, arr) {
  if (arr.length === 0) return true;
  let hasDigits = true;
  for (const num of arr) {
    if (!hasDigits) break;
    if (num.toString().length > 1) {
      let numArr = [...num.toString()].map((x) => Number(x));
      numArr.forEach((n) => {
        digits[n] > 0 ? digits[n]-- : (hasDigits = false);
      });
    } else {
      digits[num] > 0 ? digits[num]-- : (hasDigits = false);
    }
  }
  return hasDigits;
}
// Here is some code I wrote before submit
// I wanted it to be a little faster, so that is where the for...of loop comes in
// The code below is similar in structure, but fails all of the falsey tests
// I learned that there is no proper way to break a forEach loop, and that forEach is not
// the best tool for loop breaking behavior.

// function canBuild(digits, arr) {
// 	if (arr.length === 0) return true;
// 	let hasDigits = true;

// 	arr.forEach(num => {
// 		if (num.toString().length > 1) {
// 			let numArr = [...num.toString()].map(x => Number(x));
// 			numArr.forEach(n => {
// 				digits[n] > 0 ? digits[n]-- : hasDigits = false;
// 			})
// 		} else {
// 			digits[num] > 0 ? digits[num]-- : hasDigits = false;
// 		}
// 		if (!hasDigits) return false;
// 	})

// 	return true;
// }

// A more clever solution by mbbentley
// This solution will create a new array similar to digits and
// fill it with all of the numbers from arr
// It then iterates over every number in the new array to make sure its
// value is less than or equal to the value in the digits array
function canBuild(digits, arr) {
  let f = [...Array(10)].fill(0);
  [...arr.join('')].forEach((v) => f[v]++);
  return f.every((v, i) => v <= digits[i]);
}
///////////////////////////////
///////////////////////////////

// Amount of Possible Combinations, Published by Matt
// VH
function combinations(k, n) {
  let nFac = 1;
  let kFac = 1;
  let x = n;
  let y = k;
  while (x > n - k) {
    nFac *= x;
    x--;
  }
  while (y > 0) {
    kFac *= y;
    y--;
  }
  return Math.round(nFac / kFac);
}
///////////////////////////////
///////////////////////////////

// Does the Triangle Fit into the Triangular Hole? Published by Matt
// VH
function doesTriangleFit(brick, hole) {
  let brickMaxIdx = brick.indexOf(Math.max(...brick));
  let brickMax = brick.splice(brickMaxIdx, 1);
  let isBrickTriangle = brick.reduce((a, b) => a + b) > brickMax;

  let holeMaxIdx = hole.indexOf(Math.max(...hole));
  let holeMax = hole.splice(holeMaxIdx, 1);
  let isHoleTriangle = hole.reduce((a, b) => a + b) > holeMax;

  if (isBrickTriangle && isHoleTriangle) {
    let b = brick.reduce((a, b) => a + b) + brickMax;
    let h = hole.reduce((a, b) => a + b) + holeMax;
    let bA = Math.sqrt(b * (b - brick[0]) * (b - brick[1]) * (b - brickMax));
    let hA = Math.sqrt(h * (h - hole[0]) * (h - hole[1]) * (h - holeMax));
    return bA <= hA;
  } else {
    return false;
  }
}
// A more clever solution by Pustur
const asc = (a, b) => a - b;

const doesTriangleFit = (triangle, hole) => {
  triangle.sort(asc);
  hole.sort(asc);

  return (
    triangle[0] + triangle[1] > triangle[2] &&
    hole[0] + hole[1] > hole[2] &&
    [0, 1, 2].every((i) => triangle[i] <= hole[i])
  );
};
///////////////////////////////
///////////////////////////////

// Maximize the First Number, Published by Helen Yu
// VH
function maxPossible(n1, n2) {
  let n1Arr = n1
    .toString()
    .split('')
    .map((n) => Number(n));
  let n2Arr = n2
    .toString()
    .split('')
    .map((n) => Number(n))
    .sort((a, b) => b - a);
  n1Arr.forEach((num, i) => {
    if (num < n2Arr[0]) {
      n1Arr[i] = n2Arr[0];
      n2Arr.shift();
    }
  });
  o;
  return Number(n1Arr.join(''));
}
///////////////////////////////
///////////////////////////////

// The Frugal Gentleman, Published by Helen Yu
// H
function chosenWine(wines) {
  return wines.length === 0
    ? null
    : wines.length === 1
    ? wines[0].name
    : wines.sort((a, b) => a.price - b.price)[1].name;
}
///////////////////////////////
///////////////////////////////

// Burglary Series (12): Get Vodka Bottle, Published by Miguel Carvalho
// H
function getVodkaBottle(obj, num) {
  return Object.entries(obj)
    .filter((a) => a[0].indexOf('Rammstein') !== -1)
    .find((b) => b[1] === num)[0];
}
///////////////////////////////
///////////////////////////////

// The Actual Memory Size of your USB Flash Drive, Published by Mubashir Hassan
// VH
function actualMemorySize(ms) {
  let actualStorage;
  if (/GB/.test(ms)) {
    actualStorage = parseInt(ms) * 930;
  } else {
    actualStorage = Math.floor(parseInt(ms) * 0.93);
  }

  if (actualStorage > 1000) {
    return (actualStorage / 1000).toFixed(2).toString() + 'GB';
  } else {
    return actualStorage.toString() + 'MB';
  }
}
///////////////////////////////
///////////////////////////////

// Return the Sum of Two Numbers (With a Twist), Published by Mubashir Hassan
// VH
// The point of this challenge was to add two numbers like we did on paper in elementary school
// without using any built in math functions
function sum2(a, b) {
  let remainder = 0;
  let totalSum = [];
  let aArr = a.split('');
  let bArr = b.split('');

  while (aArr.length > bArr.length) {
    bArr.unshift('0');
  }
  while (bArr.length > aArr.length) {
    aArr.unshift('0');
  }

  for (let i = aArr.length - 1; i > -1; i--) {
    let sum = Number(aArr[i]) + Number(bArr[i]) + remainder;

    if (sum > 9) {
      remainder = Number(sum.toString().split('')[0]);
      totalSum.unshift(sum.toString().split('')[1]);
    } else {
      remainder = 0;
      totalSum.unshift(sum.toString());
    }
  }

  if (remainder > 0) totalSum.unshift(remainder.toString());

  return totalSum.join('');
}
///////////////////////////////
///////////////////////////////

// Product of Digits of Sum, Published by Ruud Peter Boelens
// VH
function sumDigProd(...nums) {
  let num = nums.reduce((a, b) => a + b);

  while (num.toString().length > 1) {
    num = Number(
      num
        .toString()
        .split('')
        .reduce((a, b) => a * b)
    );
  }

  return num;
}
///////////////////////////////
///////////////////////////////

// Emphasise the Words, Published by Andrew Knapp
// M
function emphasise(str) {
  if (str.length === 0) return '';
  let answer = [];
  let arr = str
    .toLowerCase()
    .split(' ')
    .forEach((word) => {
      let wordArr = word.split('');
      if (isNaN(wordArr[0])) {
        wordArr[0] = wordArr[0].toUpperCase();
      }
      answer.push(wordArr.join(''));
    });
  return answer.join(' ');
}
///////////////////////////////
///////////////////////////////

// New Numbers, Published by Matt
// VH
function isNew(n) {
  let nArr = n
    .toString()
    .split('')
    .map((num) => Number(num));
  let nLen = nArr.length;
  if (nLen === 1) return true;
  let minN = Math.min(...nArr.filter((number) => number != 0));
  if (nLen === 2 && nArr[0] < nArr[1]) {
    return true;
  } else if (nLen === 2 && nArr[1] === 0) {
    return true;
  } else if (nLen > 2 && nArr[0] === minN) {
    nArr.shift();
    let arr = [...nArr];
    arr.sort((a, b) => a - b);
    return nArr.every((number, i) => {
      return number === arr[i];
    });
  }
  return false;
}
///////////////////////////////
///////////////////////////////

// Vending Machine, Published by Pustur
// VH
function vendingMachine(products, money, productNumber) {
  let validChange = [500, 200, 100, 50, 20, 10];
  let productIndex = products.findIndex(
    (product) => product.number == productNumber
  );
  let change = [];
  if (productIndex === -1) return 'Enter a valid product number';
  if (money < products[productIndex].price)
    return 'Not enough money for this product';
  let difference = money - products[productIndex].price;
  while (difference > 0) {
    let c = validChange.find((value) => value <= difference);
    change.push(c);
    difference -= c;
  }
  return {
    product: `${products[productIndex].name}`,
    change,
  };
}
///////////////////////////////
///////////////////////////////

// Dance for Cash, Published by Zero_man
// H
const MOVES = [
  'Shimmy',
  'Shake',
  'Pirouette',
  'Slide',
  'Box Step',
  'Headspin',
  'Dosado',
  'Pop',
  'Lock',
  'Arabesque',
];

function danceConvert(pin) {
  let danceMoves = [];
  let pinNum = pin.split('').map((x) => Number(x));
  if (pinNum.length < 4) return 'Invalid input.';

  let movesArr = [...MOVES];
  for (const num of pinNum) {
    if (!isNaN(num)) {
      danceMoves.push(movesArr[num]);
      let firstWord = movesArr.shift();
      movesArr.push(firstWord);
    } else {
      danceMoves = 'Invalid input.';
      break;
    }
  }

  return danceMoves;
}
///////////////////////////////
///////////////////////////////

// The Fiscal Code, Published by er0s
// Expert
const months = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'H',
  7: 'L',
  8: 'M',
  9: 'P',
  10: 'R',
  11: 'S',
  12: 'T',
};

function fiscalCode(person) {
  let code = [];
  let vowels = /[aeiou]/gi;
  let consonants = /[^aeiou]/gi;
  let fullDate = person.dob.replace(/(^|\D)(\d)(?!\d)/g, '$10$2');

  let surname = person.surname.toUpperCase();
  let surnameConsonants = surname.match(consonants);
  let surnameVowels = surname.match(vowels);
  if (surnameConsonants.length === 2) {
    code.push(surnameConsonants[0], surnameConsonants[1], surnameVowels[0]);
  } else if (surnameConsonants.length >= 3) {
    code.push(surnameConsonants[0], surnameConsonants[1], surnameConsonants[2]);
  } else if (surnameConsonants.length === 1 && surnameVowels.length > 1) {
    code.push(surnameConsonants[0], surnameVowels[0], surnameVowels[1]);
  } else {
    code.push(surnameConsonants[0], surnameVowels[0], 'X');
  }

  let name = person.name.toUpperCase();
  let nameConsonants = name.match(consonants);
  let nameVowels = name.match(vowels);
  if (nameConsonants.length === 2) {
    code.push(nameConsonants[0], nameConsonants[1], nameVowels[0]);
  } else if (nameConsonants.length === 3) {
    code.push(...nameConsonants);
  } else if (nameConsonants.length > 3) {
    code.push(nameConsonants[0], nameConsonants[2], nameConsonants[3]);
  } else if (nameConsonants.length === 1 && nameVowels.length > 1) {
    code.push(nameConsonants[0], nameVowels[0], nameVowels[1]);
  } else {
    code.push(nameConsonants[0], nameVowels[0], 'X');
  }

  let birthYear = fullDate.slice(-2);
  code.push(birthYear);

  let birthMonth = fullDate.slice(3, 5);
  let birthMonthIndex = Number(birthMonth) - 1;
  let birthMonthLetter = Object.values(months)[birthMonthIndex];
  code.push(birthMonthLetter);

  let birthDay = fullDate.slice(0, 2);
  if (person.gender === 'F') birthDay = Number(birthDay) + 40;
  code.push(birthDay);

  return code.join('');
}
///////////////////////////////
///////////////////////////////

// Positive Dominant, Published by Helen Yu
// Hard
function isPositiveDominant(a) {
  let count = 0;
  let uniqueArr = Array.from(new Set(a));
  uniqueArr.forEach((num) => {
    count += Math.sign(num);
  });
  return count > 0;
}
///////////////////////////////
///////////////////////////////

// Up the Hill, Down the Hill, Published by Isaac Pak
// Hard
function aveSpd(upTime, upSpd, downSpd) {
  return (2 * upSpd * downSpd) / (upSpd + downSpd);
}
///////////////////////////////
///////////////////////////////

// Switching Between Pencils, Published by Matt
// Hard
function colorPatternTimes(cols) {
  let count = 0;
  cols.forEach((col, i) => {
    count += 2;
    if (col !== cols[i - 1] && i !== 0) {
      count++;
    }
  });
  return count;
}
///////////////////////////////
///////////////////////////////

// The Antipodes Average, Published by er0s
// Hard
function antipodesAverage(arr) {
  let arr1;
  let arr2;
  let finalArr = [];
  if (arr.length % 2 === 0) {
    arr1 = arr.slice(0, arr.length / 2);
    arr2 = arr.slice(arr.length / 2).reverse();
  } else {
    arr1 = arr.slice(0, Math.floor(arr.length / 2));
    arr2 = arr.slice(Math.ceil(arr.length / 2)).reverse();
  }
  arr1.forEach((num, i) => {
    finalArr.push((arr1[i] + arr2[i]) / 2);
  });
  return finalArr;
}
///////////////////////////////
///////////////////////////////

// Disarium Number, Published by Deep Xavier
// Hard
function isDisarium(n) {
  let nums = n.toString().split('');
  let answer = 0;
  nums.map((num, i) => {
    answer += num ** (i + 1);
  });
  return answer === n;
}
///////////////////////////////
///////////////////////////////

// Return the Most Expensive Piece of Jewellery, Published by Jenny Fieldings
// Hard
function mostExpensive(obj) {
  const items = Object.keys(obj);
  const values = Object.values(obj);
  const mostExpensivePrice = Math.max(...values);
  const mostExpensiveItem = values.indexOf(mostExpensivePrice);

  return `The most expensive one is the ${items[mostExpensiveItem]}`;
}
///////////////////////////////
///////////////////////////////

/////////////////////////
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sortedA = A.sort((a, b) => a - b);
  let uniqueA = [];
  sortedA.forEach((num) => {
    if (uniqueA.indexOf(num === -1)) {
      uniqueA.push(num);
    }
  });
  console.log(uniqueA);
}

solution(1, 3, 6, 4, 1, 2);
///////////////////////////////
///////////////////////////////

///////////// TODAYS ALGOS ///////////// TODAYS ALGOS ///////////// TODAYS ALGOS /////////////

// Double Character Swap, Published by Helen Yu
// Hard
function doubleSwap(str, c1, c2) {
  return str
    .split('')
    .map((a) => {
      return a === c1 ? (a = c2) : a === c2 ? (a = c1) : a;
    })
    .join('');
}
///////////////////////////////
///////////////////////////////
