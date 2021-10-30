function calorieObject(arr){
    const result = {};

    arr.forEach((element, index, arr) => {
        if (index % 2 == 0){
            result[element] = Number(arr[index+1]);
        }
    });

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);