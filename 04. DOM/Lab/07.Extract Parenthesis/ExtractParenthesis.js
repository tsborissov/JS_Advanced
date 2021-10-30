function extract(content) {
    const text = document.getElementById(content).textContent;

    const regexp = /\((.*?)\)/g;
    const matches = Array.from(text.matchAll(regexp));

    let result = [];
    for (const row of matches){
        result.push(row[1]);
    }

    return result.join('; ');
}