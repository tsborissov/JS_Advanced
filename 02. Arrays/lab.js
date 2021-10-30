function evenPositions(array){
    let result = [];

    for (let i = 0; i < array.length; i += 2){
        if (i % 2 == 0){
            result.push(array[i]);
        }
    }
    console.log(result.join(' '));
}

// evenPositions(['20', '30', '40', '50', '60']);
// evenPositions(['5', '10']);

function lastKNumbersSequence(n, k){
    let resultArr = [1];

    for (let i = 1; i < n; i++){
        let startIndex = i - k;
        let endIndex = k + startIndex;

        if (startIndex < 0){
            startIndex = 0;
        }

        let nextElement = 0;
        for (let j = startIndex; j < endIndex; j++){
            nextElement += resultArr[j];
        }
        
        resultArr.push(nextElement);
    }

    return resultArr;
}

// console.log(lastKNumbersSequence(6, 3));
// console.log('-'.repeat(10));
// console.log(lastKNumbersSequence(8, 2));

function sumFirstLast(strings){
    return Number(strings[0]) + Number(strings[strings.length - 1]);
}

// console.log(sumFirstLast(['20', '30', '40']));
// console.log(sumFirstLast(['5', '10']));

function negativePositiveNumbers(numbers){
    let resultArr = [];

    for (let num of numbers){
        if (num < 0){
            resultArr.unshift(num);
        } else {
            resultArr.push(num);
        }
    }

    console.log(resultArr.join('\n'));
}

// negativePositiveNumbers([7, -2, 8, 9]);
// console.log('-'.repeat(10));
// negativePositiveNumbers([3, -2, 0, -1]);

function smallestTwoNumbers(numbers){
    let resultArr = numbers.sort((a, b) => a - b);

    resultArr.splice(2, resultArr.length - 2);

    console.log(resultArr.join(' '));
}

// smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

function biggerHalf(numbers){
    const middle = Math.floor(numbers.length / 2);
    numbers.sort((a, b) => a - b);
    let resultArr = numbers.splice(middle)

    return resultArr;
}

// console.log(biggerHalf([4, 7, 2, 5]));
// console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

function pieceOfPie(inputArr, firstFlavor, secondFlavor){
    const startIndex = inputArr.indexOf(firstFlavor);
    const endIndex = inputArr.indexOf(secondFlavor);

    return inputArr.slice(startIndex, endIndex + 1);
}

// console.log(pieceOfPie(['Pumpkin Pie',
// 'Key Lime Pie',
// 'Cherry Pie',
// 'Lemon Meringue Pie',
// 'Sugar Cream Pie'],
// 'Key Lime Pie',
// 'Lemon Meringue Pie'
// ));
// console.log(pieceOfPie(['Apple Crisp',
// 'Mississippi Mud Pie',
// 'Pot Pie',
// 'Steak and Cheese Pie',
// 'Butter Chicken Pie',
// 'Smoked Fish Pie'],
// 'Pot Pie',
// 'Smoked Fish Pie'
// ));

function processOddPositions(numbers){
    let result = numbers
    .map((v, i) => {
        if (i % 2 == 1){
            return v * 2;
        }
    })
    .reverse();

    console.log(result.join(' '));
}

// processOddPositions([10, 15, 20, 25]);
// processOddPositions([3, 0, 10, 4, 7, 3]);

function biggestElement(numbers){
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let row of numbers){
        for (let num of row){
            if (num > biggest){
                biggest = num;
            }
        }
    }

    return biggest;
}

// console.log(biggestElement([[20, 50, 10],
//     [8, 33, 145]]));
// console.log(biggestElement([[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]));

// function diagonalSums(numbers){
//     let sums = [];
//     let sumPrimary = 0;
//     let sumSecondary = 0;
//     let j = numbers.length - 1;

//     for (let i = 0; i < numbers.length; i++){
//         sumPrimary += numbers[i][i];
//         sumSecondary += numbers[i][j--];
//     }

//     sums.push(sumPrimary, sumSecondary);
 
//     console.log(sums.join(' '));
// }

function diagonalSums(numbers){
    let sumPrimary = 0;
    let sumSecondary = 0;
    let firstIndex = 0;
    let secondIndex = numbers.length - 1;

    numbers.forEach(row => {
        sumPrimary += row[firstIndex++];
        sumSecondary += row[secondIndex--];
    });
 
    console.log(sumPrimary + ' ' + sumSecondary);
}

// diagonalSums([[20, 40], [10, 60]]);
// diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);

function equalNeighbors(inputArr){
    let matches = 0;

    for (let i = 0; i < inputArr.length; i++){
        for (let j = 0; j < inputArr.length - 1; j++){
            if (inputArr[i][j] == inputArr[i][j + 1]){
                matches++;
            }
        }
    }

    for (let i = 0; i < inputArr.length - 1; i++){
        for (let j = 0; j < inputArr.length; j++){
            if (inputArr[i][j] == inputArr[i + 1][j]){
                matches++;
            }
        }
    }

    return matches;
}

// console.log(equalNeighbors([
// ['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]
// ));
// console.log(equalNeighbors([
// ['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]
// ));