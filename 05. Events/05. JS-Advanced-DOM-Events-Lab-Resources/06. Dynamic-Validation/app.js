function validate() {
    let input = document.getElementById('email');

    //input.addEventListener('change', emailChanged);
    input.addEventListener('input', emailChanged);

    function emailChanged({target}) { // destructured event.target to target -> {target}
        const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (regex.test(target.value)) {
            target.classList.remove('error');
        } else {
            target.classList.add('error');
        }
    }
}