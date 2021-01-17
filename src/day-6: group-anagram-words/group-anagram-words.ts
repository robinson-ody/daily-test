console.clear();

const groupAnagramWords = (inputArray: string[]) => {
  interface ResultObj {
    [key: string]: string[];
  }

  let resultObj: ResultObj = {};

  for (let i in inputArray) {
    const key = inputArray[i].split('').sort().join('');
    if (resultObj[key]) resultObj[key].push(inputArray[i]);
    else resultObj[key] = [inputArray[i]];
  }

  let resultString = [];
  for (let key in resultObj) resultString.push(resultObj[key]);
  return resultString;
};

console.log(groupAnagramWords(['abc', 'bcd', 'cba', 'cbd', 'efg']));
// * Expected output: [['efg'], ['bcd', 'cbd'], ['abc', 'cba']]
