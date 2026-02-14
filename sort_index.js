function getIndexToIns(arr, num){
  arr.sort((a, b) => a - b);

  const index = arr.findIndex(value => value >= num);
  return index === -1 ? arr.length : index;
}

console.log(getIndexToIns([0, 1 ], 1.5))
