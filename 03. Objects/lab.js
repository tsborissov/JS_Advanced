function createCity(name, population, treasury) {
  return {
    name: name,
    population: population,
    treasury: treasury
  }
}

// console.log('Tortuga',
// 7000,
// 15000
// );
// console.log('Santo Domingo',
// 12000,
// 23500
// );

function townPopulation(inputArr) {
  const towns = {};

  for (let record of inputArr) {
    let [city, population] = record.split(' <-> ');
    population = Number(population);

    towns[city] = (towns[city] != undefined) ? population += towns[city] : population;
  }

  for (let town in towns) {
    console.log(`${town} : ${towns[town]}`);
  }
}

// townPopulation(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// );
// townPopulation(['Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000']
// );

function cityTaxes(name, population, treasury) {
  const city = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      this.population += Math.floor(this.population * percentage / 100);
    },
    applyRecession(percentage) {
      this.treasury -= Math.floor(this.treasury * percentage / 100);
    }
  };

  return city;
}

// const city =
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);

function factory(library, orders) {

  return orders.map(compose);

  function compose(order) {
    const result = Object.assign({}, order.template);

    for (let part of order.parts) {
      result[part] = library[part];
    }

    return result;
  }
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: 'ACME Printer' },
    parts: ['print']
  },
  {
    template: { name: 'Initech Scanner' },
    parts: ['scan']
  },
  {
    template: { name: 'ComTron Copier' },
    parts: ['scan', 'print']
  },
  {
    template: { name: 'BoomBox Stereo' },
    parts: ['play']
  }
];
const products = factory(library, orders);
console.log(products);
