// Find the sum of digits.

function SumOfDigit(num) {
    let original = num;
    let sum = 0;
    
    num = Math.abs(num) // returns the absolute value of a number, removing its negative sign if present

    while (num > 0) {
        let digit = num % 10; // % operator gives the remainder after division 12 -> 2 extracts the last digit and stores it in digit
        sum += digit; 
        num = Math.floor(num / 10); // remove last digit.
    }
    return `${original} sum of digits is ${sum}`
}

console.log(SumOfDigit(12))
