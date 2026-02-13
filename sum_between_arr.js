function sumAll(arr) {
  let start = Math.min(...arr);
  let end = Math.max(...arr);
  let sum = 0;

  for (let i = start; i <= end; i++){
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 5])) //15
