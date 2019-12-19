function schoolRegister(input) {
    let studentsInfo = {};

    function average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

    input.forEach(element => {
        element = element.split(", ");
        let grade = Number(element[1].split(': ')[1]) + 1;
        let name = element[0].split(': ')[1];
        let score = Number(element[2].split(': ')[1]);

        if (score >= 3) {
            let student = { name, score };
            if (studentsInfo.hasOwnProperty(grade)) {
                studentsInfo[grade].push(student);
            } else {
                studentsInfo[grade] = [];
                studentsInfo[grade].push(student);
            }
        }
    });
    for (const key in studentsInfo) {
        let students = studentsInfo[key];
        console.log(`${key} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(', ')}`);
        console.log(`Average annual grade from last year: ${average(students.map(s => s.score)).toFixed(2)}\n`);
    }
}

schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);