function solve() {
    const selectTo = document.getElementById('selectMenuTo');

    const binElement = document.createElement('option');
    binElement.innerText = 'Binary';
    binElement.value = 'binary';
    selectTo.appendChild(binElement);

    const hexElement = document.createElement('option');
    hexElement.innerText = 'Hexadecimal';
    hexElement.value = 'hexadecimal';
    selectTo.appendChild(hexElement);

    const input = document.getElementById('input').value;
    const selectFrom = document.getElementById('selectMenuFrom');
    let button = document.getElementsByTagName('button')[0];
    let result = document.getElementById('result');

    button.addEventListener('click', convert);

    function convert() {
        if (selectTo.value == 'binary'){
            result.value = Number(input).toString(2);
        } else if (selectTo.value == 'hexadecimal') {
            result.value = (Number(input).toString(16)).toUpperCase();
        }       
    }
}