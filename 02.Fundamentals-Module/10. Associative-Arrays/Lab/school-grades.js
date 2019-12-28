function schoolGrades(input) {
    function average(arr) {
        let sum = 0;
        arr.forEach(el => sum += +el);
        return sum / arr.length;
    }
    let students = {};

    input.forEach(element => {
        let token = element.split(" ");
        let name = token.shift();
        let grades = token;
        if (students.hasOwnProperty(name)) {
            students[name] = students[name].concat(grades);
        } else {
            students[name] = grades;
        }
    });
    let sorted = Array.from(Object.entries(students))
        .sort((a, b) => average(a[1]) - average(b[1]));

    sorted.forEach(el => {
        let name = el[0];
        let grades = el[1];
        console.log(`${name}: ${grades.join(", ")}`);
    });
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);