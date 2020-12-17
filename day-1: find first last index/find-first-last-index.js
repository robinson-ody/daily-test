const moment = require('moment');

const find_first_last_index = (array, target) => {
  const start_time = moment();
  let start = -1;
  let end = -1;

  array.reduce((a, b, i) => {
    if (a != b)
      if (b == target) start = i;
      else if (a == target) end = i - 1;

    return b;
  });

  const end_time = moment();
  console.log(`Start function at ${start_time.format('HH:mm:ss:SSS')}`);
  console.log(`End function at ${end_time.format('HH:mm:ss:SSS')}`);
  console.log(`Total time elapsed: ${end_time.diff(start_time)}ms`);
  console.log(`Result: ${[start, end]}`);
};

// * Splicing to break the reduce func making it longer in total time.
// * Don't use it!
// array.slice(i)

// * Using below func instead of reduce making it
// * 22x longer for the program to finish
// let round = 0;

// for (i in array) {
//   if (round == 0 && array[i] == target) {
//     start = i;
//     round++;
//   } else if (round == 1 && array[i] != target) {
//     end = i - 1;
//     break;
//   }
// }

const input_A = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15];
const target_A = 9;
// find_first_last_index(input_A, target_A);
// * Expected Output: [6, 8]

const input_B = [100, 150, 150, 153];
const target_B = 150;
// find_first_last_index(input_B, target_B);
// * Expected Output: [1, 2]

const input_C = [1, 2, 3, 4, 5, 6, 10];
const target_C = 9;
// find_first_last_index(input_C, target_C);
// * Expected Output: [-1, -1]

const input_D = require('./random_array_of_number.json');
const target_D = 489;
find_first_last_index(input_D, target_D);
// * Expected Output: [2, 3]
