function checkLeapYear(year) {
  return new date(year, 1, 29).getDate() === 29;
}

console.log(checkLeapYear(2016)); 
