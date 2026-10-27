// 28.	Check an Armstrong number.

function Armstrong (num) {
    let original = num;
    let strong = 0;
    let count = 0;
    let temp = num;

    if (num < 0)  return `${num} negative value is not armstrong number.`

    do {
        count++;
        temp = Math.floor(temp / 10)
    } while (temp > 0);

    while (num > 0) {
        let digit = num % 10;
        digit = digit ** count;
        strong = strong + digit ;
        num = Math.floor(num / 10)
    }
    if (original === strong) return `${original} is armstrong number.`;
    else return `${original} is not armstrong number`;
}

console.log(Armstrong(153));
console.log(Armstrong(9474));
