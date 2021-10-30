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

        const moreInfoBtn = e('button', {class: 'moreBtn'}, 'More Info');
        const buyBtn = e('button', {class: 'buyBtn'}, 'Buy it');

        const trInfo = 
        e('tr', {class: 'info'},
            e('td', {}, model),
            e('td', {}, price.toFixed(2)),
            e('td', {},
                moreInfoBtn,
                buyBtn  
            )
        )

        const trMore = 
        e('tr', {className: 'hide'},
            e('td', {}, `Year: ${year}`),
            e('td', {colSpan: '3'}, `Description: ${description}`)
        )

        furnitureList.appendChild(trInfo);
        furnitureList.appendChild(trMore);

        moreInfoBtn.addEventListener('click', moreInfo.bind(null, trMore, moreInfoBtn));
        buyBtn.addEventListener('click', buy.bind(null, price, trInfo, trMore));
    }

    function moreInfo(targetRow, targetBtn) {
        targetRow.style.display = targetRow.style.display == 'contents' ? 'none' : 'contents';
        targetBtn.textContent = targetBtn.textContent == 'More Info' ? 'Less Info' : 'More Info';

    }

    function buy(price, targetInfo, targetMore) {
        furnitureList.removeChild(targetInfo);
        furnitureList.removeChild(targetMore);

        profit.textContent = (Number(profit.textContent) + Number(price)).toFixed(2);
    }

    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            // if (prop == 'class') {
            //     element.classList.add(attr[prop]);
            // }
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }

        return element;
    }
}
