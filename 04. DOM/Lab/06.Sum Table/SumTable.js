function sumTable() {
    const rows = document.getElementsByTagName('tr');

    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++){
        let rowSubtotal = 
            Number(rows[i].querySelector('input.quantity').value) *
            Number(rows[i].querySelector('input.cost').value);

        rows[i].querySelector('input.subTotal').value = rowSubtotal;
        sum += rowSubtotal;
    }

    document.getElementById('sum').value = sum;
    document.getElementById('sum').style = 'background-color:yellow';
}