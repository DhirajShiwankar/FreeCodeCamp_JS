function whatIsInAName(arr, obj) {
  const keys = Object.keys(obj);

  return arr
  .filter(values => keys
  .every(key => values[key] === obj[key]))
}

console.log(whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
))
