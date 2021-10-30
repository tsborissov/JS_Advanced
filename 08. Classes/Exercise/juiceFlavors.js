function juice(inputArr) {
    const juice = {};
    const bottles = {};
    const quantityPerBottle = 1000;

    for (const element of inputArr) {
        let [fruit, quantity] = element.split(' => ');
        quantity = Number(quantity);

        if (!juice[fruit]) {
            juice[fruit] = 0;
        }
        juice[fruit] += quantity;

        if (juice[fruit] >= 1000) {
            if (!bottles[fruit]) {
                bottles[fruit] = 0;
            }

            bottles[fruit] += parseInt(juice[fruit] / quantityPerBottle);
            juice[fruit] = juice[fruit] % quantityPerBottle;
        }
    }

    for (let bottle in bottles) {
        console.log(`${bottle} => ${bottles[bottle]}`);
    }
}

juice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

juice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);