function aggregateElements(elements){
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(array, initialValue, func){
        let result = initialValue;

        for (let i = 0; i < array.length; i++){
            result = func(result, array[i]);
        }

        console.log(result);
    }
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
aggregateElements([1]);