let age:number = 20
let firstName:string = "Devraj Singh"
let isMale:boolean = true
let hobby:any = 3
let hobbies:string[] = [
    "football",
    "badminton", 
    "8ball pool"
]
let academic:[string, number] = ["BSAITM", 2022]  //tuples

let x:string | number  //Union
x = "rohan"
x = 22

enum directions {  //enums
    north, //0
    east,  //1
    west,  //2
    south = "string" //by default 3 if not assigned
}
console.log(directions.east)
console.log(directions.south)
