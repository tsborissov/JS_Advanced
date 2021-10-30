function sumNumbers(arg1, arg2){
    let num1 = Number(arg1);
    let num2 = Number(arg2);

    let result = 0;

    for (let i = num1; i <= num2; i++){
        result += i;
    }

    return result;
}

console.log(sumNumbers('1', '5'));
console.log(sumNumbers('-8', '20'));