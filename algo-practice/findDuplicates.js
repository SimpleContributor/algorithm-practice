const arr = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];
const returnMultipleDupesArray = (arr) => {
	// Create hash table to hold values(key) and count(value)
  let observed = {};
	// Create array to hold all duplicates
  let dupesArray = [];
  
  for(let i = 0; i < arr.length; i++) {
 		// Check if the key/value pair exists
    if(observed[arr[i]]) {
			// Check if the keys value is equal to 1
      if(observed[arr[i]] === 1) {
				// If it is then push the number as a duplicate
        dupesArray.push(arr[i]);
      }
      
			// If not then increment the value
      observed[arr[i]] +=  1;
    } else {
			// If there is no key/value pair with the key of arr[i]
			// Add the key and set the value to 1
      observed[arr[i]] = 1;
    }
  }
  
  return dupesArray;
}

console.log(returnMultipleDupesArray(arr));
