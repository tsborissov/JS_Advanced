function solve() {
    const fields = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('#container button');
    const adoptionList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    addBtn.addEventListener('click', registerPet);

    function registerPet(event) {
        event.preventDefault();

        const input = {
            name: fields[0].value.trim(),
            age: fields[1].value.trim(),
            kind: fields[2].value.trim(),
            owner: fields[3].value.trim()
        };

        if (input.name == '' || input.kind == '' || input.owner == '' || input.age == '' || Number.isNaN(Number(input.age))) {
            return;
        }

        fields[0].value = '';
        fields[1].value = '';
        fields[2].value = '';
        fields[3].value = '';

        const registerLi = document.createElement('LI');

        const registerP = document.createElement('P');

        const nameStr = document.createElement('STRONG');
        nameStr.textContent = input.name;

        const ageStr = document.createElement('STRONG');
        ageStr.textContent = input.age;

        const kindStr = document.createElement('STRONG');
        kindStr.textContent = input.kind;

        registerP.appendChild(nameStr);
        registerP.appendChild(document.createTextNode(' is a '));
        registerP.appendChild(ageStr);
        registerP.appendChild(document.createTextNode(' year old '));
        registerP.appendChild(kindStr);

        // registerP.innerHTML = `<strong>${input.name}</strong> is a <strong>${input.age}</strong> year old <strong>${input.kind}</strong>`;

        const addSpan = document.createElement('SPAN');
        addSpan.textContent = `Owner: ${input.owner}`;

        const contactBtn = document.createElement('BUTTON');
        contactBtn.id = 'contactBtn';
        contactBtn.textContent = 'Contact with owner';
        contactBtn.addEventListener('click', takePet)

        registerLi.appendChild(registerP);
        registerLi.appendChild(addSpan);
        registerLi.appendChild(contactBtn);

        adoptionList.appendChild(registerLi);

        function takePet() {
            const inputOwner = document.createElement('INPUT');
            inputOwner.placeholder = 'Enter your names';

            const takeBtn = document.createElement('BUTTON');
            takeBtn.textContent = 'Yes! I take it!';
            takeBtn.addEventListener('click', adopt.bind(null, registerLi));

            const div = document.createElement('DIV');
            div.appendChild(inputOwner);
            div.appendChild(takeBtn);

            registerLi.removeChild(contactBtn);
            registerLi.appendChild(div);
        }
    }

    function adopt(targetLi) {
        const newOwner = targetLi.querySelector('INPUT').value;

        if (newOwner == '') {
            return;
        }

        targetLi.querySelector('span').textContent = `New owner: ${newOwner}`;
        targetLi.removeChild(targetLi.querySelector('DIV'));

        const checkedBtn = document.createElement('button');
        checkedBtn.textContent = 'Checked';
        checkedBtn.addEventListener('click', () => {adoptedList.removeChild(targetLi)});

        targetLi.appendChild(checkedBtn);

        adoptedList.appendChild(targetLi);
    }
}