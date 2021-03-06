"use strict";
console.clear();
const maxProductOfThree = (numbers) => {
    const startTime = new Date().getTime();
    console.log(`Start at ${startTime}`);
    let willCalculate = [];
    const positive = [];
    let negative = [];
    for (let i in numbers) {
        if (numbers[i] !== 0) {
            const current = numbers[i];
            if (current < 0)
                negative.push(current);
            else if (current > 0)
                positive.push(current);
        }
    }
    if (negative.length % 2)
        negative.shift();
    for (let i in negative)
        negative[i] = Math.abs(negative[i]);
    willCalculate = [...negative, ...positive];
    willCalculate.sort((a, b) => a - b);
    const finalThree = willCalculate.slice(willCalculate.length - 3);
    let returnString = '';
    finalThree.forEach((num, index) => {
        returnString += num;
        if (index < 2)
            returnString += ' * ';
        if (index === 2)
            returnString += ' = ';
    });
    returnString += finalThree.reduce((a, b) => a * b);
    const endTime = new Date().getTime();
    console.log(`End at ${endTime}`);
    console.log(`Duration: ${(endTime - startTime) / 1000}s`);
    return returnString;
};
const min = -1000;
const max = 1000;
const randArrLen = 10;
let i = 0;
const randArr = [];
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
while (i < randArrLen) {
    randArr.push(getRndInteger(min, max));
    i++;
}
console.log({ randArr });
console.log(maxProductOfThree(randArr));
//# sourceMappingURL=max-product-of-three.js.map