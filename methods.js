import employees from "./employees.js";
export { totalSalary, departmentQuantity, departmentSalary };

function totalSalary(employees) {
  let salarySum = 0;
  employees.forEach((employee) => {
    salarySum += employee.salary;
  });
  return salarySum;
}

console.log(`${totalSalary(employees)}: total salary, task 1.1`);

function departmentQuantity(employees) {
  let departmentSum = new Set();
  employees.forEach((employee) => {
    departmentSum.add(employee.department);
  });
  return departmentSum.size;
}

function departmentSalary(employees){
  let salariesByDepartment = {};
  employees.forEach((employee) => {
    if (!salariesByDepartment[employee.department]) {
      salariesByDepartment[employee.department] = employee.salary;
    } else {
      salariesByDepartment[employee.department] += employee.salary;
    }
  });
  return salariesByDepartment;
}