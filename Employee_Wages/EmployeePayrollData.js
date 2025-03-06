//UC 14
// Ability to check the name starts with capital and has at least 3 characters
// - Use Regex Pattern
// - Use Try Catch in case of Error

class EmployeePayrollData {
  //propertiy
  id;
  salary;
  name;
  gender;
  startDate;

  //constructor
  constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }

  //getter and setter method
  get name() {
    return this.name;
  }

  set name(name) {
    let nameRegx = RegExp("^[A-Z]{1}[a-z]{3,}$");
    if (nameRegx.test(name)) {
      this.name = name;
    } else {
      throw "Name is Incorrect";
    }
  }

  //method
  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const empDate =
      this.startDate === undefined
        ? "undefined"
        : this.startDate.toLocaleDateString("en-US", options);

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
      empDate
    );
  }
}

let employeePayrollData1 = new EmployeePayrollData(1, "Aditi", 50000);
console.log(employeePayrollData1.toString());
try {
  employeePayrollData1.name = "Anubhav";
  console.log(employeePayrollData1.toString());
} catch (e) {
  console.error(e);
}

let employeePayrollData2 = new EmployeePayrollData(
  2,
  "Ayan",
  50000,
  "M",
  new Date()
);
console.log(employeePayrollData2.toString());
