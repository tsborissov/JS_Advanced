function lowestPricesInCities(input){
    let products = {};

    input.forEach(element => {
        let [town, productName, price] = element.split(' | ');
        price = Number(price);

        if (!products[productName]){
            products[productName] = {};
        }

        products[productName][town] = price;
    });


    for (const product in products){
        let towns = Object.entries(products[product]);
        towns.sort((a, b) => a[1] - b[1]);
        const lowestPrice = towns[0][1];
        const town = towns[0][0];

        console.log(`${product} -> ${lowestPrice} (${town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Orange | 4',
'Sofia | Orange | 5',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);