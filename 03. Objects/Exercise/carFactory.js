function carFactory(orderObj){
    
    function getEngine(power){
        const engine = {};

        if (power <= 90){
            engine.power = 90;
            engine.volume = 1800;
        } else if (power <= 120){
            engine.power = 120;
            engine.volume = 2400;
        } else {
            engine.power = 200;
            engine.volume = 3500;
        }

        return engine;
    }
    
    const car = {};

    car.model = orderObj.model;
    car.engine = getEngine(orderObj.power);
    car.carriage = {};
    car.carriage.type = orderObj.carriage;
    car.carriage.color = orderObj.color;

    const wheelSize = orderObj.wheelsize % 2 == 0 ? orderObj.wheelsize - 1 : orderObj.wheelsize;
    car.wheels = new Array(4).fill(wheelSize);

    return car;
}

/*
{ model: 'VW Golf II',
  engine: { power: 90, 
            volume: 1800 },
  carriage: { type: 'hatchback',
              color: 'blue' },
  wheels: [13, 13, 13, 13] }

*/

/*
Small engine: { power: 90, volume: 1800 }
Normal engine: { power: 120, volume: 2400 }
Monster engine: { power: 200, volume: 3500 }

*/

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));