class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
        this.titleDiv;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        if (this.titleDiv) {
            if (value) {
                this.titleDiv.classList.add('online');
            } else {
                this.titleDiv.classList.remove('online');
            }
        }
        this._online = value;        
    }

    render(id) {
        const article = document.createElement('article');

        const infoBtn = document.createElement('button');
        infoBtn.textContent = '\u2139';
        infoBtn.addEventListener('click', () => {
            infoDiv.style.display = infoDiv.style.display == 'block' ? 'none' : 'block';
        });

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.textContent = `${this.firstName} ${this.lastName}`;
        titleDiv.appendChild(infoBtn);
        this.titleDiv = titleDiv;

        const phoneSpan = document.createElement('span');
        phoneSpan.textContent = `\u260E ${this.phone}`;
        const emailSpan = document.createElement('span');
        emailSpan.textContent = `\u2709 ${this.email}`;

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
        infoDiv.style.display = 'none';
        infoDiv.appendChild(phoneSpan);
        infoDiv.appendChild(emailSpan);

        article.appendChild(titleDiv);
        article.appendChild(infoDiv);

        const output = document.getElementById(id);
        output.appendChild(article);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];

contacts.forEach(c => c.render('main'));

setTimeout(() => contacts[0].online = true, 4000);
setTimeout(() => contacts[1].online = true, 3000);
setTimeout(() => contacts[2].online = true, 2000);