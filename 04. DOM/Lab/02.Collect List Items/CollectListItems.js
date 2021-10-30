function extractText() {
    const elements = document.getElementById('items').children;

    const result = [];

    let cols = 0;

    for (const element of Array.from(elements)){
        result.push(element.textContent);
        
        if (element.textContent.length > cols){
            cols = element.textContent.length;
        }
    }

    const rows = result.length + 1;

    document.getElementById('result').rows = rows;
    document.getElementById('result').cols = cols;
    document.getElementById('result').textContent = result.join('\n');
}