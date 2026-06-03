//singleton

//object literals 

//Object.create

const mySym = Symbol("key1");

const jsUser = {
    name : "Hitesh" ,
    "full name" : "Hitesh Choudhary" ,
    age : 20 ,
    [mySym] : "myKey1" ,   //for symbol
    location : "Jaipur", 
    email : "hitesh@google.com" ,
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
// console.log(jsUser.full name); //error
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);


jsUser.email = "hitesh@chatgpt.com"

// Object.freeze(jsUser)

jsUser.email = "hitesh@microsoft.com"

console.log(jsUser["email"]);


jsUser.greeting = function(){
    console.log("hello js user");
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`hello JS User , ${this.name}`);
}

console.log(jsUser.greeting2());