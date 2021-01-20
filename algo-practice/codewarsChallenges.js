// This function will remove the numbers from array a that are present in array b
// Filter through the array a for the numbers that are not included in array b
function arrayDiff(a, b) {
	return a.filter(num => !b.includes(num));
}

console.log(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
console.log(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
console.log(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
console.log(arrayDiff([1,8,2,12], [1,8]), [2,12], "a was [1,8,2], b was []");
//////////////////
//////////////////



// This function will take in an array of names and return the names of the people who like something
// If there are more than 3 names return the first two and the rest as a number
// If there are 3 names return each one... so on and so on
function likes(names) {
	if (names.length > 3) {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
	} else if (names.length > 2) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`
	} else if (names.length > 1) {
		return `${names[0]} and ${names[1]} like this`
	} else if (names.length > 0) {
		return `${names[0]} likes this`;
	}
	return "no one likes this";
}

console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
//////////////////
//////////////////




// This function will take an array of intergers either all odd or even except one number
// Find the outlier and return that number
function findOutlier(integers){
    var even = integers.filter(num => num%2 === 0);
    var odd = integers.filter(num => num%2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}
  
  console.log(findOutlier([0, 1, 2]), 1);
  console.log(findOutlier([1, 2, 3]), 2);
  console.log(findOutlier([2,6,8,10,3]), 3);
  console.log(findOutlier([0,0,3,0,0]), 3);
  console.log(findOutlier([1,1,0,1,1]), 0);
  //////////////////
  //////////////////




// This function will take a string and return a new string where each letter will reapeat by its position
// Convert the string to uppercase and split into an array
// Iterate over the array adding a letter for each iteration
// Join the array with a - and return
function accum(s) {
	let charArr = s.toUpperCase().split("");
	const chars = [...charArr];
	for (let i=0; i<charArr.length-1; i++) {
		for(let j=i+1; j<charArr.length; j++) {
			charArr[j] += chars[j].toLowerCase();
		}
	}
	return charArr.join("-");
}

console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
//////////////////
//////////////////




// This function will get the middle character(s) of a string
// Split string and check the length. If even return the two middle characters
// If odd return the only middle character
function getMiddle(s) {
	let arr = s.split("");
	return arr.length%2 === 0 ? 
		`${arr[arr.length/2-1]}${arr[arr.length/2]}` : 
		`${arr[Math.floor(arr.length/2)]}`;
}

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");
//////////////////
//////////////////




// This function will take in a string and return each letters position in the alphabet. Numbers and special characters removed
// Use regex to remove anything that is not an alphabet character
// Turn this new string to all lowercase, split to an array and map over each char
// For each char convert to integer at position in alphabet and push to answer arr 
// Join the arr to convert back to a string and return
function alphabetPosition(text) {
	let answer = [];
	text.replace(/[^A-Za-z]/g, "")
		.toLowerCase()
		.split("")
		.map(char => {
			answer.push(char.charCodeAt(0) - 96);
		});
	return answer.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
//////////////////
//////////////////





// This function will take in a string and reverse the characters of any word larger than 4 characters
// then return the new string
function spinWords(str){
	let answer = [];
	str.split(" ").forEach(word => {
		word.length > 4 ? answer.push(word.split("").reverse().join("")) :
			answer.push(word);
	})
	
	return answer.join(" ");
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
//////////////////
//////////////////




// This function will take an array of characters n, s, w, e and determine when these
// paths are followed in a perfect grid if the user will return to the start
function isValidWalk(walk) {
		let count = 0;
		walk.forEach(item => {
			switch (item) {
				case 'n': count++; break
				case 's': count--; break
				case 'e': count += 2; break
				case 'w': count -= 2; break
			}
			// if (item == "n") {
			// 	return count++;
			// } else if (item == "e") {
			// 	return count += 2;
			// } else if (item == "w") {
			// 	return count -= 2;
			// } else {
			// 	return count--;
			// }
		})
	return walk.length === 10 && count === 0;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
//////////////////
//////////////////





// This function will take two arrays of strings and determine which words in arr1 match a word
// or part of a word in arr2 and returns an arr of words from arr1 that match
function inArray(arr1,arr2){
	// let answer = [];
	// for (let i = 0; i < array1.length; i++) {
	// 	for (let j = 0; j < array2.length; j++) {
	// 		if (array2[j].indexOf(array1[i]) >= 0 && answer.indexOf(array1[i]) < 0) {
	// 			answer.push(array1[i]);
	// 		}
	// 	}
	// }
	// return answer.sort();
	
	return arr1.filter(needle => {
    return arr2.some(haystack => {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["live", "strong"])
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]), ["arp", "live", "strong"])
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]), [])
//////////////////
//////////////////





// This function will take in a number and determine whether or not it is prime
// To reduce complexity the loop only iterates to the square root of the num
const isPrime = num => {
	for (let i = 2, sq = Math.sqrt(num); i <= sq; i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
}

console.log(isPrime(0),  false, "0 is not prime");
console.log(isPrime(1),  false, "1 is not prime");
console.log(isPrime(2),  true, "2 is prime");
console.log(isPrime(73), true, "73 is prime");
console.log(isPrime(75), false, "75 is not prime");
console.log(isPrime(-1), false, "-1 is not prime");
console.log(isPrime(5099), true, "5099 is prime");
//////////////////
//////////////////




// This function will take a string of parenthesis and determine if they are valid meaning
// every opening '(' will have a closing ')'
function validParentheses(parens){	
	let openParen = parens.match(/\(/g);
	let closeParen = parens.match(/\)/g);

	if (closeParen == null || openParen == null) return false;
	if (parens.charAt() === ")" || parens.charAt(parens.length-1) === "(") return false;
	
	return openParen.length === closeParen.length;
}

console.log(validParentheses( "()" ), true);
console.log(validParentheses( ")(())(" ), false);
//////////////////
//////////////////




// This function will take a string of numbers and find the outlier. All but one number in the argument will
// either be even or odd. Return the position of the outlier plus one so the starting number is indexed at 1.
function iqTest(numbers){
	let even = [];
	let odd = [];
	let numArr = numbers.split(" ")
	numArr.forEach(num => {
		num % 2 == 0 ? even.push(num) : odd.push(num);
	})
  	return odd.length === 1 ? 
		numArr.findIndex(n => n == odd[0]) + 1 : 
		numArr.findIndex(n => n == even[0]) + 1;
}
  
console.log(iqTest("2 4 7 8 10"),3);
console.log(iqTest("1 2 2"), 1);
console.log(iqTest("1 2 1 1"), 2);
  //////////////////
//////////////////
  
