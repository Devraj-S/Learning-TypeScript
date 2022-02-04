"use strict";
class newUser {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    printUser() {
        return `\nWelcome onboard ${this.firstName}.\n Please check your details below. \n Fullname: ${this.firstName + " " + this.lastName} \n Age: ${this.age}\n`;
    }
}
const user1 = new newUser("Devraj", "Singh", 21);
const user2 = new newUser("Ankush", "Singh", 18);
// console.log(user1.lastName)   //cannot access as lastName is private
// console.log(user1)
// console.log(user2.printUser(), user1.printUser())
class education extends newUser {
    constructor(firstName, lastName, age, school, percentage) {
        super(firstName, lastName, age);
        this.school = school;
        this.percentage = percentage;
    }
    addDetails() {
        return ` School: ${this.school}\n Percentage: ${this.percentage}%\n`;
    }
}
const student1 = new education("Devraj", "Singh", 21, "Modern School", 84);
console.log(student1.printUser());
console.log(student1.addDetails());
