const chalk = require('chalk');

console.clear();

const dominoes = '....L....R...L';

const pushDominoes = dominoes => {
  dominoes = dominoes.split('');
  console.log(chalk.bold.blueBright('Before:', dominoes.join('')));

  let onGoing = false;
  let readyIndex = [];

  for (i in dominoes) {
    i = Number(i);

    // * kalau bukan R dan L, simpan index
    if (dominoes[i] == '.') readyIndex.push(i);

    // * kalau ketemu L
    if (dominoes[i] == 'L') {
      if (onGoing) {
        // * adjustment
        changeSteps = Math.floor(readyIndex.length / 2);
        for (let j = 0; j < changeSteps; j++) dominoes[readyIndex[j]] = 'R';
        for (let j = readyIndex.length - 1; j > readyIndex.length - changeSteps - 1; j--) dominoes[readyIndex[j]] = 'L';

        // * recondition
        onGoing = false;
        readyIndex = [];
      } else {
        // * adjustment
        readyIndex.forEach(index => (dominoes[index] = 'L'));

        // * recondition
        currentState = '';
        readyIndex = [];
      }
    }

    if (dominoes[i] == 'R') {
      if (onGoing) {
        // * adjustment
        readyIndex.forEach(index => (dominoes[index] = 'R'));

        // * recondition
        readyIndex = [];
      } else {
        // * recondition
        readyIndex = [];
        onGoing = true;
      }
    }

    // * kalau sudah di piece terakhir cek apakah onGoing
    if (i == dominoes.length - 1 && onGoing) readyIndex.forEach(index => (dominoes[index] = 'R'));
  }

  console.log(chalk.bold.blueBright('After :', dominoes.join('')));
};

pushDominoes(dominoes);
