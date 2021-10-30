window.addEventListener('load', solve);

function solve() {
    const inputForm = document.querySelector('form');
    const genreInp = document.getElementById('genre');
    const nameInp = document.getElementById('name');
    const authorInp = document.getElementById('author');
    const dateInp = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');

    const songsContainer = document.querySelector('#all-hits .all-hits-container');
    const savedSongs = document.querySelector('#saved-hits .saved-container');
    const likes = document.querySelector('.likes p');

    addBtn.addEventListener('click', addSong);

    function addSong(event) {
        event.preventDefault();

        if (genreInp.value == '' || nameInp.value == '' || authorInp == '' || dateInp.value == '') {
            return;
        }

        const saveBtn = createElement('BUTTON', { className: 'save-btn' }, 'Save song');
        const likeBtn = createElement('BUTTON', { className: 'like-btn' }, 'Like song');
        const deleteBtn = createElement('BUTTON', { className: 'delete-btn' }, 'Delete');

        const songImg = document.createElement('IMG');
        songImg.src = './static/img/img.png'

        const songDiv = createElement('DIV', { className: 'hits-info' },
            songImg,
            createElement('H2', {}, `Genre: ${genreInp.value}`),
            createElement('H2', {}, `Name: ${nameInp.value}`),
            createElement('H2', {}, `Author: ${authorInp.value}`),
            createElement('H3', {}, `Date: ${dateInp.value}`),
            saveBtn,
            likeBtn,
            deleteBtn);

        saveBtn.addEventListener('click', saveSong.bind(null, songDiv, saveBtn, likeBtn));
        likeBtn.addEventListener('click', likeSong);
        deleteBtn.addEventListener('click', deleteSong.bind(null, songDiv));

        songsContainer.appendChild(songDiv);

        inputForm.reset();
    }

    function saveSong(song, saveBtn, likeBtn) {
        saveBtn.remove();
        likeBtn.remove();
        savedSongs.appendChild(song);
    }

    function likeSong(event) {

        let totalLikes = Number(likes.textContent.split(': ')[1]);
        totalLikes++;
        likes.textContent = `Total Likes: ${totalLikes}`;
        event.target.disabled = 'true';
    }

    function deleteSong(song) {
        song.remove();
    }

    function createElement(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
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