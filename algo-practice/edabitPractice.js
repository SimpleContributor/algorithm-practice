// Algo to solve the total % landmass of a country given a name and area
function areaOfCountry(name, area) {
	let landmass = (area/148940000*100).toFixed(2) + "%";
	return `${name} is ${landmass} of the total world's landmass`
}

console.log(areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass");
console.log(areaOfCountry("Russia", 17098242), "Russia is 11.48% of the total world's landmass");
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
	let newStr = str.replace(/[^a-zA-Z]/g, " ")
	let strArr = newStr.toLowerCase().split(" ");
	strArr.sort((a, b) => b.length - a.length);
	strArr.splice(3);
	let hashes = strArr.map(word => "#" + word)
	return hashes
}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"), ["#avocado", "#became", "#global"])
console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"), ["#christmas", "#probably", "#will"])
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
	let zeroArr = newStr.split("");
	let distArr = [];
	zeroArr.forEach(char => {
		if (char == 0) {
			char = Number(char);
		}
		distArr.push(char);
	})
	
	for (let i = 0; i < distArr.length - 1; i++) {
		for (let j = i + 1; j < distArr.length; j++) {
			if (distArr[j] == 0 && distArr[i] != 0) {
				distArr[i] = j-i > distArr[i] > 0 ? distArr[i] : j-i;
				break;
			} else if (distArr[j] != 0 && distArr[i] == 0) {
				distArr[j] = j - i;
			}
		}
	}
	return distArr;
}

console.log(distanceToNearestVowel("aaaaa"), [0, 0, 0, 0, 0])
console.log(distanceToNearestVowel("bba"), [2, 1, 0])
console.log(distanceToNearestVowel("abbb"), [0, 1, 2, 3])
console.log(distanceToNearestVowel("abab"), [0, 1, 0, 1])
console.log(distanceToNearestVowel("babbb"), [1, 0, 1, 2, 3]);
console.log(distanceToNearestVowel("baaab"), [1, 0, 0, 0, 1])
console.log(distanceToNearestVowel("abcdabcd"), [0, 1, 2, 1, 0, 1, 2, 3])
console.log(distanceToNearestVowel("abbaaaaba"), [0, 1, 1, 0, 0, 0, 0, 1, 0])
console.log(distanceToNearestVowel("treesandflowers"), [2, 1, 0, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 2])
console.log(distanceToNearestVowel("pokerface"), [1, 0, 1, 0, 1, 1, 0, 1, 0])
console.log(distanceToNearestVowel("beautiful"), [1, 0, 0, 0, 1, 0, 1, 0, 1])
console.log(distanceToNearestVowel("rythmandblues"), [5, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 0, 1])
console.log(distanceToNearestVowel("shopper"), [2, 1, 0, 1, 1, 0, 1])
console.log(distanceToNearestVowel("singingintherain"), [1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1])
console.log(distanceToNearestVowel("sugarandspice"), [1, 0, 1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0])
console.log(distanceToNearestVowel("totally"), [1, 0, 1, 0, 1, 2, 3])
///////////////////////////////
///////////////////////////////


// This function will take in an arr of numbers and a string 
// The string will be one of three things: Asc (ascending), Des (descending), and None
// Return the array in the given order. None will not change the order in any way
function ascDesNone(arr, str) {
	return str == "None" ? arr : str == "Asc" ? arr.sort((a,b) => a-b) : arr.sort((a,b) => b-a);
}

console.log(ascDesNone([4, 3, 2, 1], "Asc"), [1, 2, 3, 4]);
console.log(ascDesNone([7, 8, 11, 66], "Des"), [66, 11, 8, 7]);
console.log(ascDesNone([1, 2, 3, 4], "None"),[1, 2, 3, 4]);
console.log(ascDesNone([1, 0, 1, 0], "Asc"), [0, 0, 1, 1]);
console.log(ascDesNone([1, 2, 2, 2, 2, 2, 2], "Des"), [2, 2, 2, 2, 2, 2, 1]);
console.log(ascDesNone([9, 7, 43, 11, 16, 111, 19], "Asc"), [7, 9, 11, 16, 19, 43, 111]);
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

console.log(howUnlucky(2000), 1)
console.log(howUnlucky(2001), 2)
console.log(howUnlucky(2002), 2)
console.log(howUnlucky(2003), 1)
console.log(howUnlucky(2004), 2)
console.log(howUnlucky(2005), 1)
console.log(howUnlucky(2006), 2)
console.log(howUnlucky(2007), 2)
console.log(howUnlucky(2008), 1)
///////////////////////////////
///////////////////////////////


// This function will return the length of the array when str is split and filtered by myChar
function charCount(myChar, str) {
	// let count = 0;
	// str.split("").filter(letter => letter == myChar ? count++ : count);
	// return count;

	// Can be refactored to
	return str.split('').filter(char => char === myChar).length;
}

console.log(charCount('a', 'edabit'), 1);
console.log(charCount('b', 'big fat bubble'), 4);
console.log(charCount('c', 'Chamber of secrets'), 1);
console.log(charCount('f', 'frank and his friends have offered five foxes for sale'), 7);
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
	return operator=="/"&&num2==0 ? "Can't divide by 0!" : eval(num1 + operator + num2);
}

console.log(calculator(2, '/', 2), 1);
console.log(calculator(10, '-', 7), 3);
console.log(calculator(2, '*', 16), 32);
console.log(calculator(2, '-', 2), 0);
console.log(calculator(15, '+', 26), 41);
console.log(calculator(2, '+', 2), 4);
console.log(calculator(2, "/", 0), "Can't divide by 0!");
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
		return "a";
	} else if (6 >= alphabet.indexOf(s)) {
		return "e";
	} else if (11 >= alphabet.indexOf(s)) {
		return "i";
	} else if (17 >= alphabet.indexOf(s)) {
		return "o";
	} else return "u";
}

