function solution() {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    function manager(input) {

        const report = function report() {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }

        const restock = function restock(microelement, quantity) {
            ingredients[microelement] += quantity;
            return 'Success';
        }

        const prepare = function prepare(recipe, quantity) { 
            const currentReceipe = recipes[recipe];

            for (const ingredient in currentReceipe){
                if (currentReceipe[ingredient] * quantity > ingredients[ingredient]){
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (const ingredient in currentReceipe) {
                ingredients[ingredient] -= currentReceipe[ingredient] * quantity;
            }

            return 'Success';
        }

        const commandParser = {
            restock,
            prepare,
            report,
        };

        let [command, target, quantity] = input.split(' ');
        quantity = Number(quantity);

        return commandParser[command](target, quantity);
    }

    return manager;
}

let manager = solution();
console.log (manager("restock flavour 50"));
console.log (manager("prepare lemonade 4"));
console.log (manager("restock carbohydrate 10"));
console.log (manager("restock flavour 10"));
console.log (manager("prepare apple 1"));
console.log (manager("restock fat 10"));
console.log (manager("prepare burger 1"));
console.log(manager("report"));
