//UC 15
// Ability to check the employee id and salary are non zero positive number,
//  the gender is M or F and date is not a future date
// - Use Regex Pattern
// - Use Try Catch in case of Error

class EmployeePayrollData {
  // Properties
  id;
  salary;
  name;
  gender;
  startDate;

  // Constructor
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = startDate;
  }

  // Getter and Setter for ID
  get id() {
    return this._id;
  }
  set id(id) {
    let idRegex = RegExp("^[1-9][0-9]*$"); // Positive non-zero number
    if (idRegex.test(id)) {
      this._id = id;
    } else {
      throw "Invalid ID! ID must be a positive non-zero number.";
    }
  }

  // Getter and Setter for Name
  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$"); // Starts with capital & at least 3 characters
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "Invalid Name! Name must start with a capital letter and have at least 3 characters.";
    }
  }

  // Getter and Setter for Salary
  get salary() {
    return this._salary;
  }
  set salary(salary) {
    if (salary > 0) {
      this._salary = salary;
    } else {
      throw "Invalid Salary! Salary must be a positive non-zero number.";
    }
  }

  // Getter and Setter for Gender
  get gender() {
    return this._gender;
  }
  set gender(gender) {
    let genderRegex = RegExp("^[MF]$"); // M or F only
    if (genderRegex.test(gender)) {
      this._gender = gender;
    } else {
      throw "Invalid Gender! Gender must be 'M' or 'F'.";
    }
  }

  // Getter and Setter for Start Date
  get startDate() {
    return this._startDate;
  }
  set startDate(startDate) {
    if (startDate > new Date()) {
      throw "Invalid Start Date! Date cannot be in the future.";
    } else {
      this._startDate = startDate;
    }
  }

  //method
  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    // const empDate= this.startDate===undefined?"undefined": this.startDate.toLocaleDateString("en-US",options);

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

const emp1 = new EmployeePayrollData(101, "Anush", 50000, "M", "2023-05-10");
const emp2 = new EmployeePayrollData(102, "Ojas", 70000, "M", "2022-11-15");
const emp3 = new EmployeePayrollData(103, "Om", -30000, "M", "2024-01-20");
const emp4 = new EmployeePayrollData(104, "Sejal", 60000, "F", "2023-06-01");
const emp5 = new EmployeePayrollData(105, "Aaditya", 80000, "M", "2026-04-01");

console.log(emp1.toString());
console.log(emp2.toString());
console.log(emp3.toString());
console.log(emp4.toString());
console.log(emp5.toString());
