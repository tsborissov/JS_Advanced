function solve(data, criteria) {
    const employees = JSON.parse(data);
    const [filterBy, filterVal] = criteria.split('-');

    function isMatch(element) {
        return element[filterBy] === filterVal;
    }

    const filtered = employees.filter(isMatch);
    const result = filtered.map((empl, index) => `${index}. ${empl.first_name} ${empl.last_name} - ${empl.email}`);

    console.log(result.join('\n'));
}


solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'id-1'
);
