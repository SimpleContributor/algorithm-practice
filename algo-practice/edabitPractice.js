// Algo to solve the total % landmass of a country given a name and area
function areaOfCountry(name, area) {
	let landmass = (area/148940000*100).toFixed(2) + "%";
	return `${name} is ${landmass} of the total world's landmass`
}

console.log(areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass");
console.log(areaOfCountry("Russia", 17098242), "Russia is 11.48% of the total world's landmass");

// Algo to find the second largest number in an array
function secondLargest(arr) {
	return arr.sort((a, b) => b - a)[1];
}

console.log(secondLargest([10, 40, 30, 20, 50]), 40);
console.log(secondLargest([25, 143, 89, 13, 105]), 105);

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