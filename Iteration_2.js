// Range que gera array:
// NÃO segue o padrão Iterator


function range_2(start, end) {
  let array = [];

  for (let i = start; i < end; i++) {
    array.push(i);
  }

  return array;
}

const numbers_2 = range_2(1, 8);
console.log(numbers_2);