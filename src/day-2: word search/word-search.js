const chalk = require('chalk');
console.clear();

const arr = [
  ['F', 'O', 'F', 'O', 'A', 'S'],
  ['S', 'S', 'B', 'Q', 'S', 'Q'],
  ['A', 'F', 'O', 'F', 'S', 'F'],
  ['M', 'A', 'F', 'O', 'S', 'O'],
  ['M', 'M', 'S', 'S', 'S', 'A'],
  ['F', 'O', 'S', 'M', 'A', 'M'],
];

const word_search = (matrix, word) => {
  word = word.toUpperCase();

  // * validate the matrix
  // * 1. making sure the array is not empty
  if (!matrix.length) return `The matrix doesn't have any row.`;
  else if (!matrix[0].length) return `The matrix doesn't have any columns.`;

  // * 2. making sure the array is a matrix
  let i = 1;
  for (i; i < matrix.length; i++) if (matrix[i].length != matrix[i - 1].length) return `The array is not a matrix!`;

  const word_length = word.length;
  const matrix_rows = arr.length;
  const matrix_cols = arr[0].length;

  // * first, check if the word length is shorter than either
  // * the matrix rows or columns
  if (word_length > matrix_cols && word_length > matrix_rows) return `Word not found.`;

  const first_letter = word.substr(0, 1);
  const leftover_length = word_length - 1;

  // * find word from left to right
  if (matrix_cols >= word_length) {
    for (i in matrix) {
      i = Number(i);
      const row = matrix[i];

      for (j in row) {
        j = Number(j);
        const col = row[j];

        if (col == first_letter && row.length - (j + 1) >= leftover_length) {
          let check_str = '';
          check_str += first_letter;
          for (let k = 1; k < leftover_length + 1; k++) check_str += row[j + k];
          check_str = check_str.toUpperCase();
          if (check_str == word) return true;
        }
      }
    }
  }

  // * find word from top to bottom
  if (matrix_rows >= word_length) {
    for (i in matrix) {
      i = Number(i);
      const row = matrix[i];

      for (j in row) {
        j = Number(j);

        if (row[j] == first_letter && matrix_rows - (i + 1) >= leftover_length) {
          let check_str = '';
          check_str += first_letter;
          let start = i + 1;

          for (let k = 0; k < leftover_length; k++) {
            check_str += matrix[start][j];
            start++;
          }

          check_str = check_str.toUpperCase();
          if (check_str == word) return true;
        }
      }
    }
  }

  return false;
};

console.log(chalk.bold.blueBright(word_search(arr, 'SSS')));
