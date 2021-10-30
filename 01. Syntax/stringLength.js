function stringLength(arg1, arg2, arg3){
    let totalLength = arg1.length + arg2.length + arg3.length;
    console.log(totalLength);

    let avgLength = Math.floor(totalLength / 3);
    console.log(avgLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');