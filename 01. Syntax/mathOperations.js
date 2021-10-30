function mathOperations(num1, num2, operator){
    let result;
    switch (operator){
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result);
}

mathOperations(3, 2, '+');
mathOperations(3, 2, '-');
mathOperations(3, 2, '*');
mathOperations(3, 2, '/');
mathOperations(3, 2, '%');
mathOperations(3, 2, '**');