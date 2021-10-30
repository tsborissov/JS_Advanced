function solve() {

  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  const table = document.querySelector('table tbody');
  output.value = '';

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(e) {

    if (input.value == '') return;

    const data = JSON.parse(input.value);

    for (const furniture of data) {

      const tr = document.createElement('tr');

      tr.appendChild(createCell('img', {src: furniture.img}));
      tr.appendChild(createCell('p', {}, furniture.name));
      tr.appendChild(createCell('p', {}, furniture.price));
      tr.appendChild(createCell('p', {}, furniture.decFactor));
      tr.appendChild(createCell('input', {type: 'checkbox'}));

      table.appendChild(tr);
    }

    function createCell(nestedTag, props, content) {
      const cell = document.createElement('td');
      const nested = document.createElement(nestedTag);

      for (let prop in props) {
        nested[prop] = props[prop];
      }

      if (content) {
        nested.textContent = content;
      }

      cell.appendChild(nested);

      return cell;
    }
  }

  function buy(e) {
    const rows = Array
      .from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(c => c.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent)
      }));

      const result = {
        boughtFurniture: [],
        totalPrice: 0,
        totalDecFactor: 0
      }

      for (const row of rows) {
        result.boughtFurniture.push(row.name);
        result.totalPrice += row.price;
        result.totalDecFactor += row.decFactor;
      }

      output.value += `Bought furniture: ${result.boughtFurniture.join(', ')}\n`;
      output.value += `Total price: ${result.totalPrice.toFixed(2)}\n`;
      output.value += `Average decoration factor: ${result.totalDecFactor / result.boughtFurniture.length}`;
  }
}