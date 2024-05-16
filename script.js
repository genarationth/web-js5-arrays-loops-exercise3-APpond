//Exercise #3
const numberOfRows = 5;
for (let i = 1; i <= numberOfRows; i++) {
    let rowPattern = '';
    for (let j = 1; j <= i; j++) {
        rowPattern += '* ';
    }
    console.log(rowPattern);
}
// Exercise #4.1
let xValue = 10;
while (xValue > 0) {
    console.log(xValue);
    xValue -= 0.5;
}
// Exercise #4.2
console.log("Odd numbers between 1 - 100:");
let i = 1;
while (i <= 100) {
    console.log(i);
    i += 2;
}
// Exercise #4.3
let p = 1;
let n = 6;
while (p <= n) {
    console.log(`[${p}]`);
    p++;
}
// Exercise #4.4
function sumOfFirstNPositiveIntegers(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}
const n1 = 5;
const n2 = 19;
console.log( `${sumOfFirstNPositiveIntegers(n1)}`);
console.log(` ${sumOfFirstNPositiveIntegers(n2)}`);