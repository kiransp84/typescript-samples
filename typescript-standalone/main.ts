import { add } from "./add";

import {Job,NinjaTurtles} from "./JobType";

console.log(' inside main file ');



add(6, 7);

const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};

const dogName = adventurer.cat?.name;
console.log(dogName);


let stringOrnumber : any = "Kiran";

stringOrnumber = 123456;

// run time error because stringOrnumber is now became a number 
stringOrnumber.replace("K" , "k");

// anything can be assigned to unknown  
let useOfUnknown : unknown = "Parvathy";
// or 
let useOfUnknown2 : unknown = 1000000;

// if we try to invoke any specific functions then we will get an error 
//compilation errro 1
useOfUnknown.replace("P","p");
//compilation errro 2
useOfUnknown2.valueOf();
// unknown cannot be assigned to any other type  
let somestring : string = useOfUnknown;

// this is allowed 
useOfUnknown = useOfUnknown2;

// allows an array of number or string or both 
// | - union operator 
let userIdArray : (string|number)[] = [ "U123" , 456 , "ABC" , 1000 ];



let Engineer : Job = {
    description : "Developer",
    totalExperience : 2 ,
    technologies : [ "react"]
}

let Architect : Job = {
    description : "Developer",
    totalExperience : 2 ,
    technologies : [ ],
    onsite : false 
}


const findWeapon = ( turtle : NinjaTurtles ) : string => {
    return "sword";
}

findWeapon(NinjaTurtles.MIKE);