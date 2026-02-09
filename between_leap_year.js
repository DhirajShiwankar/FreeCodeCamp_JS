function findLeapYears(start, end) {
  for (let year = start; year <= end; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(year);
    }
  }
}

findLeapYears(2000, 2025);
