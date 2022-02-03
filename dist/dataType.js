"use strict";
let age = 20;
let firstName = "Devraj Singh";
let isMale = true;
let hobby = 3;
let hobbies = [
    "football",
    "badminton",
    "8ball pool"
];
let academic = ["BSAITM", 2022]; //tuples
let x; //Union
x = "rohan";
x = 22;
var directions;
(function (directions) {
    directions[directions["north"] = 0] = "north";
    directions[directions["east"] = 1] = "east";
    directions[directions["west"] = 2] = "west";
    directions["south"] = "string"; //by default 3 if not assigned
})(directions || (directions = {}));
console.log(directions.east);
console.log(directions.south);
