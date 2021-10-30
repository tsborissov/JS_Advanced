function solve(input) {
    const carRegister = new Map();

    for (const element of input) {
        let [brand, model, quantity] = element.split(' | ');
        quantity = Number(quantity);

        if (!carRegister.has(brand)) {
            carRegister.set(brand, new Map());
        }

        if (!carRegister.get(brand).has(model)) {
            carRegister.get(brand).set(model, quantity);
        } else {
            quantity += carRegister.get(brand).get(model);
            carRegister.get(brand).set(model, quantity);
        }
    }

    for (let [brand, models] of carRegister) {
        console.log(brand);
        for (let [model, value] of models) {
            console.log(`###${model} -> ${value}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q7 | 2000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'BMW | X5 | 1500',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);