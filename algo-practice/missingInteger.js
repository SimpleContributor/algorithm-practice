function solution(A) {
// Create array to hold values of undefined or true
orderedArr = [];
for (let i = 0; i < A.length; i++) {
    if (!orderedArr[A[i]]) {
        // Set ordered array to true at the index equal to the number in array A
        orderedArr[A[i]] = true;
     }
}

// If there are no numbers that filled the orderedArr, the answer is 1
if (orderedArr.length === 0) return 1;
for (let i = 1; i < orderedArr.length; i++) {
    // Check to see if the orderedArr is true at that iteration
    if (!orderedArr[i]) {
        // If it is not true the answer is i
        return i;
    }
}

// If the list has consecutive numbers return the length
// This is the answer because the array starts from 0, so
// in a consecutive number array from 1-10 the length from 0-10
// is 11. This is the lowest number to satisfy the solution
  return orderedArr.length;
}

console.log(solution([1, 2, 3, -30, -15, -10, 5, 9]))
