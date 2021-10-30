function solve() {
    const [nameInp, hallInp, priceInp] = document.querySelectorAll('#container input');

    const addMovieForm = document.querySelector('#add-new');

    const clearBtn = document.querySelector('#archive button');

    const moviesUl = document.querySelector('#movies ul');
    const archiveUl = document.querySelector('#archive ul');

    addMovieForm.addEventListener('submit', addMovie);
    clearBtn.addEventListener('click', clearArchive);

    function addMovie(event) {
        event.preventDefault();

        const name = nameInp.value;
        const hall = hallInp.value;
        const price = Number(priceInp.value);

        if (!name || !hall || isNaN(price)) {
            return;
        }

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = name;
        li.appendChild(span);

        const strongHall = document.createElement('strong');
        strongHall.textContent = `Hall: ${hall}`;
        li.appendChild(strongHall);

        const div = document.createElement('div');

        const strongPrice = document.createElement('strong');
        strongPrice.textContent = price.toFixed(2);
        div.appendChild(strongPrice);

        const input = document.createElement('input');
        input.placeholder = 'Tickets sold';
        div.appendChild(input);

        const button = document.createElement('button');
        button.textContent = 'Archive';
        button.addEventListener('click', archive);
        div.appendChild(button);

        li.appendChild(div);
        moviesUl.appendChild(li);

        nameInp.value = '';
        hallInp.value = '';
        priceInp.value = '';
    }

    function archive(event) {
        const soldQuantity = Number(event.target.parentElement.querySelector('input').value);

        if (isNaN(soldQuantity) || soldQuantity == 0) {
            return;
        }

        const targetMovie = event.target.parentElement.parentElement;
        const movieName = targetMovie.querySelector('span').textContent;
        const total = Number(targetMovie.querySelector('div strong').textContent) * soldQuantity;

        const li = document.createElement('li');

        li.innerHTML = `<span>${movieName}</span>
            <strong>Total amount: ${total.toFixed(2)}</strong>
            <button>Delete</button>`;

        const button = li.querySelector('button');
        button.addEventListener('click', deleteArchived);

        archiveUl.appendChild(li);
        targetMovie.remove();
    }

    function deleteArchived(event) {
        const targetRow = event.target.parentElement;
        targetRow.remove();
    }

    function clearArchive(event) {
        archiveUl.innerHTML = '';
    }
}