function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('#main div button');
    const encodeBtn = buttons[0];
    const decodeBtn = buttons[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode(e) {
        const input = e.target.parentElement.querySelector('textarea');
        const output = e.target.parentElement.parentElement.lastElementChild.querySelector('textarea');

        const encodedMessage = 
        Array
            .from(input.value)
            .map(c => String.fromCharCode(c.charCodeAt(0) + 1))
            .join('');

        output.value = encodedMessage;
        input.value = '';
    }

    function decode(e) {
        const textArea = e.target.parentElement.querySelector('textarea');
        const decodedMessage = 
            Array
                .from(textArea.value)
                .map(c => String.fromCharCode(c.charCodeAt(0) - 1))
                .join('');

        textArea.value = decodedMessage;
    }
}