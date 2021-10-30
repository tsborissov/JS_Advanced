function solution() {
    const sections = Array.from(document.querySelectorAll('section'));
    const giftInput = sections[0].querySelector('div input');
    const addGiftBtn = sections[0].querySelector('div button');
    const giftsList = sections[1].querySelector('ul');
    const sentGifts = sections[2].querySelector('ul');
    const discardedGifts = sections[3].querySelector('ul');

    addGiftBtn.addEventListener('click', addGift);

    function addGift(event) {
        const sendButton = e('button', {className: 'sendButton'}, 'Send');
        const discardButton = e('button', {className: 'discardButton'}, 'Discard');

        const currentGift = e('li', {className: 'gift'}, giftInput.value,
        sendButton,
        discardButton);

        sendButton.addEventListener('click', sendGift.bind(null, currentGift));
        discardButton.addEventListener('click', discardGift.bind(null, currentGift));

        giftInput.value = '';

        giftsList.appendChild(currentGift);

        const currentGiftsList = Array.from(giftsList.querySelectorAll('li'));
        currentGiftsList.sort((a, b) => a.textContent.localeCompare(b.textContent));
        giftsList.innerHTML = '';
        currentGiftsList.forEach(g => giftsList.appendChild(g));
    }

    function sendGift(gift) {
        const element = e('li', {}, gift.firstChild.textContent);
        gift.remove();

        sentGifts.appendChild(element);
    }

    function discardGift(gift) {
        const element = e('li', {}, gift.firstChild.textContent);
        gift.remove();

        discardedGifts.appendChild(element);
    }

    function e(type, attr, ...content) {
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