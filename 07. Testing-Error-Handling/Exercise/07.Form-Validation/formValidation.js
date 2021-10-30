function validate() {
    const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    const passwordRegex = /^[A-Za-z0-9_]{5,15}$/;
    const emailRegex = /^\S*@\S*\.\S*$/;

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPass = document.getElementById('confirm-password');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const isCompany = document.getElementById('company');
    const submitBtn = document.getElementById('submit');
    const validDiv = document.getElementById('valid');

    isCompany.addEventListener('change', showHideCompany);
    submitBtn.addEventListener('click', submitInfo);

    function showHideCompany(event) {
        if (event.target.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function submitInfo(event) {
        event.preventDefault();

        validateUsername();
        validateEmail();
        validatePasswords();
        validateCompanyNumber();

        const isValidForm = validateUsername() && validateEmail() && validatePasswords() && validateCompanyNumber();

        if (isValidForm) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }

    }

    function validateUsername() {
        if (usernameRegex.test(username.value)) {
            username.style.borderColor = '';
            return true;
        } else {
            username.style.borderColor = 'red';
            return false;
        }
    }

    function validateEmail() {
        if (emailRegex.test(email.value)) {
            email.style.borderColor = '';
            return true;
        } else {
            email.style.borderColor = 'red';
            return false;
        }
    }

    function validatePasswords() {
        if (passwordRegex.test(password.value) && passwordRegex.test(confirmPass.value) && password.value == confirmPass.value) {
            password.style.borderColor = '';
            confirmPass.style.borderColor = '';
            return true;
        } else {
            password.style.borderColor = 'red';
            confirmPass.style.borderColor = 'red';
            return false;
        }
    }

    function validateCompanyNumber() {
        if(isCompany.checked) {
            if (companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.borderColor = '';
                return true;
            } else {
                companyNumber.style.borderColor = 'red';
                return false;
            }
        } else {
            companyNumber.style.borderColor = '';
            return true;
        }
    }
}
