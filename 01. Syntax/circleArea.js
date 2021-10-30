function circleArea(radius){
    let inputType = typeof(radius);

    if (inputType === 'number'){
        let result = (Math.PI * radius ** 2);
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circleArea(5);
circleArea('name');