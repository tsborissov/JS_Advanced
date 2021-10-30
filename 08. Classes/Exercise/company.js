class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let bestAverageSalary = 0;
        let bestDepartmentName = '';
        let bestDepartmentEmployees = [];
        let result = [];

        for (let department in this.departments) {
            const employeesCount = this.departments[department].length;

            let totalSalary = 0;
            for (let employee of this.departments[department]) {
                totalSalary += employee.salary;
            }

            const currentAverageSalary = totalSalary / employeesCount;

            if (currentAverageSalary > bestAverageSalary) {
                bestAverageSalary = currentAverageSalary;
                bestDepartmentName = department;
                bestDepartmentEmployees = this.departments[department].map(e => e);
            }
        }

        bestDepartmentEmployees = bestDepartmentEmployees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        result.push(`Best Department is: ${bestDepartmentName}`);
        result.push(`Average salary: ${bestAverageSalary.toFixed(2)}`);

        for (const employee of bestDepartmentEmployees) {
            result.push(`${employee.name} ${employee.salary} ${employee.position}`);
        }

        return result.join('\n');
    }
}

/*
`Best Department is: {best department's name}
Average salary: {best department's average salary}
{employee1} {salary} {position}
{employee2} {salary} {position}
{employee3} {salary} {position}
…`

*/

let c = new Company();
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("AStan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

