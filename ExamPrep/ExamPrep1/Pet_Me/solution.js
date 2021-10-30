function solve() {
    const [nameInp, ageInp, kindInp, ownerInp, addBtn] = Array.from(document.querySelector('#container').children);
    const petsList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    addBtn.addEventListener('click', addPet);

    function addPet(event) {
        event.preventDefault();

        const name = nameInp.value.trim();
        const age = ageInp.value.trim();
        const kind = kindInp.value.trim();
        const owner = ownerInp.value.trim();

        if (name == '' || kind == '' || owner == '' || age == '' || Number.isNaN(Number(age))) {
            return;
        }
        
        nameInp.value = '';
        ageInp.value = '';
        kindInp.value = '';
        ownerInp.value = '';

        const nameStr = document.createElement('strong');
        nameStr.textContent = name;
        const ageStr = document.createElement('strong');
        ageStr.textContent = age;
        const kindStr = document.createElement('strong');
        kindStr.textContent = kind;

        const p = document.createElement('p');
        p.appendChild(nameStr);
        p.appendChild(document.createTextNode(' is a '));
        p.appendChild(ageStr);
        p.appendChild(document.createTextNode(' year old '));
        p.appendChild(kindStr);

        const span = document.createElement('span');
        span.textContent = `Owner: ${owner}`;

        const contactBtn = document.createElement('button');
        contactBtn.id = 'contactOwnerBtn';
        contactBtn.textContent = 'Contact with owner';
        contactBtn.addEventListener('click', contactOwner);

        const li = document.createElement('li');
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(contactBtn);

        petsList.appendChild(li);
    }

    function contactOwner(event) {
        const targetLi = event.target.parentNode;

        targetLi.removeChild(targetLi.querySelector('#contactOwnerBtn'));
        
        const newOwnerInp = document.createElement('input');
        newOwnerInp.id = 'newOwnerInp';
        newOwnerInp.placeholder = 'Enter your names';

        const takeBtn = document.createElement('button');
        takeBtn.id = 'takeBtn';
        takeBtn.textContent = 'Yes! I take it!';
        takeBtn.addEventListener('click', adopt);

        const div = document.createElement('div');
        div.appendChild(newOwnerInp);
        div.appendChild(takeBtn);

        targetLi.appendChild(div);
    }

    function adopt(event) {
        const targetLi = event.target.parentNode.parentNode;

        const newOwnerName = targetLi.querySelector('#newOwnerInp').value.trim();

        if (newOwnerName == ''){
            return;
        }

        targetLi.querySelector('span').textContent = `New Owner: ${newOwnerName}`;
        targetLi.removeChild(targetLi.querySelector('div'));

        adoptedList.appendChild(targetLi);

        const checkedBtn = document.createElement('button');
        checkedBtn.textContent = 'Checked';
        checkedBtn.addEventListener('click', () => {adoptedList.removeChild(targetLi)});
        targetLi.appendChild(checkedBtn);
    }
}