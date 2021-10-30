function storeCatalogue(input){
    let catalogue = {};

    input.sort((a, b) => a.localeCompare(b));

    input.forEach(element => {
        const firstLetter = element[0];

        if (!catalogue[firstLetter]){
            catalogue[firstLetter] = {};
        }

        let [product, price] = element.split(' : ');
        price = Number(price);

        catalogue[firstLetter][product] = price;
    });

    for (const letter in catalogue){
        console.log(letter);

        for (const product in catalogue[letter])
        {
            console.log(`  ${product}: ${catalogue[letter][product]}`)
        }
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
storeCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);