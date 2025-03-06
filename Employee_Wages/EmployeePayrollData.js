//UC12
// Ability to create Employee Payroll Data with id, name and salary

class EmployeePayrollData {
  //propertiy
  id;
  salary;
  name;

  //constructor
  constructor(id, name, salary) {
    this.id = id;
    this.salary = salary;
    this.name = name;
  }

  //getter and setter method
  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  //method
  toString() {
    return (
      "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary
    );
  }
}

let employeePayrollData = new EmployeePayrollData(1, "Aryan", 50000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "Arjun";
console.log(employeePayrollData.toString());
