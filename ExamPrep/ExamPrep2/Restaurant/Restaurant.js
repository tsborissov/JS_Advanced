class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (const element of products) {
            let [name, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if (price <= this.budgetMoney) {
                if (this.stockProducts[name] == undefined) {
                    this.stockProducts[name] = quantity;
                } else {
                    this.stockProducts[name] += quantity;
                }
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal] != undefined) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        const products = {};
        for (const element of neededProducts) {
            const splitIndex = element.lastIndexOf(' ');
            const name = element.substring(0, splitIndex);
            const quantity = Number(element.substring(splitIndex + 1, element.length));

            if (products[name] == undefined) {
                products[name] = quantity;
            } else {
                products[name] += quantity;
            }
        }

        this.menu[meal] = { products, price };
        const count = Object.keys(this.menu).length;

        return `Great idea! Now with the ${meal} we have ${count} ${count == 1 ? 'meal' : 'meals'} in the menu, other ideas?`;
    }

    showTheMenu() {
        const result = [];

        if (Object.keys(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        for (const meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal].price}`);
        }

        return result.join('\n');
    }

    makeTheOrder(meal) {
        if (this.menu[meal] == undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        
        for (const productNeeded in this.menu[meal].products) {

            if (this.stockProducts[productNeeded] == undefined || this.stockProducts[productNeeded] < this.menu[meal].products[productNeeded]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

            this.stockProducts[productNeeded] -= this.menu[meal].products[productNeeded];
            this.budgetMoney += this.menu[meal].price;
        }

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.menu);

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));

console.log(kitchen.makeTheOrder('Pizza'));
