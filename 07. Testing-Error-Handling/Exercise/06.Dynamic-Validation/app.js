function validate() {
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    const input = document.querySelector('#email');
    input.addEventListener('change', onChange);

    function onChange(event) {
        if(regex.test(event.target.value)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}