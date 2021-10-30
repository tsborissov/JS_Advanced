function daysInMonth(monthInput, yearInput){
    return new Date(yearInput, monthInput, 0).getDate();
}

console.log(daysInMonth(1, 2012));