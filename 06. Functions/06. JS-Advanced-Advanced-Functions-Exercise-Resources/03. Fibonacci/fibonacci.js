function getFibonator() {
    const fibNumbers = [0, 1];

    function nextFib (){
        const nextNum = fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2];
        fibNumbers.push(nextNum);
        return fibNumbers[fibNumbers.length - 2];
    }

    return nextFib;
}



let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
