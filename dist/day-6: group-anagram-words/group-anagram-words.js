"use strict";
console.clear();
const groupAnagramWords = (inputArray) => {
    let resultObj = {};
    for (let i in inputArray) {
        const key = inputArray[i].split('').sort().join('');
        if (resultObj[key])
            resultObj[key].push(inputArray[i]);
        else
            resultObj[key] = [inputArray[i]];
    }
    let resultString = [];
    for (let key in resultObj)
        resultString.push(resultObj[key]);
    return resultString;
};
console.log(groupAnagramWords(['abc', 'bcd', 'cba', 'cbd', 'efg']));
//# sourceMappingURL=group-anagram-words.js.map