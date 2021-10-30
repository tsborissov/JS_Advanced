function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    const menu = document.querySelector('#menu');

    const option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;

    menu.appendChild(option);
    
    text.value = '';
    value.value = '';
}