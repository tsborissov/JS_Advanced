window.addEventListener('load', solution);

function solution() {
  const fullNameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const codeInput = document.getElementById('code');

  const input = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    code: ''
  };

  const infoPreview = document.getElementById('infoPreview');

  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');

  submitBtn.addEventListener('click', preview);
  editBtn.addEventListener('click', editInfo);
  continueBtn.addEventListener('click', complete);

  function preview(event) {
      input.fullName = fullNameInput.value.trim();
      input.email = emailInput.value.trim();
      input.phone = phoneInput.value.trim();
      input.address = addressInput.value.trim();
      input.code = codeInput.value.trim();

    if (!input.fullName || !input.email) {
      return;
    }

    const nameLi = document.createElement('li');
    nameLi.textContent = `Full Name: ${input.fullName}`;
    infoPreview.appendChild(nameLi);

    const emailLi = document.createElement('li');
    emailLi.textContent = `Email: ${input.email}`;
    infoPreview.appendChild(emailLi);

    const phoneLi = document.createElement('li');
    phoneLi.textContent = `Phone Number: ${input.phone}`;
    infoPreview.appendChild(phoneLi);

    const addressLi = document.createElement('li');
    addressLi.textContent = `Address: ${input.address}`;
    infoPreview.appendChild(addressLi);

    const codeLi = document.createElement('li');
    codeLi.textContent = `Postal Code: ${input.code}`;
    infoPreview.appendChild(codeLi);

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    fullNameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    codeInput.value = '';
  }

  function editInfo(event) {
    fullNameInput.value = input.fullName;
    emailInput.value = input.email;
    phoneInput.value = input.phone;
    addressInput.value = input.address;
    codeInput.value = input.code;

    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;

    infoPreview.innerHTML = '';
  }

  function complete(event) {
    const result = document.getElementById('block')

    const message = document.createElement('h3');
    message.textContent = 'Thank you for your reservation!';

    result.innerHTML = '';
    result.appendChild(message);
  }
}