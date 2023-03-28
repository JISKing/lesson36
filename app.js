import { totalSalary } from "./methods.js";
console.log(`${totalSalary(employees)}: total salary, task 1.2`);

import * as methods from "./methods.js";
import employees from "./employees.js";

console.log(methods.departmentQuantity(employees));
console.log(methods.departmentSalary(employees));
