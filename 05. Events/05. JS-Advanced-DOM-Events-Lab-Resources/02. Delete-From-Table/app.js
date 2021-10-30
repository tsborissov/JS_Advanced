function deleteByEmail() {
    const email = document.getElementsByName('email')[0].value;
    const rows = document.querySelectorAll('#customers tbody tr td:nth-child(2)');
    const result = document.getElementById('result');

    for (let td of rows) {
        if (td.textContent == email) {
            const row = td.parentNode;
            row.parentNode.removeChild(row);
            result.textContent = 'Deleted.'
            return;
        }
    }
    result.textContent = 'Not found.';
}