console.log(nearestVowel("a"), "a");
console.log(nearestVowel("b"), "a");
console.log(nearestVowel("c"), "a");
console.log(nearestVowel("d"), "e");
console.log(nearestVowel("e"), "e");
console.log(nearestVowel("f"), "e");
console.log(nearestVowel("g"), "e");
console.log(nearestVowel("h"), "i");
console.log(nearestVowel("i"), "i");
console.log(nearestVowel("j"), "i");
console.log(nearestVowel("k"), "i");
console.log(nearestVowel("l"), "i");
console.log(nearestVowel("m"), "o");
console.log(nearestVowel("n"), "o");
console.log(nearestVowel("o"), "o");
console.log(nearestVowel("p"), "o");
console.log(nearestVowel("q"), "o");
console.log(nearestVowel("r"), "o");
console.log(nearestVowel("s"), "u");
console.log(nearestVowel("t"), "u");
console.log(nearestVowel("u"), "u");
console.log(nearestVowel("v"), "u");
console.log(nearestVowel("w"), "u");
console.log(nearestVowel("x"), "u");
console.log(nearestVowel("y"), "u");
console.log(nearestVowel("z"), "u");
///////////////////////////////
///////////////////////////////





function calculateScore(games) {
	let wins = [0, 0];
	games.forEach(game => {
		if (game[0] === 'R' && game[1] !== 'R') {
			game[1] === 'S' ? wins[0]++ : wins[1]++;
		} else if (game[0] === 'P' && game[1] !== 'P') {
			game[1] === 'R' ? wins[0]++ : wins[1]++;
		} else if (game[0] === 'S' && game[1] !== 'S') {
			game[1] === 'P' ? wins[0]++ : wins[1]++;
		}
	})
	
	return wins[0] > wins[1] ? "Abigail" : 
		wins[0] < wins[1] ? "Benson" :
		"Tie"
}

console.log(calculateScore([['R', 'P'], ['R', 'S'], ['S', 'P']]),  "Abigail");
console.log(calculateScore([['R', 'R'], ['S', 'S']]), "Tie");
console.log(calculateScore([['S', 'R'], ['R', 'S'], ['R', 'R']]), "Tie");
console.log(calculateScore([['S', 'R'], ['P', 'R']]), "Tie");
console.log(calculateScore([['S', 'S'], ['S', 'P'], ['R', 'S'], ['S', 'R'], ['R', 'R']]), "Abigail");
console.log(calculateScore([['S', 'R'], ['S', 'R'], ['S', 'R'], ['R', 'S'], ['R', 'S']]), "Benson");
///////////////////////////////
///////////////////////////////




// This function will take an array of digits representing how many numbers are present at that
// index from 0-9. These will be compared to an arr to see if the arr has the alloted amount of 
// digits. i.e. digits = [0, 1, 2, 2, 3, ...] will have zero 0's, one 1, two 2's, two 3's, 
// three 4's, etc. 
function canBuild(digits, arr) {
	if (arr.length === 0) return true;
	arr = arr.join("").split("");
	let boolArr = [];
	
	for (let i = 0; i < arr.length - 1; i++) {
		let numL = arr.filter(num => num == i).length;
		boolArr.push(numL <= digits[i]);
	}
	return boolArr.every(val => val == true);
}

console.log(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], []), true);
console.log(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 8]), true);
console.log(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 80]), true);
console.log(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92]), true);
console.log(canBuild([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 23, 45, 6789]), true);
console.log(canBuild([0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 2, 22, 49, 444, 4]), true);
console.log(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 80, 0]), false);
///////////////////////////////
///////////////////////////////



// This class will take in a number and see how many times one, three and nine can fit into the number.
class OnesThreesNines {
	constructor(num) {
		this.num = num;
	}
	
	get ones() {
		return Math.floor(this.num/1);
	}
	
	get threes() {
		return Math.floor(this.num/3);
	}
	
	get nines() {
		return Math.floor(this.num/9);
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
	
	for (let i = 0; i < arr.length -1; i++) {
		if (arr[i] != arr[i+1] && arr[i] === arr[i+2]) {
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
	
	arr.forEach(num => {
		if (breath > 10) breath = 10;
		if (breath <= 0) return false;
		
		if (num >= 0) {
			breath = breath + 4;
		} else if (num < 0) {
			breath = breath - 2;
		}
	})
	
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
	return sum % 2 === 0 ? "Evenish" : "Oddish";
}
// A more clever function by K750i
function oddishOrEvenish(num) {
	return [...String(num)].map(Number).reduce((a,v) => a + v) % 2 ? 'Oddish' : 'Evenish'
}
///////////////////////////////
///////////////////////////////


// How Many Days Between Two Dates, Published by Alon
// This function will take in two new Dates and return the amount of days between
// the two dates.
const getDays = (d1, d2) => Math.round(Math.abs((d1-d2)/(24*60*60*1000)));
///////////////////////////////
///////////////////////////////


// Converting Objects to Arrays, Published by Matt
// This function takes an object and converts it to a nested array.
// Each nested array will hold one key-value pair
function toArray(obj) {
	let arr = [];
	for (const [key, value] of Object.entries(obj)) {
		arr.push([key, value])
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
const getLength = arr => arr.flat(Infinity).length;
///////////////////////////////
///////////////////////////////