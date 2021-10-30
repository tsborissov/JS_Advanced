function printArrayWithDelimiter(array, delimiter){
    console.log(array.join(delimiter));
}

// printArrayWithDelimiter(['One', 
// 'Two', 
// 'Three', 
// 'Four', 
// 'Five'], 
// '-'
// );
// printArrayWithDelimiter(['How about no?', 
// 'I',
// 'will', 
// 'not', 
// 'do', 
// 'it!'], 
// '_'
// );

function printEveryNthElement(arr, step){
    const result = [];

    for (let i = 0; i < arr.length; i += step){
        result.push(arr[i]);
    }

    return result;
}

// console.log(printEveryNthElement(['5', 
// '20', 
// '31', 
// '4', 
// '20'], 
// 2
// ));
// console.log(printEveryNthElement(['dsa',
// 'asd', 
// 'test', 
// 'tset'], 
// 2
// ));
// console.log(printEveryNthElement(['1', 
// '2',
// '3', 
// '4', 
// '5'], 
// 6
// ));

function addRemoveElements(commands){
    let num = 1;
    let resultArr = [];

    commands.forEach(element => {
        if (element == 'add'){
            resultArr.push(num);
        } else {
            resultArr.pop();
        }
        num++;
    });

    if (resultArr.length){
        console.log(resultArr.join('\n'));
    } else {
        console.log('Empty');
    }
}

// addRemoveElements(['add', 
// 'add', 
// 'add', 
// 'add']
// );
// console.log('-'.repeat(10));
// addRemoveElements(['add', 
// 'add', 
// 'remove', 
// 'add', 
// 'add']
// );
// console.log('-'.repeat(10));
// addRemoveElements(['remove', 
// 'remove', 
// 'remove']
// );

