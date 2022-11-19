"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./add");
const JobType_1 = require("./JobType");
console.log(' inside main file ');
(0, add_1.add)(6, 7);
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};
const dogName = (_a = adventurer.cat) === null || _a === void 0 ? void 0 : _a.name;
console.log(dogName);
let stringOrnumber = "Kiran";
stringOrnumber = 123456;
// run time error because stringOrnumber is now became a number 
stringOrnumber.replace("K", "k");
// anything can be assigned to unknown  
let useOfUnknown = "Parvathy";
// or 
let useOfUnknown2 = 1000000;
// if we try to invoke any specific functions then we will get an error 
//compilation errro 1
useOfUnknown.replace("P", "p");
//compilation errro 2
useOfUnknown2.valueOf();
// unknown cannot be assigned to any other type  
let somestring = useOfUnknown;
// this is allowed 
useOfUnknown = useOfUnknown2;
// allows an array of number or string or both 
// | - union operator 
let userIdArray = ["U123", 456, "ABC", 1000];
let Engineer = {
    description: "Developer",
    totalExperience: 2,
    technologies: ["react"]
};
let Architect = {
    description: "Developer",
    totalExperience: 2,
    technologies: [],
    onsite: false
};
const findWeapon = (turtle) => {
    return "sword";
};
findWeapon(JobType_1.NinjaTurtles.MIKE);
