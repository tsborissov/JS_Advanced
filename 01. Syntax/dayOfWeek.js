function dayOfWeek(dayAsString){
    let result;

     switch (dayAsString){
        case 'Monday': result = 1; break;
        case 'Tuesday': result = 2; break;
        case 'Wednesday': result = 3; break;
        case 'Thursday': result = 4; break;
        case 'Friday': result = 5; break;
        case 'Saturday': result = 6; break;
        case 'Sunday': result = 7; break;
        default: result = 'error'; break;
    }

    return result;
}

console.log(dayOfWeek('Monday'));
console.log(dayOfWeek('Tuesday'));
console.log(dayOfWeek('Wednesday'));
console.log(dayOfWeek('Thursday'));
console.log(dayOfWeek('Friday'));
console.log(dayOfWeek('Saturday'));
console.log(dayOfWeek('Sunday'));
console.log(dayOfWeek('Invalid'));