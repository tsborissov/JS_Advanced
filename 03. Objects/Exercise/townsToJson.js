function towns(input){

    function roundToTwo(num) {
        return +(Math.round(num + "e+2")  + "e-2");
    }

    const result = [];

    const [townLabel, latitudeLabel, longitudeLabel] = input[0].substring(2, input[0].length - 2).split(' | ');

    for (let i = 1; i < input.length; i++){
        let [town, latitude, longitude] = input[i].substring(2, input[i].length - 2).split(' | ');
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));
        
        result.push({[townLabel]: town, [latitudeLabel]: latitude, [longitudeLabel]: longitude});
    }

    return JSON.stringify(result);
}

console.log(towns([
'| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));
console.log(towns([
'| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
));