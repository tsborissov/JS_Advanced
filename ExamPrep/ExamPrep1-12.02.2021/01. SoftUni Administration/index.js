function solve() {
    const inputForm = document.querySelector('form');
    const nameInp = document.querySelector("input[name='lecture-name']");
    const dateInp = document.querySelector("input[name='lecture-date']");
    const moduleSelect = document.querySelector("select[name='lecture-module']");
    const addBtn = document.querySelector('div button');
    const trainings = document.querySelector('.modules');
    const modules = {};

    addBtn.addEventListener('click', addLecture);

    function addLecture(event) {
        event.preventDefault();

        if (nameInp.value == '' || dateInp.value == '' || moduleSelect.value == 'Select module') {
            return;
        }

        const currentModuleName = moduleSelect.value;

        if (modules[currentModuleName] == undefined) {
            const moduleH3 = createElement('H3', {}, `${currentModuleName.toUpperCase()}-MODULE`);
            const moduleUl = createElement('UL', { id: `${currentModuleName}` });
            
            const moduleDiv = createElement('DIV', { className: 'module' });
            moduleDiv.appendChild(moduleH3);
            moduleDiv.appendChild(moduleUl);

            modules[currentModuleName] = [];
            trainings.appendChild(moduleDiv);
        }

        const deleteBtn = createElement('BUTTON', { className: 'red' }, 'Del')
        const lectureDate = dateInp.value;

        const lectureLi = createElement('LI', { className: 'flex' }, `${nameInp.value} - ${lectureDate.split('-').join('/').split('T').join(' - ')}`, deleteBtn);
        modules[currentModuleName].push({lectureLi, lectureDate});

        const currentUl = document.getElementById(currentModuleName);
        currentUl.innerHTML = '';

        deleteBtn.addEventListener('click', deleteLecture.bind(null, currentModuleName, lectureLi));

        modules[currentModuleName].sort((a, b) => a.lectureDate.localeCompare(b.lectureDate));

        modules[currentModuleName].forEach(l => {
            currentUl.appendChild(l.lectureLi);
        });

        console.log(modules);

        inputForm.reset();
    }

    function deleteLecture(moduleName, lectureLi) {
        const currentUl = document.getElementById(moduleName);

        const indexToRemove = modules[moduleName].indexOf(lectureLi);
        modules[moduleName].splice(indexToRemove, 1);

        if (modules[moduleName].length == 0) {
            delete modules[moduleName];
            lectureLi.parentNode.parentNode.remove();
        } else {
            currentUl.innerHTML = '';
            modules[moduleName].forEach(l => {
                currentUl.appendChild(l.lectureLi);
            });
        }

        console.log(modules);
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
};