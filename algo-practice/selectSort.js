function selectionSort(array) {
    // Iterate through the array
	for(let i=0; i<array.length-1; i++) {
        // Create array to hold all values after array[i]
        let tempArr = [];
        // Iterate through array again starting one index ahead of i
		for(let j=i+1; j<array.length; j++) {
            // Push all values to the tempArr
			tempArr.push(array[j]);
		}

        // Set minimum value in tempArr to variable
        let minimum = Math.min(...tempArr);
        // Set the index of the minimum value in tempArr
        let minIndex = (tempArr.findIndex((num) => num === minimum)) + i + 1;
        // If the value at array[i] is greater than the minimum value do some stuff
		if(array[i] > minimum) {
            // Swap the two values at their indexes
			let tempI = array[i];
			array[i] = array[minIndex];
			array[minIndex] = tempI;
		}
	}

  return array;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
