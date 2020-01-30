function filterEmployees(data, criteria) {
    data = JSON.parse(data);
    let [key, value] = criteria.split("-");
    let filtered = data.filter(element => {
        if (element[key] === value) {
            return true;
        }
        return false;
    });
    filtered.forEach((element, index) => {
        console.log(`${index}. ${element.first_name} ${element.last_name} - ${element.email}`);
    });
}

filterEmployees(`[{
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
    'last_name-Johnson'
);