//primitive (call by value)

// 7 types : String  , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 3629363936494372n



// Reference Type (Non - Primitive)

// Array , Objects , Functions
const heroes = ["shaktiman" , "naagra" , "doga"];

let myObj = {
    name : "sneha",
    age : 20 
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof outsideTemp);