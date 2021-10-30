function addItem() {
    let input = document.getElementById('newItemText');

    if (input.value.length == 0) return;

    let li = document.createElement('li');

    li.appendChild(document.createTextNode(input.value));

    let a = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    a.appendChild(linkText);
    a.href = '#';
    a.addEventListener('click', removeRow);
    li.appendChild(a);

    document.getElementById('items').appendChild(li);
    input.value = '';

    function removeRow(ev) {
        const answer = confirm('Are you sure?');
        if (answer == true) {
            const targetElement = ev.target.parentNode;
            targetElement.parentNode.removeChild(targetElement);
        }
    }
}