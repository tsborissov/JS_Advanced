function addItem() {
    let input = document.getElementById('newItemText');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    document.getElementById('items').appendChild(li);
    input.value = '';
}