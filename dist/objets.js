"use strict";
const Employee = {
    employeeID: 1,
    employeeName: "Devraj Singh"
};
const EmployeeInterface = {
    employeeID: 1,
    employeeName: "Devraj Singh"
};
//type assertion
let y = 1;
let b = y; //or
// let b = y as number
function concate(s1, s2) {
    return s1 + s2;
}
console.log(concate("Devraj", "Singh"));
function printMessage(d) {
    console.log("Hello " + d);
}
console.log(printMessage("MRVLSAF"));
