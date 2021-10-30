function calc() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let sum = num1 + num2;

    if (isNaN(sum)){
        sum = 'Error! Please use valid number!';
        document.getElementById('sum').size = sum.length;
    }

    document.getElementById('sum').value = sum;
}
