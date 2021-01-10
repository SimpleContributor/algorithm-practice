// This function will remove the numbers from array a that are present in array b
// Filter through the array a for the numbers that are not included in array b
function arrayDiff(a, b) {
	return a.filter(num => !b.includes(num));
}

console.log(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
console.log(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
console.log(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
console.log(arrayDiff([1,8,2,12], [1,8]), [2,12], "a was [1,8,2], b was []");




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
