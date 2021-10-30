function solve() {
  let text = document.getElementById('text').value.trim();
  let naming = document.getElementById('naming-convention').value;

  let result = '';

  if (naming != 'Camel Case' && naming != 'Pascal Case') {
    result = 'Error!';
  } else {
    let textArr = text.split(' ').map(str => str.trim().toLowerCase());
    let startIndex = 0;

    if (naming == 'Camel Case') {
      startIndex = 1;
    }

    for (let i = startIndex; i < textArr.length; i++) {
      let currentWord = textArr[i];
      textArr[i] = currentWord.charAt(0).toUpperCase() + currentWord.substring(1);
    }

    result = textArr.join('');
  }

  document.getElementById('result').textContent = result;
}