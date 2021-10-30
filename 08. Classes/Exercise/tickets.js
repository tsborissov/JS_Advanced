function solve(inputArr, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const database = [];

    for(const element of inputArr) {
        let [destination, price, status] = element.split('|');
        price = Number(price);

        database.push(new Ticket(destination, price, status));
    }

    let result = [];

    if (sortCriteria == 'price') {
        result = database.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
    } else {
        result = database.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
    }
    
    return result;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
));

console.log(solve(['Philadelphia|194.20|available',
'New York City|95.99|available',
'New York City|195.99|sold',
'Boston|126.20|departed'],
'price'
));