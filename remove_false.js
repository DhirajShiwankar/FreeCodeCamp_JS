function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([0, 1, false, 2, "", 3]));
