function smallestCommons(arr) {
  const [min, max] = [...arr].sort((a, b) => a - b);

  const range = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const lcm = (a, b) => (a * b) / gcd(a, b);

  return range.reduce((acc, cur) => lcm(acc, cur));
}

// Test cases
console.log(smallestCommons([1, 5]));   // 60
console.log(smallestCommons([5, 1]));   // 60
console.log(smallestCommons([2, 10]));  // 2520
