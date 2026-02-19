function sumPrimes(num) {
  if (num < 2) return 0;

  // Create array from 2 to num
  const numbers = Array.from({ length: num - 1 }, (_, i) => i + 2);

  const primes = numbers.filter(n => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  });

  // Sum all prime numbers
  return primes.reduce((sum, value) => sum + value, 0);
}
