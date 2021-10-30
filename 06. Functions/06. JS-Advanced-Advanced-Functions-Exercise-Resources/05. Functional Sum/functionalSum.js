function add(a) {
    let sum = a;

    function innerSum(b) {
        sum += b;
        return innerSum;
    }

    innerSum.toString = () => {
        return sum;
    }

    return innerSum;
}

console.log(add(4)(3)(5)(6).toString());
console.log(add(4)(3)(5)(6).toString());