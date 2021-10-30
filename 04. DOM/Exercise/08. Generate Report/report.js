function generateReport() {
    const cols = document.getElementsByTagName('input');
    const rows = document.querySelectorAll('tbody tr');
    const output = document.getElementById('output');
    const result = [];

    const selectedCols = [];
    for (let i = 0; i < cols.length; i++) {
        if (cols[i].checked) {
            selectedCols.push({
                name: cols[i].name,
                index: i
            });
        }
    }

    if (selectedCols.length == 0) {
        output.textContent = 'Please, select at least one column!';
        return;
    }

    for (let row of rows) {
        const cells = row.children;

        let rowReport = {};

        for (const col of selectedCols) {
            rowReport[col.name] = cells[col.index].textContent;
        }

        result.push(rowReport);
    }

    output.textContent = JSON.stringify(result);
}