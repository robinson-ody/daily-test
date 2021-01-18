"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
console.clear();
const runningMedian = (inputArr) => {
    let resultArr = [];
    let runningArr = [];
    for (let i in inputArr) {
        runningArr.push(inputArr[i]);
        const runningArrSorted = runningArr.sort((a, b) => a - b);
        const isOdd = runningArr.length % 2;
        if (isOdd) {
            resultArr.push(runningArrSorted[Math.floor(runningArrSorted.length / 2)]);
        }
        else {
            const angka1 = runningArrSorted.length / 2 - 1;
            const angka2 = runningArrSorted.length / 2;
            const average = (runningArrSorted[angka1] + runningArrSorted[angka2]) / 2;
            resultArr.push(average);
        }
        console.log({ runningArr, resultArr });
    }
    return resultArr;
};
const inputArr = [2, 1, -4, 17, 2, 0, 5];
console.log(chalk_1.default.bold.blueBright('Hasil Akhir:'), runningMedian(inputArr));
//# sourceMappingURL=running-median.js.map