// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   //   console.log(A.sort((a, b) => a - b).filter(num => ));
//   const sorted = A.sort((a, b) => a - b);
//   const unique = [...new Set(sorted)];
//   console.log(unique);
//   unique.forEach((num, i) => {
//     if (num !== i) {
//       return i;
//       console.log(i);
//     }
//   });
// }

// solution([1, 3, 6, 4, 1, 2]);

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sortedA = A.sort((a, b) => a - b);
  let uniqueA = [];
  sortedA.forEach((num, i) => {
    if (uniqueA.indexOf(num === -1)) {
      uniqueA.push(num);
      console.log('true');
    }
    console.log(sortedA[i]);
    console.log(uniqueA.indexOf(sortedA[i]) === -1);
  });

  console.log(sortedA, 'sorted');
  console.log(uniqueA, 'unique');
}
