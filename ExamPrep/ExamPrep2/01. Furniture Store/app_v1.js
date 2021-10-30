window.addEventListener('load', solve);

function solve() {
    const modelInp = document.getElementById('model');
    const yearInp = document.getElementById('year');
    const descriptionInp = document.getElementById('description');
    const priceInp = document.getElementById('price');
    const addBtn = document.getElementById('add');

    const furnitureList = document.getElementById('furniture-list');

    const profit = document.querySelector('.total-price');

    addBtn.addEventListener('click', addFurniture);

    function addFurniture(event) {
        event.preventDefault();

        const model = modelInp.value.trim();
        const year = Number(yearInp.value.trim());
        const description = descriptionInp.value.trim();
        const price = Number(priceInp.value.trim());

        if (model == '' || yearInp.value == '' || Number.isNaN(year) || year < 0 || description == '' || priceInp.value == '' || Number.isNaN(price) || price < 0) {
            return;
        }

        document.querySelector('form').reset();

        const tdName = document.createElement('td');
        tdName.textContent = model;
        const tdPrice = document.createElement('td');
        tdPrice.textContent = price.toFixed(2);

        const moreInfoBtn = document.createElement('button');
        moreInfoBtn.classList.add('moreBtn');
        moreInfoBtn.textContent = 'More Info';

        const buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';

        const tdActions = document.createElement('td');
        tdActions.appendChild(moreInfoBtn);
        tdActions.appendChild(buyBtn);

        const trInfo = document.createElement('tr');
        trInfo.classList.add('info');
        trInfo.appendChild(tdName);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(tdActions);


        const tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year.toFixed(0)}`;
        const tdDescr = document.createElement('td');
        tdDescr.colSpan = '3';
        tdDescr.textContent = `Description: ${description}`;

        const trMore = document.createElement('tr');
        trMore.classList.add('hide');
        trMore.style.display = 'none';
        trMore.appendChild(tdYear);
        trMore.appendChild(tdDescr);

        furnitureList.appendChild(trInfo);
        furnitureList.appendChild(trMore);

        moreInfoBtn.addEventListener('click', moreInfo.bind(null, trMore, moreInfoBtn));
        buyBtn.addEventListener('click', buy.bind(null, price, trInfo, trMore));
    }

    function moreInfo(targetRow, targetBtn) {
        targetRow.style.display = targetRow.style.display == 'none' ? 'contents' : 'none';
        targetBtn.textContent = targetBtn.textContent == 'More Info' ? 'Less Info' : 'More Info';

    }

    function buy(price, targetInfo, targetMore) {
        furnitureList.removeChild(targetInfo);
        furnitureList.removeChild(targetMore);

        profit.textContent = (Number(profit.textContent) + Number(price)).toFixed(2);
    }
}
