let rand_arr_of_numb = [], i;
for (i = 0; i < 20000000; i++) rand_arr_of_numb.push(Math.round(Math.random() * 899 + 100));
rand_arr_of_numb.sort();
const data_to_write = JSON.stringify(rand_arr_of_numb);
require('fs').writeFile('random_array_of_number.json', data_to_write, 'utf8', () => console.log(`Written!`));
