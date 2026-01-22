// Build the Largest Number Finder
// In this lab, you will build a function that returns an array consisting of the largest number from each provided sub-array.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
// User Stories:
// You should create a function largestOfAll that takes an array of arrays as an argument.
// The function should return an array containing the largest number from each sub-array.

function largestOfAll (arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    
    for (let j = 1; j < arr[i].length; j++){
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    result.push(max)
  }
  return result;
}

let arra = [[4, 5, 1, 7], [13, 27, 18, 30], [32, 40, 37, 39]];
console.log(largestOfAll(arra)) 
// [ 7, 30, 40 ]
