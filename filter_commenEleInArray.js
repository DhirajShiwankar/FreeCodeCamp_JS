function diffArray(arr1, arr2) {
  const array1 = arr1.filter(item => !arr2.includes(item));
  const array2 = arr2.filter(item => !arr1.includes(item));

  return array1.concat(array2);
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
