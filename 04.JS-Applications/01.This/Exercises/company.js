class Company {

    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }

        let targetDepartment = this.departments.find(x => x.department === department);

        if (!targetDepartment) {
            targetDepartment = {
                department: department,
                employees: []
            };

            this.departments.push(targetDepartment);
        }

        targetDepartment.employees.push({
            username: username,
            salary: salary,
            position: position
        });

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        const department = this.departments
            .sort((a, b) =>
                b.employees
                .reduce((x, y) =>
                    x + y) - a.employees
                .reduce((x, y) =>
                    x + y))[0];

        return `Best Department is: ${department.department}\nAverage salary: ${(department
            .employees
            .map(x =>
                x.salary)
            .reduce((x, y) =>
                x + y) / department.employees.length)
                .toFixed(2)}\n${department
                    .employees
                    .sort((a, b) =>
                        b.salary - a.salary || a.username.localeCompare(b.username))
                    .map(x =>
                        `${x.username} ${x.salary} ${x.position}`)
                    .join("\n")}`;
    }
}