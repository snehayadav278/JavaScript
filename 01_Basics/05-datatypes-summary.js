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


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack memory (Primitive) , Heap Memory (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email : "user@gmail.com" ,
    upi : "user@sbi"
}

let user2 = user1
console.log(user2);

user2.email = "sneha@google.com"
console.log(user1.email);
console.log(user2.email);