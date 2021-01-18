import chalk from 'chalk';
console.clear();

const runningMedian = (inputArr: number[]) => {
  let resultArr: number[] = [];
  let runningArr: number[] = [];

  for (let i in inputArr) {
    runningArr.push(inputArr[i]);
    const runningArrSorted = runningArr.sort((a, b) => a - b);

    // * setelah di-sort cek apakah ganjil
    const isOdd = runningArr.length % 2;

    if (isOdd) {
      // * kalau ganjil, ambil Math.ceiling(length / 2)
      resultArr.push(runningArrSorted[Math.floor(runningArrSorted.length / 2)]);
    } else {
      // * kalau genap, ambil rata2 dari length / 2 * length / 2 + 1
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
console.log(chalk.bold.blueBright('Hasil Akhir:'), runningMedian(inputArr));
