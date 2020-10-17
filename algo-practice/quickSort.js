function quickSort(array) {
	if(array.length === 0) {
		return [];
	} else {
		let lesser = [];
		let equal = [];
		let greater = [];

		for(let i = 0; i < 1; i++) {
			for(let j = 1; j < array.length; j++) {
				if(array[j] < array[i]) {
					lesser.push(array[j]);
				}
				
				if(array[j] === array[i]) {
					equal.push(array[j]);
				}

				if(array[j] > array[i]) {
					greater.push(array[j]);
				}
			}
			equal.push(array[i]);
		}
		return [...quickSort(lesser), ...equal, ...quickSort(greater)];
	}
}

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
