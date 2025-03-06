//UC12
// Ability to create Employee Payroll Data with id, name and salary

class EmployeePayrollData {
  //propertiy
  id;
  salary;
  name;
  gender;
  startDate;

  //constructor
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.salary = salary;
    this.name = name;
    this.gender = gender;
    this.startDate = startDate;
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
      "id = " +
      this.id +
      ", name = " +
      this.name +
      ", salary = " +
      this.salary +
      ", gender = " +
      this.gender +
      ", startDate = " +
      this.startDate
    );
  }
}

let employeePayrollData = new EmployeePayrollData(1, "Aryan", 50000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "Arjun";
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(
  1,
  "Arshi",
  30000,
  "F",
  new Date()
);
console.log(newEmployeePayrollData.toString());
