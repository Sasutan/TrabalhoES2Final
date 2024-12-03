class Magia {
    constructor(magias) {
      this.magias = magias;
    }
  
    *iterator() {
      for (const categoria of Object.keys(this.magias)) {
        for (const magia of this.magias[categoria]) {
          yield magia;
        }
      }
    }
  }
  
  const grimorio = new Magia({
    piromancia: ['fireball', 'inferno blast'],
    criomancia: ['ice shard', 'ice age'],
    geomancia: ['create golem', 'earthquake'],
  });
  
  for (const magia of grimorio.iterator()) {
    console.log(magia); 
    // Saída: TV, Laptop, Apple, Banana, Shirt, Pants
  }
  