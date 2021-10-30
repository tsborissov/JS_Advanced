function solution(num) {
    return function (x) {
        return x + num;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

console.log('-'.repeat(10));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
