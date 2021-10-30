function buyFruit(fruit, weight, price){
    let weightKilograms = weight / 1000;
    let totalPrice = weightKilograms * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKilograms.toFixed(2)} kilograms ${fruit}.`);
}

// buyFruit('orange', 2500, 1.80);

function gsd(num1, num2){
    let result = 0;
    const maxNum = Math.max(num1, num2);
    const minNum = Math.min(num1, num2);

    if (maxNum % minNum == 0){
        result = minNum;
    } else {
        for (let i = minNum; i > 0; i--){
            if (minNum % i == 0 && maxNum % i == 0){
                result = i;
                break;
            }
        }
    }

    console.log(result);
}

// gsd(15, 5);
// gsd(2154, 458);

function sameDigits(number){
    let areEqual = true;
    const numberAsString = number.toString();
    let sum = Number(numberAsString[0]);
    const length = numberAsString.length;
    
    for (let i = 1; i < length; i++){
        sum += Number(numberAsString[i]);
        if (numberAsString[i - 1] != numberAsString[i] && areEqual){
            areEqual = false;
        }
    }

    console.log(areEqual);
    console.log(sum);
}

// sameDigits(2222222);
// sameDigits(1234);

function previousDay(year, month, day){
    const previousDate = new Date(year, month - 1, day - 1);

    let resultYear = previousDate.getFullYear();
    let resultMonth = previousDate.getMonth() + 1;
    let resultDay = previousDate.getDate();

    console.log(`${resultYear}-${resultMonth}-${resultDay}`);
}

// previousDay(2016, 9, 30);
// previousDay(2016, 10, 1);

function timeToWalk(steps, length, speed){
    speed = speed * 1000 / 3600; // convert from km/h to m/s
    let distance = steps * length;
    let restsTime = Math.floor(distance / 500) * 60;
    let walkTime = (distance / speed + restsTime) * 1000; // in milliseconds

    let date = new Date(walkTime);

    let resultHours = date.getUTCHours().toString().padStart(2, 0);
    let resultMinutes = date.getMinutes().toString().padStart(2, 0);
    let resultSeconds = Math.round((date.getSeconds() * 1000 + date.getMilliseconds()) / 1000).toString().padStart(2, 0);

    console.log(`${resultHours}:${resultMinutes}:${resultSeconds}`);
}

// timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);
// timeToWalk(496, 0.70, 5);

function roadRadar(speed, area){
    let limit = 0;

    switch (area){
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }

    let difference = speed - limit;
    let status = '';
    let result = '';

    if (difference <= 0){
        result = `Driving ${speed} km/h in a ${limit} zone`;
    } else {
        if (difference <= 20){
            status = 'speeding';
        } else if (difference <= 40){
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        result = `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
    }

    console.log(result);
}

// roadRadar(40, 'city');
// roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
// roadRadar(200, 'motorway');

function cookingByNumbers(num, op1, op2, op3, op4, op5){
    let array = [op1, op2, op3, op4, op5];

    const operations = {
        chop(n) { return n / 2; },
        dice(n) { return Math.sqrt(n); },
        spice(n) { return n + 1; },
        bake(n) { return n * 3; },
        fillet(n) { return n * 0.8; }
    };

    // function chop(n){
    //     return n / 2;
    // }

    // function dice(n){
    //     return Math.sqrt(n);
    // }

    // function spice(n){
    //     return n + 1;
    // }

    // function bake(n){
    //     return n * 3;
    // }

    // function fillet(n){
    //     return n * 0.8;
    // }

    let result = num;

    for (let i = 0; i < array.length; i++){
        // switch (array[i]){
        //     case 'chop': result = chop(result); break;
        //     case 'dice': result = dice(result); break;
        //     case 'spice': result = spice(result); break;
        //     case 'bake': result = bake(result); break;
        //     case 'fillet': result = fillet(result); break;
        // }

        result = operations[array[i]](result);

        console.log(result);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

function validityChecker(x1, y1, x2, y2){
    
    function calcDistance(x1, y1, x2, y2){
        let a = Math.abs(x1 - x2);
        let b = Math.abs(y1 - y2);

        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }

    let pointsArray = [x1, y1, x2, y2];
    let pointsCount = pointsArray.length / 2;
    let result = '';

    for (let i = 0; i <= pointsCount; i += 2){
        let currentX = pointsArray[i];
        let currentY = pointsArray[i + 1];

        if (Number.isInteger(calcDistance(currentX, currentY, 0, 0))){
            result = 'valid';
        } else {
            result = 'invalid';
        }
        console.log(`{${currentX}, ${currentY}} to {0, 0} is ${result}`);
    }

    if (Number.isInteger(calcDistance(x1, y1, x2, y2))){
        result = 'valid';
    } else {
        result = 'invalid';
    }
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`);
}

// validityChecker(3, 0, 0, 4);
// validityChecker(2, 1, 1, 1);

function wordsUppercase(inputString){

    if (!inputString){
        return;
    }

    const regex = /[A-Za-z0-9]+/g;
    let matches = inputString.match(regex);
    let result = matches.join(', ').toUpperCase();
    console.log(result);
}

// wordsUppercase('Hi, how are 4you?');
// wordsUppercase('hello');
// wordsUppercase('h');
// wordsUppercase('1');
// wordsUppercase('');
// wordsUppercase('');
// wordsUppercase();