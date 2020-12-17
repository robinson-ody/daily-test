const chalk = require('chalk');
console.clear();
nums = [2, 3, 1, 2, 4, 3];

minSubArrayLen = (arr, s) => {
  res_arr = [];

  for (i in arr) {
    let counter = 0,
      total = 0,
      j = i;

    while (total < s && j < arr.length) {
      total += arr[j];
      counter++;
      j++;
    }

    if (total >= s) res_arr.push(counter);
  }

  if (res_arr.length)
    return res_arr.reduce((a, b) => {
      if (a < b) return a;
      return b;
    });

  return 0;
};

console.log(chalk.bold.blueBright(minSubArrayLen(nums, 7)));
