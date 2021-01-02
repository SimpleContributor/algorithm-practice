function insertionSort(array) {
	for(let i=0; i<array.length; i++) {
		for(let j=0; j<array.length; j++) {
			if(array[j] > array[j+1]) {
				let smallerNum = array[j+1];
				array[j+1] = array[j];
				array[j] = smallerNum;
			}
		}
	}
  return array;
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