function rotateArray(arr, rotations){
    rotations %= arr.length;

    for (let i = 0; i < rotations; i++){
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '), ` -> ${rotations}`);
}

// rotateArray(['1', 
// '2', 
// '3', 
// '4'], 
// 1000003
// );
// rotateArray(['Banana', 
// 'Orange', 
// 'Coconut', 
// 'Apple'], 
// 15
// );

function extractIncreasingSubsequence(numbers){
    let maxNum = numbers[0];

    const result = numbers.filter((el) => {
        if (el >= maxNum){
            maxNum = el;
            return true;
        }
    });

    return result;
}

// console.log(extractIncreasingSubsequence([0, -1, 1, -2, 2]));
// console.log(extractIncreasingSubsequence([1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24]
//     ));
// console.log(extractIncreasingSubsequence([1, 
//     2, 
//     3,
//     4]
//     ));
// console.log(extractIncreasingSubsequence([20, 
//     3, 
//     2, 
//     15,
//     6, 
//     1]
//     ));

function extractIncreasingSubsequence2(numbers){
    let maxNum = numbers[0];
    const result = [];

    numbers.forEach((el) => {
        if (el >= maxNum){
            result.push(el);
            maxNum = el;
        }
    });

    return result;
}

// console.log(extractIncreasingSubsequence2([0, -1, 1, -2, 2]));
// console.log(extractIncreasingSubsequence2([1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24]
//     ));
// console.log(extractIncreasingSubsequence2([1, 
//     2, 
//     3,
//     4]
//     ));
// console.log(extractIncreasingSubsequence2([20, 
//     3, 
//     2, 
//     15,
//     6, 
//     1]
//     ));

function extractIncreasingSubsequence3(numbers){
    let maxNum = numbers[0];
    const result = [];

    numbers.reduce((accumulated, current) => {
        if (current >= maxNum){
            maxNum = current;
            accumulated.push(current);
        }
        return accumulated;
    }, result);

    return result;
}

// console.log(extractIncreasingSubsequence3([0, -1, 1, -2, 2]));
// console.log(extractIncreasingSubsequence3([1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24]
//     ));
// console.log(extractIncreasingSubsequence3([1, 
//     2, 
//     3,
//     4]
//     ));
// console.log(extractIncreasingSubsequence3([20, 
//     3, 
//     2, 
//     15,
//     6, 
//     1]
//     ));

function listOfNames(names){
    names.sort((a, b) => a.localeCompare(b));

    names.forEach((name, index) => console.log(`${++index}.${name}`));
}

// listOfNames(["John", "Bob", "Christina", "Ema"]);

function sortingNumbers(numbers){
    const result = [];

    numbers.sort((a, b) => a - b);

    while(numbers.length){
        result.push(numbers.shift(), numbers.pop());
    }

    return result;
}

// console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

function sortByTwoCriteria(strings){

    strings.sort((a, b) => {
        if (a.length > b.length){
            return 1;
        } else if (a.length == b.length){
            return a.localeCompare(b);
        } else {
            return -1;
        }
    });

    console.log(strings.join('\n'));
}

// sortByTwoCriteria(['alpha', 
// 'beta', 
// 'gamma']
// );
// console.log('-'.repeat(10));
// sortByTwoCriteria(['Isacc', 
// 'Theodor', 
// 'Jack', 
// 'Harrison', 
// 'George']
// );
// console.log('-'.repeat(10));
// sortByTwoCriteria(['test', 
// 'Deny', 
// 'omen', 
// 'Default']
// );

function magicMatrices(matrix){
    const firstRowSum = matrix[0].reduce((acc, val) => acc + val);

    for (let i = 1; i < matrix.length; i++){
        const currentRowSum = matrix[i].reduce((acc, val) => acc + val);

        if (currentRowSum != firstRowSum){
            return false;
        }
    }

    for (let i = 0; i < matrix.length; i++){
        let currentColSum = 0;
        for (let j = 0; j < matrix.length; j++){
            currentColSum += matrix[j][i];
        }

        if (currentColSum != firstRowSum){
            return false;
        }
    }

    return true;
}

// console.log(magicMatrices([[4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]
//    ));
// console.log(magicMatrices([[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]
//    ));
// console.log(magicMatrices([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
//    ));

function ticTacToe(moves){

    const dashboard = [
        [false, false, false],
        [false, false, false], 
        [false, false, false]];

    function printDashboard(){
        dashboard.forEach((row) => console.log(row.join('\t')));
    }

    function checkWinning(player){

        if (dashboard[0][0] == player){
            if (dashboard[0][1] == player && dashboard[0][2] == player){
                return true;
            } else if (dashboard[1][0] == player && dashboard[2][0] == player){
                return true;
            } else if (dashboard[1][1] == player && dashboard[2][2] == player){
                return true;
            }
        }

        if (dashboard[1][1] == player){
            if (dashboard[0][1] == player && dashboard[2][1] == player){
                return true;
            } else if (dashboard[1][0] == player && dashboard[1][2] == player){
                return true;
            } else if (dashboard[0][2] == player && dashboard[2][0] == player){
                return true;
            }
        }

        if (dashboard[2][2] == player){
            if (dashboard[1][2] == player && dashboard[0][2] == player){
                return true;
            } else if (dashboard[2][1] == player && dashboard[2][0] == player){
                return true;
            }
        }

        return false;
    }
    
    let resultMessage = '';
    let currentPlayer = 'X';

    for (let i = 0; i < moves.length; i++){
       
        const [x, y] = moves[i].split(' ');

        if (dashboard[x][y]){
            console.log('This place is already taken. Please choose another!');
            continue;
        } else {
            dashboard[x][y] = currentPlayer;
        }

        if (checkWinning(currentPlayer)){
            resultMessage = `Player ${currentPlayer} wins!`;
            break;
        }

        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';

        var mergedArr = dashboard[0].concat(dashboard[1], dashboard[2]);
        
        if (mergedArr.reduce((acc, el) => acc && el)){
            resultMessage = 'The game ended! Nobody wins :(';
            break;
        }
    }

    console.log(resultMessage);
    printDashboard();
}

// ticTacToe([
// "0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// );
// console.log('-'.repeat(10));
// ticTacToe(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]
// );
// console.log('-'.repeat(10));
// ticTacToe(["0 1",
// "0 0",
// "0 2",
// "2 0",
// "1 0",
// "1 2",
// "1 1",
// "2 1",
// "2 2",
// "0 0"]
// );

function diagonalAttack(inputArr){

    const matrix = [];

    for (let i = 0; i < inputArr.length; i++) {
        let row = inputArr[i].split(' ').map(Number);
        matrix.push(row);
    }

    let x = 0;
    let y = matrix.length - 1;
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (const row of matrix){
        firstDiagonalSum += row[x++];
        secondDiagonalSum += row[y--];
    }

    if (firstDiagonalSum == secondDiagonalSum){
        for (const row of matrix){
            row.fill(firstDiagonalSum, y, x);
        }
    }


    matrix.forEach((row) => console.log(row.join(' ')));

}

diagonalAttack([
'5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);
console.log('-'.repeat(10));
diagonalAttack([
'1 1 1',
'1 1 1',
'1 1 0']);