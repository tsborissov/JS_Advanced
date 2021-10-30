function solve() {
  const itemsPerParagraph = 3;
  const inputText = document.getElementById('input').value;
  let sentences = inputText.split('.');
  sentences = sentences.filter(val => val); // remove empty sentences
  sentences = sentences.map(s => s.trim());
  sentences = sentences.map(s => s += '.')
  
  const targetOutputElement = document.getElementById('output');
  targetOutputElement.innerHTML = '';
  
  for (let i = 0; i < sentences.length; i += itemsPerParagraph) {
    let output = [];

    output.push(sentences.slice(i, i + itemsPerParagraph));
    
    let outputText = output.join('');

    const paragraph = document.createElement(`p`);
    paragraph.innerText = outputText;
    targetOutputElement.appendChild(paragraph);
  }
}