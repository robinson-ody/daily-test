console.clear();
const input = [-4, -4, 2, 8];
const input2 = [-4, 2, 8, -4];
const input3 = [2, -4, -4, 8];

const maxProductOfThree = (numbers: number[]) => {
  console.log({ numbers });
  let simpan: number | null = null;

  for (let i in numbers) {
    if (numbers[i] !== 0) {
      if (numbers[i] < 0 && simpan === null) simpan = numbers[i];
      else if (numbers[i] < 0 && simpan !== null) console.log(`Ngapain?`);
      else console.log(`Ngapain 2?`);
    }
  }

  return 0;
};

console.log(maxProductOfThree([-4, -4, 2, 8]));
// * expected result: 128 -> -4 * -4 * 8
