function argumentInfo(...input) {
    const counts = {};
    const result = [];

    input.forEach(element => {
        result.push(`${typeof(element)}: ${element}`);

        if (counts[typeof(element)]) {
            counts[typeof(element)]++;
        } else {
            counts[typeof(element)] = 1;
        }
    })

    const keys = Object.keys(counts).sort((a,b) => b.localeCompare(a));
    
    keys.forEach(key => {
        result.push(`${key} = ${counts[key]}`);
    })

    console.log(result.join('\n'));
}


argumentInfo('cat', 'dog', 42, function () { console.log('Hello world!'); });