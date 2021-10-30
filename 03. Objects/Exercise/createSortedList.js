function createSortedList(){
    let sortedList = {
        numbers: [],
        size: 0,
        add(element) {
            this.numbers.push(element);
            this.numbers.sort((a, b) => a - b);
            this.size = this.numbers.length;
        },
        remove(index) {
            if (index >= 0 && index <= this.numbers.length - 1){
                this.numbers.splice(index, 1);
                this.size = this.numbers.length;
            }
        },
        get(index) {
            if (index >= 0 && index <= this.numbers.length - 1){
                return this.numbers[index];
            }
        }
    };

    return sortedList;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list);
