class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(element) {
        if (typeof(element) != 'number') {
            throw new Error('Invalid input!');
        }

        this.collection.push(element);
        this.size++;
        this.collection = this.collection.sort((a, b) => a - b);
    }

    remove(index) {
        if (typeof(index) != 'number' || index < 0 || index >= this.collection.length) {
            throw new Error('Invalid index!');
        }

        this.collection.splice(index, 1);
        this.size--;
    }

    get(index) {
        if (typeof(index) != 'number' || index < 0 || index >= this.collection.length) {
            throw new Error('Invalid index!');
        }

        return this.collection[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);