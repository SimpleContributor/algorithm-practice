function sym() {
	// Create empty array that will hold the argument arrays
  var args = [];
	// Fill args array with argument arrays
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
	
	console.log(args)

	// function that will take in two arrays at a time to check the symmetric difference
  function symDiff(arrayOne, arrayTwo) {
		// create array for the unique numbers in each array
    var result = [];

		// Check each item in the first array against the second array
    arrayOne.forEach(function(item) {
			// If the second array does not contain that item nor does the result array,
			// push that item into the results array
      if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

		// Same as before, but iterating through each item in the second array
    arrayTwo.forEach(function(item) {
      if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

		// Return the result array once it has been filled
    return result;
  }

  // Reduce args array down to a single item. The result array in this case
	// will be reduced down from a 2D array to just the result array
  return args.reduce(symDiff);
}

//console.log(sym([1, 2, 3], [5, 2, 1, 4]));
//output: [3, 5, 4]
