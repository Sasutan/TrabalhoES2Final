//  padrão Iterator  ---> Padrão COMPORTAMENTAL

function* range_generator(start, end) {
    for (let i = start; i < end; i++) {
      yield i;
    }
  }
  

  for (const num of range_generator(1, 5)) {
    console.log(num); 
  }

