function pairwise(arr, arg) {
    // Create array to hold index numbers
	let indexes = [];
    
    // Loop through the array starting at 0
	for(let i=0; i<arr.length; i++) {
        // Loop again starting one position ahead of i
		for(let j=i+1; j<arr.length; j++) {
            // Check if the index of both i and j exist in indexes array
			if(indexes.indexOf(i) < 0 && indexes.indexOf(j) < 0){
                // If they are not already present, check if the sum equals arg
				if(arr[i] + arr[j] == arg) {
                    // If the sum equals arg push both indexes to the array
					indexes.push(i);
					indexes.push(j);
				}
			}
		}
	}
    
    // Reducer function reduces an array to the sum of its items
	function reducer(a, b) {
		return a + b;
	}
    
    // If the arr argument is empty return 0
	if(indexes.length == 0){
		return 0;
	}
    
    // Return the sum of the indexes
	return indexes.reduce(reducer);
}

pairwise([1, 1, 1], 2);
