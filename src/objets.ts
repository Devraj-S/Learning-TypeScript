type employee = {
    employeeID:number
    employeeName:string
}

const Employee:employee = {
    employeeID: 1,
    employeeName: "Devraj Singh"
}

//Interface : cannot be used with unions
interface employeeInterface {
    employeeID:number
    employeeName:string
}

const EmployeeInterface:employeeInterface = {
    employeeID: 1,
    employeeName: "Devraj Singh"
}

//type assertion
let y:any = 1
let b = <number>y //or
// let b = y as number

function concate(s1:string, s2:string){
    return s1+s2
}
console.log(concate("Devraj", "Singh"))

function printMessage(d:string): void {
    console.log("Hello "+d)
}

console.log(printMessage("MRVLSAF"))